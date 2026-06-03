import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://api.adviceslip.com/advice", {
      headers: {
        Accept: "application/json"
      }
    });

    res.json({
      advice: response.data.slip.advice
    });
  } catch {
    res.status(500).json({ message: "Failed to fetch advice" });
  }
});

export default router;
