import React from 'react';
import { MENU_DATA } from './constants';
import MenuCategory from './components/MenuCategory';
import { PhoneIcon, EmailIcon, WebsiteIcon } from './components/IconComponents';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 bg-[url('https://www.transparenttextures.com/patterns/classy-fabric.png')] text-white font-light">
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12 pb-8 border-b-2 border-amber-600/30">
          <h1 className="font-serif-display text-5xl md:text-7xl font-bold text-amber-300">THE HAVELI RESORT</h1>
          <p className="font-serif-display text-3xl md:text-4xl text-amber-100 mt-2">Bar Menu</p>
          <p className="text-amber-200/80 mt-4 tracking-wider">A Royal Collection of Spirits</p>
        </header>

        <nav className="sticky top-0 z-10 bg-stone-950/80 backdrop-blur-md py-4 mb-12 border-y border-stone-700/50">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {MENU_DATA.map((category) => (
              <li key={category.id}>
                <a 
                  href={`#${category.id}`} 
                  className="text-amber-200 hover:text-white pb-2 border-b-2 border-transparent hover:border-amber-300 transition-colors duration-300 text-sm md:text-base tracking-wide"
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-20">
          {MENU_DATA.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>

        <footer className="text-center mt-20 pt-8 border-t border-stone-700/50 text-stone-400">
           <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-6">
              <a href="tel:+91-9928112220" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
                <PhoneIcon className="w-4 h-4" />
                <span>+91-9928112220</span>
              </a>
              <a href="mailto:admin@thehaveliresorts.com" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
                <EmailIcon className="w-4 h-4" />
                <span>admin@thehaveliresorts.com</span>
              </a>
              <a href="http://www.thehaveliresorts.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-200 transition-colors">
                <WebsiteIcon className="w-4 h-4" />
                <span>www.thehaveliresorts.com</span>
              </a>
           </div>
           <p>&copy; {new Date().getFullYear()} THE HAVELI RESORT. All rights reserved.</p>
           <p className="text-sm mt-1">Experience royal hospitality.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;