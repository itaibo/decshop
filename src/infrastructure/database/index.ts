import database from './products.json';
const products = (database as Database).products;

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

type Database = {
  products: Product[];
};

export function getProducts(searchQuery?: string): Product[] {
  if (!searchQuery) return products;

  const filteredProducts = products.filter(product => {
    const searchString = `${product.title} ${product.description} ${product.brand} ${product.category}`;
    return (searchString.toLowerCase()).includes(searchQuery.toLowerCase());
  });

  return filteredProducts;
}

export function getProduct(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getTopProducts(limit: number = 5) {
  // Sort products by rating and get the first {limit}
  return products.sort((a, b) => a.rating - b.rating).slice(0, limit);
}
