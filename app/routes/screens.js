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

export default route;
