export interface IPCMaterial {
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
