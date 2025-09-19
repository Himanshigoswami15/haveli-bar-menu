import React from 'react';
import { MENU_DATA } from './constants';
import MenuCategory from './components/MenuCategory';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] text-white font-light">
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <h1 className="font-serif-display text-5xl md:text-7xl font-bold text-amber-300">Haveli Resort</h1>
          <p className="font-serif-display text-3xl md:text-4xl text-amber-100 mt-2">Bar Menu</p>
          <div className="w-24 h-px bg-amber-400/50 mx-auto mt-4"></div>
        </header>

        <nav className="sticky top-0 z-10 bg-slate-900/80 backdrop-blur-md py-3 mb-12 border-y border-stone-700/50">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            {MENU_DATA.map((category) => (
              <li key={category.id}>
                <a 
                  href={`#${category.id}`} 
                  className="text-amber-200 hover:text-white hover:bg-amber-400/20 px-3 py-1 rounded-full transition-colors duration-300 text-sm md:text-base"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-16">
          {MENU_DATA.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>

        <footer className="text-center mt-16 pt-8 border-t border-stone-700/50 text-stone-400">
           <p>&copy; {new Date().getFullYear()} Haveli Resort. All rights reserved.</p>
           <p className="text-sm mt-1">Experience royal hospitality.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
