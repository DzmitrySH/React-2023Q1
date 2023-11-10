import validDate from '../components/pages/forms/input/Validator';

describe('validDate', () => {
  test('returns true if input date is valid and not in the future', () => {
    const value = '2022-01-01';
    expect(validDate(value)).toBe(true);
  });

  test('returns false if input date is invalid or in the future', () => {
    const value = 'invalid-date';
    expect(validDate(value)).toBe(false);
  });
});
