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
exports.checkTabitAvailability = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = require("../../config/config");
const getTabitRest = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios_1.default.post(config_1.config.tabitRestUrl, payload);
});
const checkTabitAvailability = (payload, isFlex) => __awaiter(void 0, void 0, void 0, function* () {
    var resp = (yield getTabitRest(payload)).data;
    if ("reservation" in resp) {
        //TODO - AUTO CANCEL THE RESERVATION ID
        return true;
    }
    else {
        let tabitParcialResponse = resp;
        for (const result of tabitParcialResponse === null || tabitParcialResponse === void 0 ? void 0 : tabitParcialResponse.alternative_results) {
            if (isFlex && (result === null || result === void 0 ? void 0 : result.requested_day_result)) {
                //TODO - AUTO CANCEL THE RESERVATION ID
                return true;
            }
        }
    }
    return false;
});
exports.checkTabitAvailability = checkTabitAvailability;
