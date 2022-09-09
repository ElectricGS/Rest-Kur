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
exports.sendMail = void 0;
const config_1 = require("../config/config");
const nodemailer = require("nodemailer");
const sendMail = () => __awaiter(void 0, void 0, void 0, function* () {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "67fc0730b5ad54",
            pass: "0e992fb9131c44"
        }
    });
    transport.sendMail({
        from: "RestKur@kurkur.co.il",
        to: config_1.config.mail.emailAddressTo,
        subject: "נמצא מקום במסעדה!",
        text: `Hurry up! a new location is available at: ${config_1.config.ontopo.slug}\n
         Date: ${config_1.config.ontopo.date}\n
         Requested time: ${config_1.config.ontopo.time}`, // plain text body
    });
});
exports.sendMail = sendMail;
