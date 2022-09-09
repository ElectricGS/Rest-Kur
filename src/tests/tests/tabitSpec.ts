import { checkTabitAvailability} from "../../rest-providers/tabit/tabit";
import { OnlineBookingSourceClient, TabitRequest } from "../../rest-providers/tabit/tabit-interface";

describe("Tabit Tests", () => {
    it("checkTabitAvailability te be resolved", async () => {
        let testTabitReq: TabitRequest = {
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
            } as OnlineBookingSourceClient
        }
        await expectAsync(checkTabitAvailability(testTabitReq,true)).toBeResolved()
    });
});