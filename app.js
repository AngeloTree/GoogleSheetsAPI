const express = require("express");
const { google } = require("googleapis");
const { authGoogle } = require("google-auth-library");
require("dotenv").config();

// let testENV = JSON.parse(process.env.GOOGLE_ENV);
let keys = process.env["GOOGLE_ENV"];
const googleKeys = JSON.parse(keys);
const privateKey = googleKeys["private_key"];
const keyId = googleKeys["private_key_id"];
const email = googleKeys["client_email"];
const clientId = googleKeys["client_id"];

const app = express();

app.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: "cred.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  //   // Instance of Google Sheets API
  //   const googleSheets = google.sheets({ version: "v4", auth: client });

  //   const spreadsheetId = "1jFXf0ZtBZNzxhO0z87Q3Vx5ymQzAqVF5Aks01YoVdME";

  //   // Get metadata about spreadsheet
  //   const metaData = await googleSheets.spreadsheets.get({
  //     auth,
  //     spreadsheetId,
  //   });

  //   res.send(metaData);
});

app.listen(3000, (req, res) => {
  console.log("Running on 3000");
});
