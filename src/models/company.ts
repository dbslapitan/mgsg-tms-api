import { model, Schema } from 'mongoose';

export interface ICompany {
  _id?: string;
  name: string;
  address?: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  isActive: boolean;
}

const companySchema = new Schema<ICompany>({
  name: {
    required: true,
    type: String,
  },
  address: String,
  contact: {
    email: String,
    phone: String,
  },
  isActive: {
    type: Boolean,
    default: false
  },
});

export const Company = model<ICompany>('Company', companySchema);