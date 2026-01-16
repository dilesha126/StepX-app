import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Rating, Button, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';

import '../components/ScrollVelocity.css';

// Import your own 24 images (change paths)
import card1 from '../imge/card9.jpg';
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
import product1 from '../imge/product1.jpg';
import product2 from '../imge/product2.jpg';
import product3 from '../imge/product3.jpg';
import product4 from '../imge/product4.jpg';
import product5 from '../imge/product5.jpg';
import product6 from '../imge/product6.jpg';
import product7 from '../imge/product7.jpg';
import product8 from '../imge/product8.jpg';
import product9 from '../imge/product9.jpg';
import product10 from '../imge/product10.jpg';
import product11 from '../imge/product11.jpg';
import product12 from '../imge/product12.jpg';

// You can change names, prices, ratings etc. as you wish
const shoesData = [
  { id: 1,  name: 'Nova Glide',       brand: 'StepX', imageUrl: product1,  rating: 4.7, price: 2199, onSale: true  },
  { id: 2,  name: 'Pulse Runner',     brand: 'StepX', imageUrl: product2,  rating: 4.5, price: 2299, onSale: false },
  { id: 3,  name: 'Urban Flow',       brand: 'StepX', imageUrl: product3,  rating: 4.8, price: 2999, onSale: false },
  { id: 4,  name: 'Velocity Pro',     brand: 'StepX', imageUrl: product4,  rating: 4.6, price: 2799, onSale: false },
  { id: 5,  name: 'Blaze Trail',      brand: 'StepX', imageUrl: product5,  rating: 4.4, price: 1899, onSale: true  },
  { id: 6,  name: 'Luxe Walker',      brand: 'StepX', imageUrl: product6,  rating: 4.3, price: 2599, onSale: false },
  { id: 7,  name: 'Aero Sprint',      brand: 'StepX', imageUrl: product7,  rating: 4.9, price: 3499, onSale: false },
  { id: 8,  name: 'Neon Edge',        brand: 'StepX', imageUrl: product8,  rating: 4.2, price: 1999, onSale: true  },
  { id: 9,  name: 'Shadow Strike',    brand: 'StepX', imageUrl: product9,  rating: 4.6, price: 2299, onSale: false },
  { id: 10, name: 'Crystal Step',     brand: 'StepX', imageUrl: product10, rating: 4.7, price: 2299, onSale: true  },
  { id: 11, name: 'Fusion Flux',      brand: 'StepX', imageUrl: product11, rating: 4.5, price: 2699, onSale: false },
  { id: 12, name: 'Vortex Runner',    brand: 'StepX', imageUrl: product12, rating: 4.8, price: 3199, onSale: false },
  { id: 13, name: 'Lunar Walk',       brand: 'StepX', imageUrl: card1, rating: 4.4, price: 2099, onSale: true  },
  { id: 14, name: 'Eclipse Pro',      brand: 'StepX', imageUrl: card2, rating: 4.6, price: 2799, onSale: false },
  { id: 15, name: 'Radiant Rush',     brand: 'StepX', imageUrl: card3, rating: 4.7, price: 2399, onSale: true  },
  { id: 16, name: 'Phantom Flex',     brand: 'StepX', imageUrl: card4, rating: 4.3, price: 2399, onSale: false },
  { id: 17, name: 'Stellar Stride',   brand: 'StepX', imageUrl: card5, rating: 4.9, price: 2099, onSale: true },
  { id: 18, name: 'Cosmo Glide',      brand: 'StepX', imageUrl: card6, rating: 4.5, price: 2499, onSale: true  },
  { id: 19, name: 'Ignite Motion',    brand: 'StepX', imageUrl: card7, rating: 4.6, price: 2699, onSale: false },
  { id: 20, name: 'Aurora Bounce',    brand: 'StepX', imageUrl: card8, rating: 4.8, price: 1299, onSale: true  },
  { id: 21, name: 'Titan Trek',       brand: 'StepX', imageUrl: card9, rating: 4.4, price: 1999, onSale: false },
  { id: 22, name: 'Prism Pulse',      brand: 'StepX', imageUrl: card10, rating: 4.7, price: 2199, onSale: true  },
  { id: 23, name: 'Zenith Zoom',      brand: 'StepX', imageUrl: card11, rating: 4.5, price: 2599, onSale: false },
  { id: 24, name: 'Infinity Stride',  brand: 'StepX', imageUrl: card12, rating: 4.9, price: 2099, onSale: true  },
];

// Main Women Component
const Collection = () => {
  // Create chunks of 4 cards each
  const rows = [];
  for (let i = 0; i < shoesData.length; i += 3) {
    rows.push(shoesData.slice(i, i + 3));
  }

  const renderRow = (rowData, rowIndex) => (
    <Grid container spacing={4} justifyContent="center" key={rowIndex} sx={{ mb: 8 }}>
      {rowData.map((shoe) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={shoe.id}>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.04 }}
          >
           
              <Card
                sx={{
                  width: 380,                  // ← increased width
                  height: 610,                 // fixed height for uniformity
                  backgroundColor: 'rgb(38, 2, 43)',
                  boxShadow: 'none',
                  borderRadius: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                }}
              >
                <Box sx={{ position: 'relative', flex: '0 0 380px' }}>
                  <CardMedia
                    component="img"
                    image={shoe.imageUrl}
                    alt={shoe.name}
                    sx={{
                      height: 350,
                      objectFit: 'cover',
                      transition: 'transform 0.35s ease',
                      '&:hover': { transform: 'scale(1.08)' },
                    }}
                  />
                  {shoe.onSale && (
                    <Chip
                      label="SALE"
                      color="error"
                      size="medium"
                      sx={{
                        position: 'absolute',
                        top: 16,
                        right: 16,
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        py: 1.5
                      }}
                    />
                  )}
                </Box>

                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 600 }}>
                      {shoe.name}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#bbbbbb', mb: 1 }}>
                      {shoe.brand}
                    </Typography>
                    <Rating value={shoe.rating} readOnly precision={0.5} size="medium" sx={{ mb: 1.5 }} />
                  </div>

                  <div>
                    <Typography variant="h5" sx={{ color: '#7c96d1', fontWeight: 'bold', mb: 2 }}>
                      ₹{shoe.price.toLocaleString('en-IN')}
                    </Typography>
                    <Button 
                      variant="contained" 
                      fullWidth 
                      size="large"
                      sx={{ 
                        background: 'linear-gradient(90deg, #5a024e 0%, #9c0279 100%)',
                        '&:hover': { background: 'linear-gradient(90deg, #7a0368 0%, #c0039c 100%)' }
                      }}
                    >
                      Buy Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ 
      padding: { xs: 2, sm: 4, md: 6 }, 
      backgroundColor: '#000000', 
      minHeight: '100vh',
      color: 'white'
    }}>
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          background: 'linear-gradient(90deg, #ffffff 0%, #f623b3ff 50%, #00d4ffff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 10,
          fontFamily: 'sans-serif',
          fontWeight: '900',
          letterSpacing: '1px',
        }}
      >
       Men's & Women's Premium Collection
      </Typography>

      {rows.map((row, index) => renderRow(row, index))}

    
    </Box>
  );
};

export default Collection;