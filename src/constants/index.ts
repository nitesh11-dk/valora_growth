import { PricingItem } from '../types';
export const pricingItems: PricingItem[] = [
  // Followers
  { price: 99, quantity: 500, category: 'Followers' },
  { price: 199, quantity: 1500, category: 'Followers' },
  { price: 599, quantity: 5000, category: 'Followers' },
  { price: 1599, quantity: 15000, category: 'Followers' },

  // Likes
  { price: 19, quantity: 1000, category: 'Likes' },
  { price: 49, quantity: 3000, category: 'Likes' },
  { price: 99, quantity: 10000, category: 'Likes' },
  { price: 129, quantity: 30000, category: 'Likes' },

  // Views
  { price: 39, quantity: 5000, category: 'Views' },
  { price: 49, quantity: 15000, category: 'Views' },
  { price: 79, quantity: 50000, category: 'Views' },
  { price: 149, quantity: 150000, category: 'Views' },
];


 export const categories = [
  'All',
  'Followers',
  'Likes',
  'Views',
  // 'Comments',
  // 'Saves',
  // 'Shares',
  // 'Story Views'
];


export const validReferralCodes = ["ktf942"];

export const comboPacks = [
  {
    title: ['500 followers', '1k likes', '5k views'],
    prices: [99, 19, 39],
    total: 157,
    actualPrice: 149,
  },
  {
    title: ['1.5k followers', '3k likes', '15k views'],
    prices: [199, 89, 49],
    total: 337,
    actualPrice: 299,
  },
  {
    title: ['5k followers', '10k likes', '50k views'],
    prices: [599, 99, 79],
    total: 777,
    actualPrice: 699,
  },
  {
    title: ['15k followers', '30k likes', '150k views'],
    prices: [1599, 149, 149],
    total: 1897,
    actualPrice: 1799,
  },
];
