import mongoose, { Document, Schema } from "mongoose";

interface Series {
  name: string;
}

export interface SeriesModel extends Series, Document {}

const seriesSchema: Schema = new Schema({
  name: { type: String, required: true },
});

export default mongoose.model<SeriesModel>("series", seriesSchema);