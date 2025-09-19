import React from 'react';
import type { MenuCategory as MenuCategoryType } from '../types';
import MenuItem from './MenuItem';

interface MenuCategoryProps {
  category: MenuCategoryType;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category }) => {
  return (
    <section id={category.id} className="mb-12">
      <div className="text-center mb-6">
        <h2 className="font-serif-display text-4xl md:text-5xl font-bold text-amber-200 tracking-wide">
          {category.name}
        </h2>
        <div className="w-32 h-px bg-amber-400/30 mx-auto mt-3"></div>
      </div>
      
      <div className="bg-gradient-to-br from-stone-900/30 to-black/30 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-amber-500/20 shadow-lg shadow-black/20">
        <div className="flex justify-between pb-2 mb-2 border-b-2 border-amber-500/40 text-amber-400 font-bold uppercase tracking-widest text-sm">
          <div className="flex-grow">Brand Name</div>
          <div className="flex items-baseline gap-4 flex-shrink-0">
            <p className="w-16 text-right">Bottle</p>
            <p className="w-16 text-right">{category.priceHeader || 'Glass'}</p>
          </div>
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