import './Form.css';
import { ICardWine } from 'components/interface/interface';
import React, { Component } from 'react';
import CardForm from './CardForm';
import InputForm from './ImputForm';

interface IFormWineProps {
  changeNamePage: (namePage: string) => void;
}

interface IFormWineState {
  products: ICardWine[];
}

class Form extends Component<IFormWineProps, IFormWineState> {
  constructor(props: IFormWineProps) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.props.changeNamePage('Form Page');
  }

  changeProduct = (newProduct: ICardWine) => {
    const { products } = this.state;
    const newProducts = [...products, newProduct];

    this.setState({
      products: newProducts,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="form-page">
        <h3>Form page</h3>
        <InputForm changeProduct={this.changeProduct} />
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
}

export default Form;
