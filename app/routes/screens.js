import express from 'express';
const route = express.Router();

route.get("/home", (req, res) => {
    res.render("index");
});

export default route;
