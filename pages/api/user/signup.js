import { errorHandler, validHandler } from "../../../utils/common";
import bcrypt from "bcrypt";
var user = require("../../../model/User");

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27016/nextTest");

export default async function handle(req, res) {
  if (req.method !== "POST") {
    errorHandler("Invalid Resquest", res);
  } else {
    try {
      const { email, password } = req.body;
      console.log(req.body);
      validHandler(req.body);
      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = new user({ email: email, password: hashPassword });
      const saveUser = await newUser.save();
      if (newUser) {
        saveUser;
        res.status(201).json({
          hasError: false,
          body: "success",
        });
      } else {
        errorHandler("something went wrong", res);
      }
    } catch (error) {
      errorHandler(error, res);
    }
  }
}
