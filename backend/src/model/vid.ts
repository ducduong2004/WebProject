/**
 * Model for Vid template
 * 
 *
 */
import mongoose from "mongoose";
import { Schema } from "mongoose";

const vidSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tags: {
    type: [Schema.Types.ObjectId], // Use ObjectId to reference Tag model
    ref: "Tag", // Reference to the Tag model
  },
  likeNum: {
    type: Number,
    default: 0,
    require: true,
  },
  releaseDate: {
    type: Date,
    default: new Date(),
    require: true,
  }
});

export default mongoose.model("Template", vidSchema);
