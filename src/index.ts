import { config } from "./config/config";
import { sendMail } from "./mailer/mailer";
import { checkOntopoAvilabilty } from "./rest-providers/ontopo/ontopo";
import { OntopoRequest} from "./rest-providers/ontopo/ontopo-Interface";
import {schedule} from "node-cron"

let ontopoReq: OntopoRequest = {
    slug: config.ontopo.slug,
    locale: "he",
    criteria: {
        size: config.ontopo.peoples,
        date: config.ontopo.date,
        time: config.ontopo.time,
    }
}
schedule('*/15 * * * *', () => {
    console.log("New search started.")
    checkOntopoAvilabilty(ontopoReq,config.ontopo.flexible).then(availability=>{
        if(availability){
            sendMail()
        }
    })
  });
