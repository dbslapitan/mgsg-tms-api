import { model, Schema } from "mongoose";

export interface IStaff {
    name: {
        first: string;
        last: string;
    };
    nickname: string[];
    role: "driver" | "helper";
    isActive: boolean;
    contactNumber: string;
}

const staffScheme = new Schema<IStaff>({
    name: {
        first: { type: String, required: true },
        last: { type: String, required: true }
    },
    nickname: String,
    role: { type: String, enum: ["driver", "helper"], required: true },
    isActive: { type: Boolean, default: false },
    contactNumber: String
});

export const Staff = model<IStaff>('Staff', staffScheme);