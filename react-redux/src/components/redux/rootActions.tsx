import { actions } from './services/formSlice';
import { actions as searchActions } from './services/searchSlice';

export const rootActions = {
  ...actions,
  ...searchActions,
};
