export interface Product {
  quantityEnabled: boolean;
  id:number;
  disabled: boolean;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
  detail?: string;
  weight?: string;
  rating?: number;
  offerPrice?: number;
  email:string;
}
