import type React from 'react';

export interface MenuItem {
  name: string;
  bottlePrice?: number;
  glassPrice?: number;
  glassSize?: 60 | 150 | 'Pint' | '650 MI' | '330 MI';
  image?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
  priceHeader?: string;
}