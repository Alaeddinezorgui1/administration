import mongoose, { Document, Schema } from "mongoose";

// Define an interface for the PC Material model
interface IPCMaterial extends Document {
  name: string;
  type: string;
  brand: string;
  image: string;
  specs: {
    memory: string;
    speed?: string;
    cores?: number;
  };
  price: number;
  inStock: boolean;
}

// Create a schema for the PC Material model
const PCMaterialSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  brand: { type: String, required: true },
  image: { type: String, required: false },
  specs: {
    memory: { type: String, required: true },
    speed: { type: String },
    cores: { type: Number },
  },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
});

// Create the model
const PCMaterial = mongoose.model<IPCMaterial>("PCMaterial", PCMaterialSchema);

export default PCMaterial;
