export interface IProduct {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: IRating;
  title: string;
 
   items: IProduct[]; 
}

interface IRating {
  rate: number;
  count: number;
}

