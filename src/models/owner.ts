import { Schema, model } from 'mongoose';

export interface IOwner {
    truckingName: string;
    contact: {
      name?: string;
      email?: string;
      phone?: string;
    };
    isActive: boolean;
}

const ownerSchema = new Schema<IOwner>({
    truckingName: { type: String, required: true },
    contact: {
        name: String,
        email: String,
        phone: String
    },
    isActive: { type: Boolean, default: false }
});

export const Owner = model<IOwner>('Owner', ownerSchema);