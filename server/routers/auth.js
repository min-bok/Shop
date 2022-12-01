import express from "express";

const router = express.Router();

router.post("/login", async (req, res) => {
  req.session["email"] = "leehy0782@gmail.com";
  res.send("login");
});

router.post("/logout", async (req, res) => {
  req.session.destroy();
  res.send("logout");
});

export default router;
