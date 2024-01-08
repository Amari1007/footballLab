import mongoose, {Mongoose, mongo} from "mongoose";

const season21_22 = new mongoose.Schema({
    league_id: {
        type: Number,
        required: true,
    },
});


const searchPlayer = new mongoose.model("season_21_22", season21_22);
export default searchPlayer;
