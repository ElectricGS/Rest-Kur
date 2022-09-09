import axios from "axios"
import { config } from "../../config/config"
import {Method, OntopoRequest, OntopoResponse } from "./ontopo-Interface"

const getOntopoRest = async (payload: OntopoRequest) => {
    return await axios.post(config.ontopoRestUrl, payload)
}

export const checkOntopoAvilabilty = async (payload: OntopoRequest, isFlex: Boolean) => {
    const resp: OntopoResponse = (await getOntopoRest(payload)).data as OntopoResponse
    //check if there is any options to begin with.
    if (!resp?.areas) {
        return false
    }
    for (const area of resp?.areas) {
        for (const option of area?.options) {
            if (option.method == Method.Seat || option.method == Method.Phone) {
                if (isFlex) {
                    return true
                }
                else {
                    if (option.time == payload.criteria.time) {
                        return true
                    }
                }
            }
        }
    }
    return false
}