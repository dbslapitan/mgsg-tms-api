import { Schema, model } from "mongoose";
import { ILocation } from "./location.js";
import { ICompany } from "./company.js";

export interface IRate {
  _id?: string;
  company: ICompany | string;
  origin: ILocation | string;
  destination: ILocation | string;
  type: "weight" | "bags";
  rate: number;
  dateOfOrigin: Date;
  history?: {
    startDate: Date;
    endDate: Date;
    rate: number
  }[];
}

const rateSchema = new Schema<IRate>({
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  origin: { type: Schema.Types.ObjectId, ref: "Location", required: true },
  destination: { type: Schema.Types.ObjectId, ref: "Location", required: true },
  type: { type: String, enum: ["weight", "bags"], required: true },
  rate: { type: Number, required: true },
  dateOfOrigin: { type: Date, required: true, default: new Date("2022-01-01T00:00:00Z") },
  history: {
    type: [{
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true },
      rate: { type: Number, required: true }
    }]
  }
});

rateSchema.pre("save", async function () {
  const existingRate = await Rate.findOne({ company: this.company, origin: this.origin, destination: this.destination, type: this.type });
  if (existingRate) {
    const error = new Error("Rate already exists for this company, origin, destination, and type") as any; 
    error.status = 409;
    error.existingRateId = existingRate._id;
    throw error;
  }
});

export const Rate = model<IRate>("Rate", rateSchema);