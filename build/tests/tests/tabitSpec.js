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
const tabit_1 = require("../../rest-providers/tabit/tabit");
describe("Tabit Tests", () => {
    it("checkTabitAvailability te be resolved", () => __awaiter(void 0, void 0, void 0, function* () {
        let testTabitReq = {
            organization: "5c77adcd17187875bc13f2cf",
            type: "future_reservation",
            standby_reservation: false,
            seats_count: 2,
            preference: "inside",
            arriving_within: null,
            reserved_from: new Date("2022-09-05T18:00:00.000Z"),
            online_booking_source_client: {
                name: "tabit-web",
                environment: "il-prod"
            }
        };
        yield expectAsync((0, tabit_1.checkTabitAvailability)(testTabitReq, true)).toBeResolved();
    }));
});
