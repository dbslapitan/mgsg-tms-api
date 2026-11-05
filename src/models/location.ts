import { Schema, model } from "mongoose";

export interface ILocation {
    _id?: string;
    name: string;
    otherNames: string[];
    latitude: number;
    longitude: number;
    description?: string;
}

const LocationSchema = new Schema<ILocation>({
    name: { type: String, required: true },
    otherNames: [String],
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    description: { type: String }
});
  
export const Location = model<ILocation>("Location", LocationSchema);