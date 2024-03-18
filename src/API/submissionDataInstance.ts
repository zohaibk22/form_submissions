import axios from "axios";
require("dotenv").config();

export const submissionDataInstance = axios.create({
  baseURL: process.env.FORM_URL,
  headers: {
    Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
  },
});
