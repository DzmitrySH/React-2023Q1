interface IWines {
  id: number;
  winery: string;
  wine: string;
  rating: number;
  reviews: string;
  price: number;
  location: string;
  image: string;
}

interface IWinesProps {
  product: IWines;
}

export { IWines, IWinesProps };
