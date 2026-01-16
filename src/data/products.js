// src/data/products.js

// Sab images ko import kar rahe hain (src/imge folder se)
// Agar koi image nahi hai to comment out kar dena us line ko

import img1 from '../imge/product1.jpg';
import img2 from '../imge/product2.jpg';
import img3 from '../imge/product3.jpg';
import img4 from '../imge/product4.jpg';
import img5 from '../imge/product5.jpg';
import img6 from '../imge/product6.jpg';
import img7 from '../imge/product7.jpg';
import img8 from '../imge/product8.jpg';
import img9 from '../imge/product9.jpg';
import img10 from '../imge/product10.jpg';
import img11 from '../imge/product11.jpg';
import img12 from '../imge/product12.jpg';
import card1 from '../imge/card1.jpg';
import card2 from '../imge/card2.jpg';
import card3 from '../imge/card3.jpg';
import card4 from '../imge/card4.jpg';
import card5 from '../imge/card5.jpg';
import card6 from '../imge/card6.jpg';
import card7 from '../imge/card7.jpg';
import card8 from '../imge/card8.jpg';
import card9 from '../imge/card9.jpg';
import card10 from '../imge/card10.jpg';
import card11 from '../imge/card11.jpg';
import card12 from '../imge/card12.jpg';

export const shoesData = [
  { id: 1,  slug: 'nova-glide',     name: 'Nova Glide',     price: 2199, rating: 4.7, image: img1,   onSale: true  },
  { id: 2,  slug: 'pulse-runner',   name: 'Pulse Runner',   price: 2299, rating: 4.5, image: img2,   onSale: false },
  { id: 3,  slug: 'urban-flow',     name: 'Urban Flow',     price: 2999, rating: 4.8, image: img3,   onSale: false },
  { id: 4,  slug: 'velocity-pro',   name: 'Velocity Pro',   price: 2799, rating: 4.6, image: img4,   onSale: false },
  { id: 5,  slug: 'blaze-trail',    name: 'Blaze Trail',    price: 1899, rating: 4.4, image: img5,   onSale: true  },
  { id: 6,  slug: 'luxe-walker',    name: 'Luxe Walker',    price: 2599, rating: 4.3, image: img6,   onSale: false },
  { id: 7,  slug: 'aero-sprint',    name: 'Aero Sprint',    price: 3499, rating: 4.9, image: img7,   onSale: false },
  { id: 8,  slug: 'neon-edge',      name: 'Neon Edge',      price: 1999, rating: 4.2, image: img8,   onSale: true  },
  { id: 9,  slug: 'shadow-strike',  name: 'Shadow Strike',  price: 2299, rating: 4.6, image: img9,   onSale: false },
  { id: 10, slug: 'crystal-step',   name: 'Crystal Step',   price: 2299, rating: 4.7, image: img10,  onSale: true  },
  { id: 11, slug: 'fusion-flux',    name: 'Fusion Flux',    price: 2699, rating: 4.5, image: img11,  onSale: false },
  { id: 12, slug: 'vortex-runner',  name: 'Vortex Runner',  price: 3199, rating: 4.8, image: img12,  onSale: false },
  { id: 13, slug: 'lunar-walk',     name: 'Lunar Walk',     price: 2099, rating: 4.4, image: card1,  onSale: true  },
  { id: 14, slug: 'eclipse-pro',    name: 'Eclipse Pro',    price: 2799, rating: 4.6, image: card2,  onSale: false },
  { id: 15, slug: 'radiant-rush',   name: 'Radiant Rush',   price: 2399, rating: 4.7, image: card3,  onSale: true  },
  { id: 16, slug: 'phantom-flex',   name: 'Phantom Flex',   price: 2399, rating: 4.3, image: card4,  onSale: false },
  { id: 17, slug: 'stellar-stride', name: 'Stellar Stride', price: 2099, rating: 4.9, image: card5,  onSale: true  },
  { id: 18, slug: 'cosmo-glide',    name: 'Cosmo Glide',    price: 2499, rating: 4.5, image: card6,  onSale: true  },
  { id: 19, slug: 'ignite-motion',  name: 'Ignite Motion',  price: 2699, rating: 4.6, image: card7,  onSale: false },
  { id: 20, slug: 'aurora-bounce',  name: 'Aurora Bounce',  price: 1299, rating: 4.8, image: card8,  onSale: true  },
  { id: 21, slug: 'titan-trek',     name: 'Titan Trek',     price: 1999, rating: 4.4, image: card9,  onSale: false },
  { id: 22, slug: 'prism-pulse',    name: 'Prism Pulse',    price: 2199, rating: 4.7, image: card10, onSale: true  },
  { id: 23, slug: 'zenith-zoom',    name: 'Zenith Zoom',    price: 2599, rating: 4.5, image: card11, onSale: false },
  { id: 24, slug: 'infinity-stride',name: 'Infinity Stride',price: 2099, rating: 4.9, image: card12, onSale: true  },
];