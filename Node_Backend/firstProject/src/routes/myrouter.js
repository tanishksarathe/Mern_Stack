import express from "express";
import {
  userLogin,
  userLogOut,
  userRegistration,
} from "../controllers/myController.js";

const router = express.Router();
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.get("/logout", userLogOut);

export default router;
