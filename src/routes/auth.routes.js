import { Router } from "express";
import auth from "../middleware/auth.middleware.js";
import { signup, login, getMe } from "../controller/auth.controller.js";

const router = Router();

router.post("/register", signup);
router.post("/login", login);
router.get("/me", auth, getMe);

export default router;