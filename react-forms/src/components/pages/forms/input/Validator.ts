import { RefObject } from 'react';

function validText(
  ref: RefObject<HTMLInputElement> | RefObject<HTMLTextAreaElement> | null,
  regex = ''
) {
  if (ref && ref.current) {
    const firstLetterRegex = /^([A-ZА-Я])/;
    if (
      ref.current.value.match(regex) &&
      ref.current.value.length >= 5 &&
      firstLetterRegex.test(ref.current.value)
    ) {
      return true;
    }
  }
  return false;
}

function validPrice(ref: RefObject<HTMLInputElement> | null, regex: RegExp) {
  if (ref && ref.current) {
    if (ref.current.value.match(regex) && Number(ref.current.value) > 0) {
      return true;
    }
  }
  return false;
}

function validDate(ref: RefObject<HTMLInputElement> | null) {
  if (ref && ref.current) {
    const inputDate = new Date(ref.current.value);
    const currentDate = new Date();

    if (isNaN(inputDate.getTime()) || inputDate > currentDate) {
      return false;
    }
    return true;
  }
  return false;
}

function validImageFile(ref: RefObject<HTMLInputElement>) {
  if (ref && ref.current) {
    const name = ref?.current?.value ?? '';
    if (name.length !== 0) {
      return true;
    }
  }
  return false;
}

function validProduct(refOne: RefObject<HTMLInputElement>, refTwo: RefObject<HTMLInputElement>) {
  if (refOne.current?.checked || refTwo.current?.checked) return true;
  return false;
}

export { validText, validPrice, validDate, validImageFile, validProduct };
