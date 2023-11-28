export interface GetKpisResponse{
    monthlyData: Month[]
    totalinfo: Totalinfo
    dailyData: Day[]
    transactions: Transaction[]
    products: Product[]
    expensesByCategory: ExpensesByCategory
}

export interface Totalinfo {
    totalExpenses: number;
    totalProfit: number;
    totalRevenue: number
    _id: string
}
export interface Month {
    id: number;
    month: string;
    revenue: number;
    expenses: number;
    operationalExpenses: number;
    nonOperationalExpenses: number;
}

export interface Day {
    id: number;
    date: string;
    revenue: number;
    expenses: number;
}
export interface Transaction {
    id: number;
    _id: string;
    buyer: string;
    amount: number;
    productIds: string[]
}
export interface Product {
    id: number;
    _id: string;
    price: number;
    expense: number;
    transactions: string[]
}
export interface ExpensesByCategory{
    salaries: number;
    supplies: number;
    services: number;
}
