import React from 'react';
import type { MenuItem as MenuItemType } from '../types';

interface MenuItemProps {
  item: MenuItemType;
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  return (
    <div className="grid grid-cols-6 gap-2 md:gap-4 items-start text-stone-300 py-3 border-b border-stone-700/50 last:border-none">
      <div className="col-span-4 md:col-span-3">
        <p className="text-lg text-amber-100">{item.name}</p>
      </div>
      
      <div className="col-span-1 text-right">
        <p className="text-lg">{item.bottlePrice ? `₹${item.bottlePrice}` : '-'}</p>
      </div>
      
      <div className="col-span-1 text-right">
        <p className="text-lg">{item.glassPrice ? `₹${item.glassPrice}` : '-'}</p>
      </div>
    </div>
  );
};

export default MenuItem;
