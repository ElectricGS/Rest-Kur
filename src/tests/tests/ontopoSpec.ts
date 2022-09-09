import { checkOntopoAvilabilty} from "../../rest-providers/ontopo/ontopo";
import { OntopoRequest, OntopoResponse } from "../../rest-providers/ontopo/ontopo-Interface";


describe("Ontopo Tests", () => {   
    it("checkOntopoAvilabilty te be resolved",async ()=> {
        let testOntopoObj:OntopoRequest = {
            slug: "36960535",
            locale: "he",
            criteria: {
                size: "2",
                date: "20220929",
                time: "1900",      
            }
        }
       await expectAsync(checkOntopoAvilabilty(testOntopoObj,true)).toBeResolved()
    });
  });