import React, { Component, RefObject } from 'react';
import { IFormWineProps, IFormInputState } from '../../interface/interface';
import './Form.css';
import { validText, validDate, validPrice, validImageFile, validProduct } from './input/Validator';
import { CategoryEnum } from '../../interface/interface';
import Category from './input/Category';
import DateNew from './input/DateNew';
import Images from './input/Images';
import Price from './input/Price';
import Rule from './input/Rule';
import StatusForm from './input/StatusForm';
import StatusWine from './input/StatusWine';
import Wine from './input/Wine';
import Winery from './input/Winery';

class InputForm extends Component<IFormWineProps, IFormInputState> {
  formRef: RefObject<HTMLFormElement> = React.createRef();
  inputTitleRef: RefObject<HTMLInputElement> = React.createRef();
  inputPriceRef: RefObject<HTMLInputElement> = React.createRef();
  inputFileRef: RefObject<HTMLInputElement> = React.createRef();
  inputCategoryRef: RefObject<HTMLSelectElement> = React.createRef();
  inputDescriptionRef: RefObject<HTMLTextAreaElement> = React.createRef();
  inputDateRef: RefObject<HTMLInputElement> = React.createRef();
  inputProductStatusRefNew: RefObject<HTMLInputElement> = React.createRef();
  inputProductStatusRefUsed: RefObject<HTMLInputElement> = React.createRef();
  inputRulesRef: RefObject<HTMLInputElement> = React.createRef();

  constructor(props: IFormWineProps) {
    super(props);
    this.state = {
      imageInput: '',
      imageFile: null,
      inFileValid: true,
      inWineryValid: true,
      inPriceValid: true,
      inCategoryValid: true,
      inWineValid: true,
      inDateValid: true,
      inStatusWineValid: true,
      inRulesValid: true,
      inStatusValid: false,
    };
  }

  checkValidInputs = () => {
    const priceValid = validPrice(this.inputPriceRef, /^\d+$/);
    const titleValid = validText(this.inputTitleRef);
    const descriptionValid = validText(this.inputDescriptionRef);
    const dateValid = validDate(this.inputDateRef);
    const imageFileValid = validImageFile(this.inputFileRef);
    const categoryValid = !!Object.values(CategoryEnum).find(
      (cat) => cat === this.inputCategoryRef.current?.value
    );
    const productStatusValid = validProduct(
      this.inputProductStatusRefNew,
      this.inputProductStatusRefUsed
    );
    const rulesValid = this.inputRulesRef.current?.checked ?? false;
    this.setState({ inPriceValid: priceValid });
    this.setState({ inWineryValid: titleValid });
    this.setState({ inWineValid: descriptionValid });
    this.setState({ inDateValid: dateValid });
    this.setState({ inFileValid: imageFileValid });
    this.setState({ inCategoryValid: categoryValid });
    this.setState({ inStatusWineValid: productStatusValid });
    this.setState({ inRulesValid: rulesValid });
    if (
      priceValid &&
      titleValid &&
      descriptionValid &&
      dateValid &&
      imageFileValid &&
      categoryValid &&
      productStatusValid &&
      rulesValid
    ) {
      this.setState({ inStatusValid: true });
      return true;
    }
    return false;
  };

  getImageInput = () => {
    let url = '';
    if (this.inputFileRef.current && this.inputFileRef) {
      const imageFile = this.inputFileRef.current.files?.[0];
      if (imageFile) {
        url = URL.createObjectURL(imageFile);
        this.setState({
          imageInput: url,
          imageFile,
        });
      }
    }
    return url;
  };

  setDefaultForm = () => {
    if (this.formRef) this.formRef.current?.reset();
    this.setState({
      imageInput: '',
      imageFile: null,
    });
  };

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const imageInput = this.getImageInput();
    const validForm = this.checkValidInputs();

    if (!validForm) return;

    const newTitle = this.inputTitleRef.current?.value ?? '';
    const newDescription = this.inputDescriptionRef.current?.value ?? '';
    const newPrice = this.inputPriceRef.current?.value ?? '';
    const newDate = this.inputDateRef.current?.value ?? '';
    const newSelect = this.inputProductStatusRefNew.current?.checked;
    const usedSelect = this.inputProductStatusRefUsed.current?.checked;

    let newProductStatus = '';

    if (newSelect && !usedSelect && this.inputProductStatusRefNew.current) {
      newProductStatus = this.inputProductStatusRefNew.current?.value;
    } else if (!newSelect && usedSelect && this.inputProductStatusRefUsed.current) {
      newProductStatus = this.inputProductStatusRefUsed.current?.value;
    }

    const newCategory = this.inputCategoryRef.current?.value ?? '';

    const newProduct = {
      id: Date.now(),
      winery: newTitle,
      wine: newDescription,
      price: Number(newPrice),
      date: newDate,
      statusWine: newProductStatus,
      category: newCategory,
      imageInput,
    };

    this.props.changeProduct(newProduct);

    this.setDefaultForm();

    setTimeout(() => {
      this.setState({ inStatusValid: false });
    }, 5000);
  };

  render() {
    const {
      imageFile,
      inFileValid,
      inWineryValid,
      inPriceValid,
      inCategoryValid,
      inWineValid,
      inDateValid,
      inStatusWineValid,
      inStatusValid,
      inRulesValid,
    } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit} ref={this.formRef}>
        <Winery valid={inWineryValid} wineryRef={this.inputTitleRef} />
        <Wine valid={inWineValid} wineRef={this.inputDescriptionRef} />
        <Price valid={inPriceValid} priceRef={this.inputPriceRef} />
        <Images valid={inFileValid} imageRef={this.inputFileRef} imageFile={imageFile} />
        <DateNew valid={inDateValid} dateRef={this.inputDateRef} />
        <Rule valid={inRulesValid} ruleRef={this.inputRulesRef} />
        <StatusWine
          valid={inStatusWineValid}
          oneRef={this.inputProductStatusRefNew}
          twoRef={this.inputProductStatusRefUsed}
        />
        <Category valid={inCategoryValid} catRef={this.inputCategoryRef} />
        <StatusForm valid={inStatusValid} />
      </form>
    );
  }
}

export default InputForm;
