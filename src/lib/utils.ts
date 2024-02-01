import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function categoryToHuman(string: string): string {
  if (!string) return '';

  return string
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function getOriginalPrice(currentPrice: number, discount: number): string {
  const percentaje = discount / 100;
  return (currentPrice / ( 1 - percentaje)).toFixed(2);
}
