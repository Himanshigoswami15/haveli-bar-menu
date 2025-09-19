import type { MenuCategory } from './types';
import { WhiskyIcon, SingleMaltIcon, VodkaIcon, TequilaIcon, BeerIcon, WineIcon } from './components/IconComponents';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'deluxe-scotch-whisky',
    name: 'Deluxe Scotch Whisky',
    icon: WhiskyIcon,
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'Chivas Regal (12 Years)', bottlePrice: 4500, glassPrice: 375, glassSize: 60 },
      { name: 'Johny Walker (Black Labell)', bottlePrice: 4500, glassPrice: 375, glassSize: 60 },
      { name: 'Johny Walker (Red Labell)', bottlePrice: 3000, glassPrice: 250, glassSize: 60 },
    ],
  },
  {
    id: 'deluxe-whisky',
    name: 'Deluxe Whisky',
    icon: WhiskyIcon,
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'Black-Dog (8 Years)', bottlePrice: 3000, glassPrice: 250, glassSize: 60 },
      { name: 'Teacher\'s', bottlePrice: 2900, glassPrice: 250, glassSize: 60 },
      { name: '100 Pipers', bottlePrice: 32900, glassPrice: 250, glassSize: 60 }, // Price as per image, might be a typo
      { name: 'Blender\'s Pride', bottlePrice: 1900, glassPrice: 160, glassSize: 60 },
    ],
  },
  {
    id: 'singel-malt-whisky',
    name: 'Single Malt Whisky',
    icon: SingleMaltIcon,
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'AMRUT', bottlePrice: 6000, glassPrice: 500, glassSize: 60 },
    ],
  },
  {
    id: 'vodka-rum',
    name: 'Vodka/Rum',
    icon: VodkaIcon,
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'Grey-Goose', bottlePrice: 4600, glassPrice: 380, glassSize: 60 },
      { name: 'Absolute Vodka', bottlePrice: 3200, glassPrice: 260, glassSize: 60 },
      { name: 'Smirnoff', bottlePrice: 2000, glassPrice: 170, glassSize: 60 },
      { name: 'Magic Moments', bottlePrice: 1600, glassPrice: 130, glassSize: 60 },
      { name: 'Old Monk', bottlePrice: 1400, glassPrice: 120, glassSize: 60 },
      { name: 'Bacardi White', bottlePrice: 2000, glassPrice: 160, glassSize: 60 },
    ],
  },
  {
    id: 'gin-tequilla',
    name: 'Gin/Tequilla',
    icon: TequilaIcon,
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'Biue Riband', bottlePrice: 2000, glassPrice: 160, glassSize: 60 },
      { name: 'Camino Real', bottlePrice: 3000, glassPrice: 250, glassSize: 60 },
    ],
  },
  {
    id: 'beer-breezer',
    name: 'Beer/Breezer',
    icon: BeerIcon,
    priceHeader: 'PRICE',
    items: [
      { name: 'Corona Extra (Pint - 330 MI.)', bottlePrice: 500 },
      { name: 'Kingfisher Premium Strong - 650 MI.', bottlePrice: 300 },
      { name: 'Kingfisher Premium - 650 MI.', bottlePrice: 300 },
      { name: 'Kingfisher Ultra Max - 650 MI.', bottlePrice: 400 },
      { name: 'Kingfisher Ultra Lager - 650 MI.', bottlePrice: 350 },
      { name: 'Tuborg Premium - 650 MI.', bottlePrice: 300 },
      { name: 'Budweiser Magnum - 650 MI.', bottlePrice: 400 },
      { name: 'Elephant (Carlsberg) - 650 MI.', bottlePrice: 400 },
      { name: 'Bacardi Breezer (Pint - 330 MI.)', bottlePrice: 220 },
    ],
  },
  {
    id: 'wines',
    name: 'Wine\'s',
    icon: WineIcon,
    priceHeader: '150 ML PRICE',
    items: [
      { name: 'Sula Red Wine', bottlePrice: 1700, glassPrice: 350, glassSize: 150 },
      { name: 'Sula Rose Wine', bottlePrice: 1700, glassPrice: 350, glassSize: 150 },
      { name: 'Sula White Wine', bottlePrice: 1700, glassPrice: 350, glassSize: 150 },
    ],
  },
];
