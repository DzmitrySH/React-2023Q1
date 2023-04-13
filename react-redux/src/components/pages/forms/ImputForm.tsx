import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IFormWineProps, IFormData } from '../../interface/interface';
import './Form.css';
import validDate from './input/Validator';
import Category from './input/Category';
import DateNew from './input/DateNew';
import Images from './input/Images';
import Price from './input/Price';
import Rule from './input/Rule';
import StatusWine from './input/StatusWine';
import Wine from './input/Wine';
import Winery from './input/Winery';

function InputForm({ changeProduct }: IFormWineProps) {
  const [statusValid, setStatusValid] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IFormData>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const imageFile = watch('imageFile')?.[0]?.name || 'no name of image';
  const pricereg = /^[1-9]\d*$/;
  const intextreg = /^[A-ZА-Я][A-ZА-Яa-zа-я]{4,}.*$/;

  const onSubmit = (data: IFormData) => {
    setStatusValid(true);
    changeProduct({
      id: Date.now(),
      winery: data.winery,
      wine: data.wine,
      price: Number(data.price),
      date: data.date,
      statusWine: data.statusWine,
      category: data.category,
      imageInput: URL.createObjectURL(data.imageFile[0]),
    });
    reset();
    setTimeout(() => {
      setStatusValid(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Winery
        error={errors.winery}
        register={register('winery', {
          required: 'Not value',
          pattern: {
            value: intextreg,
            message: '',
          },
        })}
      />
      <Wine
        error={errors.wine}
        register={register('wine', {
          required: 'Not value',
          pattern: {
            value: intextreg,
            message: '',
          },
        })}
      />
      <Price
        error={errors.price}
        register={register('price', {
          required: 'Not value',
          pattern: {
            value: pricereg,
            message: '',
          },
        })}
      />
      <Images
        error={errors.imageFile}
        register={register('imageFile', { required: true })}
        imageFile={imageFile}
      />
      <DateNew
        error={errors.date}
        register={register('date', {
          required: 'Not date',
          validate: { validate: (value) => validDate(value) || 'Wine from the future?' },
        })}
      />
      <Rule error={errors.rules} register={register('rules', { required: true })} />
      <StatusWine error={errors.statusWine} register={register('statusWine', { required: true })} />
      <Category error={errors.category} register={register('category', { required: true })} />
      <div className="form-input">
        <label htmlFor="category-select">
          Status: {statusValid && <span style={{ color: 'green' }}>Wine added</span>}
        </label>
        <button type="submit">Submit Form</button>
      </div>
    </form>
  );
}

export default InputForm;
