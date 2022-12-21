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

  const client = await auth.getClient();
});

app.listen(3000, (req, res) => {
  console.log("Running on 3000");
});
