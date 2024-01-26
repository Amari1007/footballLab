import express from 'express';
const route = express.Router();

route.get("/", (req, res) => {
    res.render("index");
});

route.get("/home", (req, res) => {
    res.render("index");
});

route.get("/teams", (req, res) => {
    res.render("teams");
});

route.get("/players", (req, res) => {
    res.render("players");
});

route.get("/player-view", (req, res) => {
    const playerId = req.params.id;
    res.render("player-view");
});

export default route;
