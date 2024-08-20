const randomSpy = jest.spyOn(Math, 'random');
const randomBetween = require('./randomBetween')
describe('randomBetween testing', () => {
  beforeEach(() => {
    randomSpy.mockClear();  // Clears any previous calls to Math.random
  });

  it('should return 3 when Math.random returns 0', () => {
    randomSpy.mockReturnValue(0);  // Mocking Math.random to always return 0
    expect(randomBetween(3, 5)).toBe(3);
    expect(randomSpy).toHaveBeenCalledTimes(1);  // Check that Math.random was called once
  });

  it('should return 4 when Math.random returns 0.5', () => {
    randomSpy.mockReturnValue(0.5);  // Mocking Math.random to return 0.5
    expect(randomBetween(3, 5)).toBe(4);
    expect(randomSpy).toHaveBeenCalledTimes(1);
  });

  it('should return 5 when Math.random returns 0.99999', () => {
    randomSpy.mockReturnValue(0.99999);  // Mocking Math.random to return 0.5
    expect(randomBetween(3, 5)).toBe(5);
    expect(randomSpy).toHaveBeenCalledTimes(1);
  });
});
