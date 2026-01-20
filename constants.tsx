
import React from 'react';
import { TransactionCategory } from './types';

export const CATEGORY_COLORS: Record<TransactionCategory, string> = {
  [TransactionCategory.Housing]: '#6366f1', // Indigo
  [TransactionCategory.Food]: '#f59e0b',    // Amber
  [TransactionCategory.Transport]: '#10b981', // Emerald
  [TransactionCategory.Fun]: '#ec4899',     // Pink
  [TransactionCategory.Misc]: '#64748b',    // Slate
  [TransactionCategory.Income]: '#0ea5e9',  // Sky
};

export const CATEGORY_ICONS: Record<TransactionCategory, React.ReactNode> = {
  [TransactionCategory.Housing]: <i className="fa-solid fa-house"></i>,
  [TransactionCategory.Food]: <i className="fa-solid fa-utensils"></i>,
  [TransactionCategory.Transport]: <i className="fa-solid fa-car"></i>,
  [TransactionCategory.Fun]: <i className="fa-solid fa-gamepad"></i>,
  [TransactionCategory.Misc]: <i className="fa-solid fa-ellipsis"></i>,
  [TransactionCategory.Income]: <i className="fa-solid fa-wallet"></i>,
};

export const COMMON_GROCERY_ITEMS = [
  "Milk", "Bread", "Eggs", "Rice", "Chicken", "Apples", "Bananas", 
  "Pasta", "Coffee", "Tea", "Vegetables", "Snacks", "Cereal", 
  "Butter", "Cheese", "Cooking Oil", "Detergent", "Toiletries"
];

export const COMMON_INCOME_SOURCES = [
  "Salary", "Freelance Gig", "Bonus", "Dividend", "Rental Income", 
  "Tax Refund", "Gift", "Side Hustle", "Interest", "Investment Sale"
];
