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
Object.defineProperty(exports, "__esModule", { value: true });
const ontopo_1 = require("../../rest-providers/ontopo/ontopo");
describe("Ontopo Tests", () => {
    it("checkOntopoAvilabilty te be resolved", () => __awaiter(void 0, void 0, void 0, function* () {
        let testOntopoObj = {
            slug: "36960535",
            locale: "he",
            criteria: {
                size: "2",
                date: "20220929",
                time: "1900",
            }
        };
        yield expectAsync((0, ontopo_1.checkOntopoAvilabilty)(testOntopoObj, true)).toBeResolved();
    }));
});
