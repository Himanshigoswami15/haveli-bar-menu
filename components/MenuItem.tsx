import React from 'react';
import type { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const Icon = item.image;

  return (
    <div className="flex items-center gap-4 text-stone-300 py-4 border-b border-stone-800/60 last:border-none">
      {Icon && (
        <div className="flex-shrink-0">
          <Icon className="w-7 h-7 text-amber-200/60" />
        </div>
      )}
      <p className="text-lg text-amber-100 flex-shrink min-w-0">{item.name}</p>
      <div className="flex-grow mx-2 border-b border-dotted border-stone-600/70"></div>
      <div className="flex items-baseline gap-4 flex-shrink-0">
        <p className="w-16 text-lg text-right">{item.bottlePrice ? `₹${item.bottlePrice}` : '-'}</p>
        <p className="w-16 text-lg text-right">{item.glassPrice ? `₹${item.glassPrice}` : '-'}</p>
      </div>
    </div>
  );
};

export default MenuItem;