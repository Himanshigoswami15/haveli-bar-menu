import type { MenuCategory } from './types';
import { 
  WhiskyGlassIcon,
  HighballGlassIcon,
  CocktailGlassIcon,
  BeerMugIcon,
  WineGlassIcon,
} from './components/IconComponents';

export const MENU_DATA: MenuCategory[] = [
  {
    id: 'deluxe-scotch-whisky',
    name: 'Deluxe Scotch Whisky',
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'Chivas Regal (12 Years)', bottlePrice: 4500, glassPrice: 375, glassSize: 60, image: WhiskyGlassIcon },
      { name: 'Johny Walker (Black Labell)', bottlePrice: 4500, glassPrice: 375, glassSize: 60, image: WhiskyGlassIcon },
      { name: 'Johny Walker (Red Labell)', bottlePrice: 3000, glassPrice: 250, glassSize: 60, image: WhiskyGlassIcon },
    ],
  },
  {
    id: 'deluxe-whisky',
    name: 'Deluxe Whisky',
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'Black-Dog (8 Years)', bottlePrice: 3000, glassPrice: 250, glassSize: 60, image: WhiskyGlassIcon },
      { name: 'Teacher\'s', bottlePrice: 2900, glassPrice: 250, glassSize: 60, image: WhiskyGlassIcon },
      { name: '100 Pipers', bottlePrice: 32900, glassPrice: 250, glassSize: 60, image: WhiskyGlassIcon },
      { name: 'Blender\'s Pride', bottlePrice: 1900, glassPrice: 160, glassSize: 60, image: WhiskyGlassIcon },
    ],
  },
  {
    id: 'singel-malt-whisky',
    name: 'Single Malt Whisky',
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'AMRUT', bottlePrice: 6000, glassPrice: 500, glassSize: 60, image: WhiskyGlassIcon },
    ],
  },
  {
    id: 'vodka-rum',
    name: 'Vodka/Rum',
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'Grey-Goose', bottlePrice: 4600, glassPrice: 380, glassSize: 60, image: HighballGlassIcon },
      { name: 'Absolute Vodka', bottlePrice: 3200, glassPrice: 260, glassSize: 60, image: HighballGlassIcon },
      { name: 'Smirnoff', bottlePrice: 2000, glassPrice: 170, glassSize: 60, image: HighballGlassIcon },
      { name: 'Magic Moments', bottlePrice: 1600, glassPrice: 130, glassSize: 60, image: HighballGlassIcon },
      { name: 'Old Monk', bottlePrice: 1400, glassPrice: 120, glassSize: 60, image: HighballGlassIcon },
      { name: 'Bacardi White', bottlePrice: 2000, glassPrice: 160, glassSize: 60, image: HighballGlassIcon },
    ],
  },
  {
    id: 'gin-tequilla',
    name: 'Gin/Tequilla',
    priceHeader: '60 ML PRICE',
    items: [
      { name: 'Biue Riband', bottlePrice: 2000, glassPrice: 160, glassSize: 60, image: CocktailGlassIcon },
      { name: 'Camino Real', bottlePrice: 3000, glassPrice: 250, glassSize: 60, image: CocktailGlassIcon },
    ],
  },
  {
    id: 'beer-breezer',
    name: 'Beer/Breezer',
    priceHeader: 'PRICE',
    items: [
      { name: 'Corona Extra (Pint - 330 MI.)', bottlePrice: 500, image: BeerMugIcon },
      { name: 'Kingfisher Premium Strong - 650 MI.', bottlePrice: 300, image: BeerMugIcon },
      { name: 'Kingfisher Premium - 650 MI.', bottlePrice: 300, image: BeerMugIcon },
      { name: 'Kingfisher Ultra Max - 650 MI.', bottlePrice: 400, image: BeerMugIcon },
      { name: 'Kingfisher Ultra Lager - 650 MI.', bottlePrice: 350, image: BeerMugIcon },
      { name: 'Tuborg Premium - 650 MI.', bottlePrice: 300, image: BeerMugIcon },
      { name: 'Budweiser Magnum - 650 MI.', bottlePrice: 400, image: BeerMugIcon },
      { name: 'Elephant (Carlsberg) - 650 MI.', bottlePrice: 400, image: BeerMugIcon },
      { name: 'Bacardi Breezer (Pint - 330 MI.)', bottlePrice: 220, image: CocktailGlassIcon },
    ],
  },
  {
    id: 'wines',
    name: 'Wine\'s',
    priceHeader: '150 ML PRICE',
    items: [
      { name: 'Sula Red Wine', bottlePrice: 1700, glassPrice: 350, glassSize: 150, image: WineGlassIcon },
      { name: 'Sula Rose Wine', bottlePrice: 1700, glassPrice: 350, glassSize: 150, image: WineGlassIcon },
      { name: 'Sula White Wine', bottlePrice: 1700, glassPrice: 350, glassSize: 150, image: WineGlassIcon },
    ],
  },
];