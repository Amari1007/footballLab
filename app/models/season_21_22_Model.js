import mongoose, {Mongoose, mongo} from "mongoose";

const season21_22 = new mongoose.Schema({
    league_id: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
    },
    league_name: {
        type: String
    },
    data: {
        type: Object
    },
});


const season_21_22_Model = new mongoose.model("season_21_22", season21_22);
export default season_21_22_Model;
