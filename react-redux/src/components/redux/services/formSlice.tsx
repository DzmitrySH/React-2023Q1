import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICardWine } from 'components/interface/interface';

const stateFormProducts: ICardWine[] = [];

export const formSlice = createSlice({
  name: 'form',
  initialState: stateFormProducts,
  reducers: {
    addToStateFormProducts: (state, { payload }: PayloadAction<ICardWine>) => {
      state.push(payload);
    },
  },
});

export const { actions, reducer } = formSlice;
