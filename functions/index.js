const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();
require("dotenv").config();

const {SENDER_EMAIL, SENDER_APP_PSWD} = process.env;


exports.sendEamilNotification=functions.firestore.document("messages/{docId}")
    .onCreate((snap, ctx)=>{
      const data = snap.data();

      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_APP_PSWD,
        },
      });
      authData.sendMail({
        from: `${data.email}`,
        to: "badiostudio@gmail.com",
        subject: "BadioStudio New Email Notification",
        text: `${data.body}`,
      }).then((res)=>console.log("Successfully sent email"))
          .catch((err)=>console.log("Failed PORFOLIO send email :", err));
    });
