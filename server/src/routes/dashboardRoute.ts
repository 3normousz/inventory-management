import { Router } from "express";
import { getDashboardMatrices } from "../controllers/dashboardController";

const router = Router();

router.get("/", getDashboardMatrices);

export default router;
