import express from 'express';
import playersModel from '../models/playersModel';
import getPlayerClicks from '../util/getPlayerClicks';
const apiRoute = express.Router();

apiRoute.get("/search_player/:name", async (req, res) => {
    const playerName = req.params.name;
    try {
        const query = await playersModel.find(
            {name: {$regex: new RegExp(`${playerName}`, 'i')} })
        .limit(5)
        .exec();

        if(query.length > 0){
            // console.log(query);
    
            // SEND AN ARRAY CONTAINING SIMILAR PLAYERS
            res.json({results: query, success: true});

        }else{
            res.json({results:[], success:false})
        }

    } catch (err) {
        res.status(500).json({message: `DB internal error ${err}`, success: false});
    }
});

apiRoute.get("/getPlayerClicks", async (req, res) => {
    const result = await getPlayerClicks();
    // console.log(result);
    res.json({data: result.message});
});

export default apiRoute;
