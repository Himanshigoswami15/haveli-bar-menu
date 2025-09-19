import React from 'react';
import type { MenuCategory as MenuCategoryType } from '../types';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  const Icon = category.icon;
  return (
    <section id={category.id} className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-amber-400" />
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-amber-200 tracking-wide">
          {category.name}
        </h2>
      </div>
      
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-stone-700/50 shadow-lg">
        <div className="grid grid-cols-6 gap-2 md:gap-4 pb-2 mb-2 border-b-2 border-amber-400/50 text-amber-400 font-bold uppercase tracking-wider text-sm">
          <div className="col-span-4 md:col-span-3">Brand Name</div>
          <div className="col-span-1 text-right">Bottle</div>
          <div className="col-span-1 text-right">{category.priceHeader || 'Glass'}</div>
        </div>
        <div>
          {category.items.map((item) => (
            <MenuItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
