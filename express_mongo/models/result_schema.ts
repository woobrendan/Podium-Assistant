import mongoose, { Document, Schema } from "mongoose";
import { FullResultInterface } from "./result_models";

export interface ResultModel extends FullResultInterface, Document {}

const resultSchema: Schema = new Schema({
  series: { type: String, required: true },
  date: { type: String, required: true },
  event: { type: String, required: true },
  fastLap: {
    driver: { type: String, required: true },
    vehicle: { type: String, required: true },
    laptime: { type: String, required: true },
  },
  result1: {
    class: { type: String, required: true },
    firstPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
    secondPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
    thirdPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
  },
  result2: {
    class: { type: String },
    firstPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
    secondPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
    thirdPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
  },
  result3: {
    class: { type: String },
    firstPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
    secondPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
    thirdPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
  },
  result4: {
    class: { type: String },
    firstPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
    secondPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
    thirdPlace: {
      driver1: { type: String },
      driver2: { type: String },
      driver3: { type: String },
      vehicle: { type: String },
      team: { type: String },
      number: { type: String },
    },
  },
});

export default mongoose.model<ResultModel>("Result", resultSchema);