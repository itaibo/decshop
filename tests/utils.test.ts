import { categoryToHuman, getOriginalPrice } from '@/lib/utils';

describe('categoryToHuman module', () => {
  it('Must get the category format right', () => {
    expect(categoryToHuman('category-1')).toBe('Category 1');
    expect(categoryToHuman('laptops')).toBe('Laptops');
    expect(categoryToHuman('a-long-category')).toBe('A Long Category');
  });
});

describe('getOriginalPrice module', () => {
  it('Must get the original price given a discount', () => {
    expect(getOriginalPrice(1, 10)).toBe('1.11');
    expect(getOriginalPrice(50, 90)).toBe('500.00');
    expect(getOriginalPrice(80, 25)).toBe('106.67');
  });
});
