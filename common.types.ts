
interface IDispaly {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: IRating;
  title: string;
}

interface IRating {
  rate: number;
  count: number;
}
