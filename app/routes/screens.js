import express, { response } from 'express';
import getPlayerInfo from '../util/getPlayerInfo';
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

route.get("/player-view/:id", async (req, res) => {
    const playerId = Number.parseInt(req.params.id);
    
    // Get player info
    const data = await getPlayerInfo(playerId);

    // Render appropriate page
    if(data.success){
        // returns object with many fields, only need <_doc>
        res.render("player-view", {data: data._doc});
    }else{
        if(data.level === 1){
            console.log(data);
            res.render("404", {data});
        }else{
            console.log(data);
            res.render("404", {data});            
        }        
    }
    
});

export default route;
