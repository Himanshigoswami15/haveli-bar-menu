import React from 'react';
import { MENU_DATA } from './constants';
import MenuCategory from './components/MenuCategory';
import { PhoneIcon, EmailIcon, WebsiteIcon, BottleSilhouettes } from './components/IconComponents';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black/70 text-white font-light">
      <main className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        <header className="relative text-center mb-16 pb-8 border-b-2 border-amber-600/30 overflow-hidden">
          <div className="absolute inset-0 z-0">
              <BottleSilhouettes className="w-full h-full text-amber-200/5 opacity-30" />
          </div>
          <div className="relative z-10">
            <h1 className="font-serif-display text-5xl md:text-7xl font-bold text-amber-300 drop-shadow-[0_2px_4px_rgba(252,211,77,0.3)]">THE HAVELI RESORT</h1>
            <p className="font-serif-display text-3xl md:text-4xl text-amber-100 mt-2 drop-shadow-[0_2px_4px_rgba(252,211,77,0.2)]">Bar Menu</p>
            <p className="text-amber-200/80 mt-4 tracking-wider">A Royal Collection of Spirits</p>
          </div>
          
          <nav className="relative z-10 mt-8">
            <ul className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 md:gap-x-4">
              {MENU_DATA.map((category) => (
                <li key={category.id}>
                  <a 
                    href={`#${category.id}`} 
                    className="block text-amber-200 hover:text-white font-medium border border-amber-400/30 hover:bg-amber-400/20 rounded-full px-3 py-1.5 md:px-4 md:py-2 transition-all duration-300 ease-in-out text-xs sm:text-sm tracking-wide"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

        </header>

        <div className="space-y-20">
          {MENU_DATA.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>

        <div className="flex justify-center items-center my-16" aria-hidden="true">
            <div className="flex-grow h-px bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div>
            <span className="w-4 h-4 rotate-45 bg-amber-600/30 mx-4"></span>
            <div className="flex-grow h-px bg-gradient-to-l from-transparent via-amber-600/30 to-transparent"></div>
        </div>

        <footer className="text-center pt-8 text-stone-400">
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
