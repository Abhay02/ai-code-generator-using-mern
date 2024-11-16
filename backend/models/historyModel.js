import mongoose from "mongoose";

const historySchema = new mongoose.Schema(
  {
    input: { type: String, required: true },
    prompt: { type: String, required: true },
    ai_output: { type: String, required: true },
  },
  { timestamps: true }
);

const historyModel = mongoose.model("history", historySchema);

export default historyModel;
