const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8000;
const app = express();

const users = [
    {
        userId: 45089,
        name: "Owen",
        position: "Captian of the Breakroom"
    },
    {
        userId: 223,
        name: "Brooke",
        position: "Winner of All Dance-Offs"
    },
    {
        userId: 6582,
        name: "Gobi",
        position: "King of Mid-Day Naps"
    }
];
const awards = [
    {
        id: 1,
        title: "Best Boss Award!",
        comment: "Thanks for always looking out for us.",
        sender: "Fabian",
        receiver: "Leon"
    },
    {
        id: 2,
        title: "Longest Commute Award!",
        comment: "I can't believe Laura makes it to work as often as she does.",
        sender: "Archit",
        receiver: "Laura"
    },
    {
        id: 3,
        title: "Most likely to nap at work!",
        comment: "Maybe you need more coffee.",
        sender: "Gobi",
        receiver: "Owen"
    }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.get("/api/users", (req, res) => res.json(users));
app.get("/api/awards", (req, res) => res.json(awards));
app.post("/api/kudos", (req, res) => {
    console.log(req.body);
    awards.push(req.body);
    res.json(awards);
});

app.listen(PORT, function () {
    console.log(`We are connected 🌎 on PORT ${PORT}`);
});
