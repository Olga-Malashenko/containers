import ErrorRepository from '../app';

test('Should return description', () => {
  const error = new ErrorRepository();
  const result = error.translate(2);
  expect(result).toBe('Second error');
});

test('Should return unknoun error', () => {
  const error = new ErrorRepository();
  const result = error.translate(12);
  expect(result).toBe('Unknown error');
});
