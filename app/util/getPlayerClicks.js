import playersModel from "../models/playersModel";

async function getPlayerClicks(){
    try {
        const query = await playersModel.find().sort({clicks: -1}).limit(7);
        if(query.length > 0){
            // console.log(query);
            return {
                success: true,
                message: query,
            }
        }else{
            throw new Error("An unknown error happened when getting player clicks");
        }
        
    } catch (error) {
        return {
            success: false,
            message: error,
            level: 1,
        }
    }    
    
}

export default getPlayerClicks;
