import type React from 'react';

export interface MenuItem {
  name: string;
  bottlePrice?: number;
  glassPrice?: number;
  glassSize?: 60 | 150 | 'Pint' | '650 MI' | '330 MI';
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  items: MenuItem[];
  priceHeader?: string;
}
