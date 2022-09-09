import { config } from "../config/config";

const nodemailer = require("nodemailer");
export const sendMail = async () => {
    var transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "67fc0730b5ad54",
          pass: "0e992fb9131c44"
        }
      });
      transport.sendMail({
        from: "RestKur@kurkur.co.il", // sender address
        to: config.mail.emailAddressTo, // list of receivers
        subject: "נמצא מקום במסעדה!", // Subject line
        text: `Hurry up! a new location is available at: ${config.ontopo.slug}\n
         Date: ${config.ontopo.date}\n
         Requested time: ${config.ontopo.time}`, // plain text body
      })
}