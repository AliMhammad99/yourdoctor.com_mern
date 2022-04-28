import express from "express";
import SpecialtyController from "./specialty.controller.js";

const router = express.Router();

router.route("/").get(SpecialtyController.apiGetSpecialty);

export default router;
