// types/sales.ts
export interface Sale {
    id: string;
    title: string;
    description: string;
    discount: number;
    sale_status: 'on' | 'off' | 'expired' | 'scheduled' | 'draft';
  }
  
  export interface SalesState {
    sales: Sale[]; // Array of sales data
    fetchSales: () => Promise<void>; // Function to fetch sales
    fetchSaleBanner: () => void;
    setSales: (sales: Sale[]) => void; // Function to manually set sales
  }
  