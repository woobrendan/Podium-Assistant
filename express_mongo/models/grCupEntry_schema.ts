import mongoose, { Document, Schema } from "mongoose";
import { GrCupEntryInterface } from "./models";

export interface GREntryModel extends GrCupEntryInterface, Document {}

const entrySchema: Schema = new Schema({
  team: { type: String, required: true },
  vehicle: { type: String, required: true },
  classification: { type: String, required: true },
  number: { type: String, required: true },
  carImage: { type: String, required: false },
  series: { type: String, required: true },
  year: { type: Number, required: true },
  driver1: {
    name: { type: String, required: true },
    rating: { type: String, required: false },
    nationality: { type: String },
  },
  isFemale: { type: Boolean },
});

export default mongoose.model<GREntryModel>("GREntries", entrySchema);
