"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config/config");
const mailer_1 = require("./mailer/mailer");
const ontopo_1 = require("./rest-providers/ontopo/ontopo");
const node_cron_1 = require("node-cron");
let ontopoReq = {
    slug: config_1.config.ontopo.slug,
    locale: "he",
    criteria: {
        size: config_1.config.ontopo.peoples,
        date: config_1.config.ontopo.date,
        time: config_1.config.ontopo.time,
    }
};
(0, node_cron_1.schedule)('*/15 * * * *', () => {
    console.log("New search started.");
    (0, ontopo_1.checkOntopoAvilabilty)(ontopoReq, config_1.config.ontopo.flexible).then(availability => {
        if (availability) {
            (0, mailer_1.sendMail)();
        }
    });
});
