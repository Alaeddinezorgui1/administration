import express, { Request, Response } from 'express';
import PCMaterial from '../models/material'; // Adjust the path as necessary

const router = express.Router();

// Create a new PC Material
router.post('/', async (req: Request, res: Response) => {
  const material = new PCMaterial(req.body);
  
  try {
    const savedMaterial = await material.save();
    res.status(201).json(savedMaterial);
  } catch (error) {
    res.status(400).json({ message: "error save material" });
  }
});

// Get all PC Materials
router.get('/', async (req: Request, res: Response) => {
  try {
    const materials = await PCMaterial.find();
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: "error get materials" });
  }
});

// Get a PC Material by ID
router.get('/:id', async (req: any, res: any) => {
  try {
    const material = await PCMaterial.findById(req.params.id);
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json(material);
  } catch (error) {
    res.status(500).json({ message: "error get material" });
  }
});

// Update a PC Material
router.put('/:id', async (req: any, res: any) => {
  try {
    const updatedMaterial = await PCMaterial.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedMaterial) return res.status(404).json({ message: 'Material not found' });
    res.json(updatedMaterial);
  } catch (error) {
    res.status(400).json({ message: "error update material" });
  }
});

// Delete a PC Material
router.delete('/:id', async (req: any, res: any) => {
  try {
    const deletedMaterial = await PCMaterial.findByIdAndDelete(req.params.id);
    if (!deletedMaterial) return res.status(404).json({ message: 'Material not found' });
    res.json({ message: 'Material deleted' });
  } catch (error) {
    res.status(500).json({ message: "error delete material" });
  }
});

export default router;
