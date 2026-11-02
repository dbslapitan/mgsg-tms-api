import { model, Schema } from 'mongoose';

export interface ICompany {
  name: string;
  address?: string;
  contact?: {
    email: string;
    phone: string;
  };
  status: 'active' | 'inactive';
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
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'inactive'
  },
});

export const Company = model<ICompany>('Company', companySchema);