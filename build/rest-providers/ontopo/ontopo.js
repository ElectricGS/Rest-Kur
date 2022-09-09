"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkOntopoAvilabilty = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config/config");
const ontopo_Interface_1 = require("./ontopo-Interface");
const getOntopoRest = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.post(config_1.config.ontopoRestUrl, payload);
});
const checkOntopoAvilabilty = (payload, isFlex) => __awaiter(void 0, void 0, void 0, function* () {
    const resp = (yield getOntopoRest(payload)).data;
    //check if there is any options to begin with.
    if (!(resp === null || resp === void 0 ? void 0 : resp.areas)) {
        return false;
    }
    for (const area of resp === null || resp === void 0 ? void 0 : resp.areas) {
        for (const option of area === null || area === void 0 ? void 0 : area.options) {
            if (option.method == ontopo_Interface_1.Method.Seat || option.method == ontopo_Interface_1.Method.Phone) {
                if (isFlex) {
                    return true;
                }
                else {
                    if (option.time == payload.criteria.time) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
});
exports.checkOntopoAvilabilty = checkOntopoAvilabilty;
