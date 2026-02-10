// routes/userRoutes.js
import express from "express";
import { User } from "../models/User.js";

const router = express.Router();

router.post("/sync", async (req, res) => {
  const { firebaseId, email, username } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { firebaseId },
      { email, username }, // It won't save username if it's not in the schema (Step 1)
      { new: true, upsert: true },
    );
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findOne({ firebaseId: req.params.id });
    res.json(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
