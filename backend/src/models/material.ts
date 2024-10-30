import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the PC Material model
interface IPCMaterial extends Document {
  name: string;          // Name of the material (e.g., "NVIDIA GeForce RTX 3080")
  type: string;          // Type of material (e.g., "GPU", "CPU", "RAM", etc.)
  brand: string;         // Brand of the material (e.g., "NVIDIA", "AMD", "Intel")
  specs: {
    memory: string;      // Memory specifications (e.g., "10GB GDDR6X")
    speed?: string;      // Optional: Speed specifications (e.g., "1.7 GHz")
    cores?: number;      // Optional: Number of cores (for CPUs)
  };
  price: number;         // Price of the material
  inStock: boolean;      // Availability status
}

// Create a schema for the PC Material model
const PCMaterialSchema: Schema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  brand: { type: String, required: true },
  specs: {
    memory: { type: String, required: true },
    speed: { type: String },
    cores: { type: Number },
  },
  price: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
});

// Create the model
const PCMaterial = mongoose.model<IPCMaterial>('PCMaterial', PCMaterialSchema);

export default PCMaterial;
