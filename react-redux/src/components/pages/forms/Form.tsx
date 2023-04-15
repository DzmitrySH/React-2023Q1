import { ICardWine } from 'components/interface/interface';
import React from 'react';
import './Form.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useActions } from '../../redux/useActions';
import CardForm from './CardForm';
import InputForm from './ImputForm';

function Form() {
  const { addToStateFormProducts } = useActions();
  const formCard = useSelector<RootState, ICardWine[]>((state) => state.form);

  const changeProduct = (newProduct: ICardWine) => {
    addToStateFormProducts(newProduct);
  };

  return (
    <div className="form-page">
      <h3>Form page</h3>
      <InputForm changeProduct={changeProduct} />
      <div className="form-cards-container">
        {formCard.length ? (
          formCard.map((product) => {
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
