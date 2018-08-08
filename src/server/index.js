require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const salesForce = require("./config/salesforce");

const PORT = process.env.PORT || 8000;
const app = express();

const awards = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/users", (req, res) => {
    salesForce.query(`SELECT id, Name, email__c, password__c FROM Tiny_Improvements_User__c ORDER BY Name ASC`).then((data) => {
        res.json(data.records.map(record => record._fields))
    });
});

app.get("/api/kudos", (req, res) => {
    salesForce.query(`SELECT id, Name, Comment__c, Receiver__c, Sender__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c WHERE Receiver__r.Name != NULL AND Sender__r.Name != NULL AND (NOT (Name LIKE '%test%' OR Comment__c LIKE '%test%')) ORDER BY LastModifiedDate DESC`).then((data) => {
        res.json(data.records.map(record => record._fields))
    });
});

app.get("/api/mykudos", (req, res) => {
    salesForce.query(`SELECT id, Name, Comment__c, Receiver__c, Sender__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c WHERE Receiver__r.Name = 'Archit' ORDER BY LastModifiedDate DESC`).then((data) => {
        res.json(data.records.map(record => record._fields))
    });
});

app.get("/api/negativekudos/:id", (req, res) => {
    salesForce.query(`SELECT id, Name, Comment__c, Receiver__c, Sender__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c WHERE NOT (Comment__c LIKE ` + `'%` + req.params.id + `%' OR Name LIKE ` + `'%` + req.params.id + `%') ORDER BY LastModifiedDate DESC`).then((data) => {
        res.json(data.records.map(record => record._fields))
    });
});

app.post("/api/kudos", (req, res) => {
    salesForce.createKudos(req.body).then(() => {
        res.json({ success: true })
    });
});

app.get("/api/filter/:id", (req, res) => {
    salesForce.query(`SELECT Id, Name, Comment__c, Receiver__r.Name, Sender__r.Name FROM Kudos__c WHERE Comment__c LIKE ` + `'%` + req.params.id + `%' OR Name LIKE ` + `'%` + req.params.id + `%' ORDER BY LastModifiedDate DESC`).then((data) => {
        res.json(data.records.map(record => record._fields))
    });
});

app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
