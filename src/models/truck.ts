import { Schema, model } from "mongoose";
import { IOwner } from "./owner.js";

export interface ITruck{
  _id?: string;
  licensePlate: string;
  type: string;
  owner: IOwner | string;
}

const truckSchema = new Schema({
  licensePlate: { type: String, required: true },
  type: { type: String, required: true },
  owner: { type: Schema.Types.ObjectId, ref: "Owner", required: true }
});

export const Truck = model<ITruck>("Truck", truckSchema);