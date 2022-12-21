const express = require("express");
const { google } = require("googleapis");
require("dotenv").config();

let testENV = JSON.parse(process.env.GOOGLE_ENV);

const app = express();

app.get("/", async (req, res) => {
  const auth = new google.auth.GoogleAuth({
    keyFile: testENV,
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API n
});

app.listen(3000, (req, res) => {
  console.log("Running on 3000");
});
