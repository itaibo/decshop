import * as Database from '@/infrastructure/database';

describe('Database module', () => {
  it('Must get all products', () => {
    const products = Database.getProducts();
    expect(products.length).toBe(30);
  });

  it('Must get all products with certain query', () => {
    const products = Database.getProducts('apple');
    expect(products.length).toBe(3);
  });

  it('Must get zero products when none found', () => {
    const products = Database.getProducts('random-string-xnIj8');
    expect(products.length).toBe(0);
  });

  it('Must get top products with requested number', () => {
    let products = Database.getTopProducts(1);
    expect(products.length).toBe(1);

    products = Database.getTopProducts(5);
    expect(products.length).toBe(5);

    products = Database.getTopProducts(10);
    expect(products.length).toBe(10);

    products = Database.getTopProducts(20);
    expect(products.length).toBe(20);
  });
});
