import express from "express";
import authRouter from "./auth.js";
import productRouter from "./product.js";
import user from "./user.js";

const router = express.Router();

router.use("/auth", authRouter);
router.use("/product", productRouter);
router.use("/user", user);

export default router;
