import mongoose from "mongoose";

const videoSchema = mongoose.Schema({
  url: String,
  description: String,
  likes: String,
  messages: String,
  shares: String,
  song: String
});

export default mongoose.model("videos", videoSchema);
