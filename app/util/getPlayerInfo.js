import playersModel from "../models/playersModel";

async function getPlayerInfo(playerId= null){
    if(playerId){
        try{
            const response = await playersModel.findOne({id: playerId});
            // console.log(response);
            if(response.name){
                return {...response, message: "query succeeded", success: true};
            }else{
                return {success: false, message: "No player found", level: 1};
            }
        }catch(err){
            return {success: false, message: err, level: 2};
        }
    }else{
        return {success: false, message: "Parameter empty", level: 3};
    }
}

export default getPlayerInfo;
