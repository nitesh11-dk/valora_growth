export interface NavItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}
export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface PricingItem {
  price: number;
  quantity: number;
  category: string;
}


export interface PricingItemS {
  title: string;
  description: string;
  price: string;
  badge?: string;
  badgeColor?: string;
  popular?: boolean;
}

export interface ComboPack {
  title: string[];         // e.g., ['500 followers', '1k likes', '5k views']
  prices: number[];        // e.g., [99, 19, 39]
  total: number;           // total price before discount
  actualPrice: number;     // final discounted price
}


