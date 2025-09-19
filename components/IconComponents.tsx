import React from 'react';

export const WhiskyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M7 22h10" />
    <path d="M5 12h14" />
    <path d="M17.5 12l-1.5-10h-7L7.5 12" />
    <path d="M6 22h12" />
  </svg>
);

export const SingleMaltIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12 2v10" />
    <path d="M18.21 7.43 8.6 12.3" />
    <path d="M18.21 16.57 8.6 11.7" />
    <path d="M6.35 15.61 6.35 8.39" />
  </svg>
);

export const VodkaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 22h8" />
    <path d="M7 11h10" />
    <path d="m15 3-1 8h-4l-1-8" />
  </svg>
);

export const TequilaIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 11h-1a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1" />
    <path d="M14 11V3" />
    <path d="M14 21v-4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v4" />
    <path d="M6 21h8" />
  </svg>
);

export const BeerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M17 11h-1a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1" />
    <path d="M9 12v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6" />
    <path d="M15 12H9" />
    <path d="M9 5v7" />
  </svg>
);

export const WineIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M8 22h8" />
    <path d="M7 11h10" />
    <path d="M12 11v11" />
    <path d="M17.5 11a5.5 5.5 0 1 0-11 0" />
  </svg>
);

// Drink-specific Icons
export const WhiskyGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 8h14l-1.5 11h-11L5 8z" />
        <path d="M7 8l1-5h8l1 5" />
    </svg>
);

export const WineGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8 22h8" />
        <path d="M12 12v10" />
        <path d="M18 12c0-3.31-2.69-6-6-6s-6 2.69-6 6" />
    </svg>
);

export const BeerMugIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 8v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8" />
        <path d="M16 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
        <path d="M6 11h8" />
    </svg>
);

export const HighballGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M6 3h12l-1.5 18h-9L6 3z" />
    </svg>
);

export const CocktailGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 22v-8" />
        <path d="M4 14h16" />
        <path d="m4 14 8-8 8 8" />
    </svg>
);

// Footer Icons
export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

export const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);

export const WebsiteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" x2="22" y1="12" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
);

export const BottleSilhouettes: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 200"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <g fill="currentColor">
      <path d="M218.3,53.9V23.4h11.2v30.5c0,11.2-9.1,20.3-20.3,20.3h0c-11.2,0-20.3-9.1-20.3-20.3V23.4h11.2v30.5c0,5,4.1,9.1,9.1,9.1h0C214.2,63,218.3,58.9,218.3,53.9z M208,17.8c-2.6,0-4.7-2.1-4.7-4.7s2.1-4.7,4.7-4.7s4.7,2.1,4.7,4.7S210.6,17.8,208,17.8z" />
      <path d="M272.9,8.4h-31.5v80h31.5V8.4z M261.7,77.2h-9.1V19.6h9.1V77.2z" />
      <path d="M331.1,8.4v74.6c0,3.3-2.7,6-6,6h-14.2c-3.3,0-6-2.7-6-6V8.4h-11.2v74.6c0,9.5,7.7,17.2,17.2,17.2h14.2c9.5,0,17.2-7.7,17.2-17.2V8.4H331.1z" />
      <path d="M383.6,5.6c-11.2,0-20.3,9.1-20.3,20.3v2.8h40.6v-2.8C403.9,14.7,394.8,5.6,383.6,5.6z M363.3,34.3v54.1h40.6V34.3H363.3z" />
      <path d="M473.4,45.5c-1.8-8.2-3.8-16.9-6-25.5c-0.9-3.4-3.9-5.9-7.5-5.9h-31.5c-3.6,0-6.6,2.5-7.5,5.9c-2.2,8.6-4.2,17.3-6,25.5c-0.8,3.5,1.7,7,5.2,7h42.9C471.7,52.5,474.2,49,473.4,45.5z M451.9,8.4H435v31.5h16.9V8.4z M429.3,88.4h28.4V45.5h-28.4V88.4z" />
      <path d="M523.6,8.4L518,45.5h-22.5l-5.6-37.1H523.6z M489.9,88.4h40.6V51.1h-40.6V88.4z" />
      <path d="M579.5,88.4h11.2V8.4h-11.2V88.4z M596.3,88.4h11.2V8.4h-11.2V88.4z" />
      <path d="M666.2,45.5c0-14.8-12-26.8-26.8-26.8s-26.8,12-26.8,26.8c0,4.9,1.3,9.5,3.7,13.5l14.4,23.8h17.5l14.4-23.8C664.9,55,666.2,50.4,666.2,45.5z M639.3,51.1c-3.1,0-5.6-2.5-5.6-5.6s2.5-5.6,5.6-5.6s5.6,2.5,5.6,5.6S642.4,51.1,639.3,51.1z" />
    </g>
  </svg>
);