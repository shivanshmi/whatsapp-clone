import express from "express";

import { addUser } from "../controller/user-controller.js";

const Route = express.Router();

Route.post("/addUser", addUser);

export default Route;
