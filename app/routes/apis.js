import express from 'express';
import searchPlayer from '../models/searchPlayerModel';
const apiRoute = express.Router();

apiRoute.get("/search_player", async (req, res) => {
    try {
        const result = await searchPlayer.find({
            league_id: 325,
        }).exec();

        res.json(result);
        
    } catch (err) {
        res.status(500).json({message: `DB internal error ${err}`, success: false});
    }
});

export default apiRoute;
