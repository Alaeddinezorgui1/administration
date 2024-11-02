/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useRef, useState } from 'react';
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Tooltip,
} from '@mui/material';
import { IPCMaterial } from '../../utils/interfaces';
import placeholderImage from '../../assets/images/placeholder_image.png';
import axios from 'axios';
const AddPCMaterialForm: React.FC = () => {
  const [formData, setFormData] = useState<IPCMaterial>({
    name: '',
    type: '',
    brand: '',
    image: '',
    specs: {
      memory: '',
      speed: '',
      cores: 0,
    },
    price: 0,
    inStock: false,
  });
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputImage = useRef<HTMLInputElement>(null);

  const triggerFileInput = () => {
    fileInputImage.current?.click();
  };

  const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSpecsChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      specs: {
        ...prevData.specs,
        [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      inStock: checked,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Create FormData object
    const formDataToSend = new FormData();
    
    // Append all fields to FormData, including the image file
    formDataToSend.append('name', formData.name);
    formDataToSend.append('type', formData.type);
    formDataToSend.append('brand', formData.brand);
    formDataToSend.append('price', formData.price.toString());
    formDataToSend.append('inStock', formData.inStock.toString());
  
    // Add the image file if it exists
    if (imageUrl) {
      formDataToSend.append('image', imageUrl); // Assuming fileInputImage holds the file input ref
    }
  
    // Append nested object as JSON string
    formDataToSend.append('specs', JSON.stringify(formData.specs));
  
    try {
      // Send POST request with FormData
      const response = await axios.post('http://localhost:5000/material/add', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      // Log the response or handle success
      console.log('Successfully uploaded:', response.data);
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 grid-col-1 gap-1 min-w-full p-4">
      <div>
        <div className="relative max-w-full max-h-full" onClick={triggerFileInput}>
          <input
            ref={fileInputImage}
            type="file"
            accept=".png, .jpg, .jpeg, .svg"
            onChange={onFileSelected}
            style={{ display: 'none' }}
          />
          <Tooltip title="Upload PC Image">
            <img
              src={imageUrl || placeholderImage}
              alt="Node Image"
              className="z-10 border-dashed border-2 cursor-pointer opacity-100 hover:opacity-80 h-full w-full"
            />
          </Tooltip>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Type"
          name="type"
          value={formData.type}
          onChange={handleChange}
          fullWidth
          select
        >
          <MenuItem value="Laptop">Laptop</MenuItem>
          <MenuItem value="Desktop">Desktop</MenuItem>
          <MenuItem value="Tablet">Tablet</MenuItem>
        </TextField>
        <TextField
          label="Brand"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Memory"
          name="memory"
          value={formData.specs.memory}
          onChange={handleSpecsChange}
          fullWidth
        />
        <TextField
          label="Speed"
          name="speed"
          value={formData.specs.speed}
          onChange={handleSpecsChange}
          fullWidth
        />
        <TextField
          label="Cores"
          name="cores"
          type="number"
          value={formData.specs.cores}
          onChange={(e) => handleSpecsChange(e as React.ChangeEvent<HTMLInputElement>)}
          fullWidth
        />
        <TextField
          label="Price"
          name="price"
          type="number"
          value={formData.price}
          onChange={handleChange}
          fullWidth
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={formData.inStock}
              onChange={handleCheckboxChange}
            />
          }
          label="In Stock"
        />
      </div>

      <div className="mt-4 flex justify-end col-span-2 w-full">
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add PC Material
        </Button>
      </div>
    </form>
  );
};

export default AddPCMaterialForm;
