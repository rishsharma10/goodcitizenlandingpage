import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const GOOGLE_PLAY_LINK = 'https://flipkart.com'
export const APPSTORE_LINK = 'https://flipkart.com'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
