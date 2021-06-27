import { example } from '.';

describe('example', () => {
  it('logs given value to the console', () => {
    const spy = jest.spyOn(console, 'log');
    example('jazz');
    expect(console.log).toBeCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith('jazz');
  });
});
