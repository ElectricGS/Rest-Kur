import axios from "axios";
import { config } from "../../config/config";
import { TabitParcialResponse, TabitPerfectResponse, TabitRequest } from "./tabit-interface";

const getTabitRest = async (payload: TabitRequest) => {
    return await axios.post(config.tabitRestUrl, payload)
}

export const checkTabitAvailability = async (payload: TabitRequest,isFlex:Boolean) => {
    var resp = (await getTabitRest(payload)).data
    if("reservation" in resp){
        //TODO - AUTO CANCEL THE RESERVATION ID
        return true
    }
    else{
       let tabitParcialResponse = resp as TabitParcialResponse
       for(const result of tabitParcialResponse?.alternative_results){
            if(isFlex && result?.requested_day_result){
                //TODO - AUTO CANCEL THE RESERVATION ID
                return true
            }
       }
    }
    return false
}