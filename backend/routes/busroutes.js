import express from "express";
import { getAllBuses, searchBuses } from "../controllers/buscontroller.js";

const router = express.Router();

router.get("/buses", getAllBuses);
router.get("/buses/search", searchBuses);

export default router;