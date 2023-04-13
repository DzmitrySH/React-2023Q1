interface IWines {
  winery: string;
  wine: string;
  rating: {
    average: number;
    reviews: string;
  };
  location: string;
  image: string;
  id: number;
}

interface IWinesProps {
  product: IWines;
  handleShowModal: (productId: number) => void;
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

interface IFormData {
  winery: string;
  wine: string;
  price: number;
  date: string;
  rules: boolean;
  statusWine: string;
  category: string;
  imageFile: FileList;
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
  IFormData,
  CategoryEnum,
};
