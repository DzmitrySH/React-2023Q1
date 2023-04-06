import './Form.css';
import { ICardWine } from 'components/interface/interface';
import React, { useEffect, useState } from 'react';
import CardForm from './CardForm';
import InputForm from './ImputForm';

interface IFormWineProps {
  changeNamePage: (namePage: string) => void;
}

function Form({ changeNamePage }: IFormWineProps) {
  useEffect(() => {
    changeNamePage('Form Page');
  });

  const [products, setWinProduct] = useState<ICardWine[]>([]);
  const changeProduct = (newWine: ICardWine) => {
    setWinProduct([...products, newWine]);
  };

  return (
    <div className="form-page">
      <h3>Form page</h3>
      <InputForm changeProduct={changeProduct} />
      <div className="form-cards-container">
        {products.length ? (
          products.map((product) => {
            return <CardForm key={product.id} product={{ ...product }} />;
          })
        ) : (
          <div>No wines...</div>
        )}
      </div>
    </div>
  );
}

export default Form;
