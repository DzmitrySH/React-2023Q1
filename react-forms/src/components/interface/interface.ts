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

interface ICardWine {
  id?: number;
  winery: string;
  wine: string;
  price: number;
  date: string;
  statusWine: string;
  category: string;
  imageInput: string;
}

interface ICardWineProps {
  product: ICardWine;
}

interface IFormWineProps {
  changeProduct: (newProduct: ICardWine) => void;
}

interface IFormInputState {
  imageInput: string;
  imageFile: File | null;
  inFileValid: boolean;
  inPriceValid: boolean;
  inWineryValid: boolean;
  inCategoryValid: boolean;
  inWineValid: boolean;
  inDateValid: boolean;
  inStatusWineValid: boolean;
  inRulesValid: boolean;
  inStatusValid: boolean;
}

enum CategoryEnum {
  starswine = 'stars wine',
  oldwine = 'old wine',
  aperitivo = 'aperitivo',
}

export {
  IWines,
  IWinesProps,
  ICardWine,
  ICardWineProps,
  IFormWineProps,
  IFormInputState,
  CategoryEnum,
};
