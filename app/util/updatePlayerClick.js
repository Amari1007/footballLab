import playersModel from "../models/playersModel";

async function updatePlayerClick(playerId){
    if(playerId !== null){
        try {
            const query = await playersModel.updateOne({id: playerId}, {$inc: {clicks: 1}});
            console.log(query);
            if(query.nModified > 0){
                return {
                    success: true,
                    message: "update player click succeeded",
                }
            }else{
                throw new Error("unknown error happened");
            }
        } catch (error) {
            return {
                success: false,
                message: "error on update player click",
                level: 1,
            }
        }
        
    }else{
        return {
            success: false,
            message: "Parameter empty on update player click",
            level: 2,
        }
    }
    
}

export default updatePlayerClick;
