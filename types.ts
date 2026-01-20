
export enum TransactionCategory {
  Housing = 'Housing',
  Food = 'Food',
  Transport = 'Transport',
  Fun = 'Fun',
  Misc = 'Misc',
  Income = 'Income Source'
}

export enum TransactionType {
  Income = 'Income',
  Expense = 'Expense'
}

export enum RiskTolerance {
  Conservative = 'Conservative',
  Moderate = 'Moderate',
  Aggressive = 'Aggressive'
}

export enum AppView {
  Dashboard = 'Dashboard',
  Reports = 'Reports'
}

export interface Transaction {
  id: string;
  date: string; // ISO format: YYYY-MM-DD
  description: string; // Main item name (e.g., "Milk")
  subCategory?: string; // Detailed breakdown (e.g., "Dairy" or "Grocery List")
  amount: number;
  category: TransactionCategory;
  type: TransactionType;
}

export interface FinanceState {
  userName: string;
  transactions: Transaction[];
  monthlyIncomeGoal: number;
  riskTolerance: RiskTolerance;
  viewingMonth: number; // 0-11
  viewingYear: number;
  currentView: AppView;
}

export interface AIResponse {
  message: string;
  financialTip: string;
  detectedTransactions?: Array<Omit<Transaction, 'id'>>;
  analysis?: string;
  comprehensiveInsights?: string; // New field for detailed reports
}
