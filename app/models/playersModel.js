import mongoose, {Mongoose, mongo} from "mongoose";

const players = new mongoose.Schema({
    id: {
        type: Number,
    },

    name: {
        type: String,
        required: true,
    },

    teamId: {
        type: Number,
    },

    team: {
        type: String,
    },
});

const playersModel = new mongoose.model("players", players);
export default playersModel;
