import express from "express";
import model from "../config/gemini.js";
import historyModel from "../models/historyModel.js";

const router = express.Router();

const error = (msg, status, res) => {
  res.status(status).json({ error: msg });
};

router.post("/generate", async (req, res) => {
  const { input } = req.body;

  if (!input) {
    return error("Please provide a valid prompt", 400, res);
  }
  const prompt = `${input} in markdown with detailed explanation with notes`;
  const result = await model.generateContent(prompt);
  const ai_output = await result.response.text();

  await historyModel.create({
    ai_output,
    prompt,
    input,
  });

  res.status(200).json({
    msg: "success",
    ai_input: prompt,
    ai_output: ai_output,
  });
});

router.get("/history", async (req, res) => {
  const history = await historyModel.find({}).select("input");
  return res.status(200).json(history);
});
router.get("/code/:id", async (req, res) => {
  const history = await historyModel
    .findById(req.params.id)
    .select("-ai_input");
  return res.status(200).json(history);
});

export default router;
