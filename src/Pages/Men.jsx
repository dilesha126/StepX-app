import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Rating, Button, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';//motion -effect

// scroll import and imges (use Swiper-Slider )
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import scroll1 from '../imge/scroll1.jpg';
import scroll2 from '../imge/scroll2.jpg';
import scroll3 from '../imge/scroll3.jpg';

import ElectricBorder from '../components/ElectricBorder'; // card-electric effect

// Images
import card1 from '../imge/card1.jpg';
import card2 from '../imge/card2.jpg';
import card3 from '../imge/card3.jpg';
import card4 from '../imge/card4.jpg';
import card5 from '../imge/card5.jpg';
import card6 from '../imge/card6.jpg';

// Shoes data
const shoesData = [
  { id: 1, name: 'Running Pro',   brand: 'StepX', imageUrl: card1, rating: 4.5, price: 1500,  onSale: true },
  { id: 2, name: 'Casual Walker', brand: 'StepX', imageUrl: card2, rating: 4.0, price: 3000,   onSale: false },
  { id: 3, name: 'Sport Elite',   brand: 'StepX', imageUrl: card3, rating: 4.8, price: 1300,  onSale: true },
  { id: 4, name: 'Urban Sneaker', brand: 'StepX', imageUrl: card4, rating: 4.2, price: 2600,   onSale: false },
  { id: 5, name: 'Trail Runner',  brand: 'StepX', imageUrl: card5, rating: 4.6, price: 1200,  onSale: true },
  { id: 6, name: 'Gym Master',    brand: 'StepX', imageUrl: card6, rating: 4.3, price: 2800,  onSale: false },
];

const Men = () => {
  const firstRow = shoesData.slice(0, 3);
  const secondRow = shoesData.slice(3, 6);

  const renderRow = (rowData) => (
    <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
      {rowData.map((shoe) => (
        <Grid item key={shoe.id}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            whileHover={{ scale: 1.05 }}
          >
            <ElectricBorder
              cardProps={{
                color: "#dd80ff",
                speed: 1,
                chaos: 0.12,
                borderRadius: 16
              }}
            >
              <Card
                sx={{
                  width: 340,
                  backgroundColor: '#120314ff',
                  boxShadow: 'none',
                  borderRadius: 4,
                }}
              >
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    image={shoe.imageUrl}
                    alt={shoe.name}
                    sx={{
                      height: '368px',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  />
                  {shoe.onSale && (
                    <Chip
                      label="Sale"
                      color="error"
                      sx={{ position: 'absolute', top: 10, right: 10, fontWeight: 'bold' }}
                    />
                  )}
                </Box>
                <CardContent>
                  <Typography variant="h6" sx={{ color: '#ffffff' }}>
                    {shoe.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#bbbbbb' }}>
                    Brand: {shoe.brand}
                  </Typography>
                  <Rating value={shoe.rating} readOnly precision={0.5} sx={{ my: 1 }} />
                  
                  {/* ← Dollar ki jagah Rupees ₹ */}
                  <Typography variant="h6" sx={{ color: '#ffffff' }}>
                    ₹{shoe.price}
                  </Typography>
                  
                  <Button variant="contained" color="primary" fullWidth sx={{ mt: 1, background: '#5a024eff' }}>
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </ElectricBorder>
          </motion.div>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box sx={{ padding: { xs: 2, md: 6 }, backgroundColor: '#000000', minHeight: '100vh' }}>
      
      <Typography className=''
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          background: 'linear-gradient(90deg, #ffffff 0%, #f623b3ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 8,
          fontFamily: 'sans-serif',
        }}
      >
        Men's Collection
      </Typography>

      {renderRow(firstRow)}
      {renderRow(secondRow)}


      {/* slider -start */}

                
          <div style={{ maxWidth: "100%", overflow: "hidden", paddingTop: "40px" }}>
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={50}
              slidesPerView={1}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 3000, // 3 seconds ke baad auto next
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              speed={800} // smooth transition
            >
              <SwiperSlide>
                <Box
                  component="img"
                  src={scroll2}
                  sx={{
                    width: '100%',
                    height: { xs: 'auto', md: '464px' },
                    objectFit: 'cover',
                    display: 'block',
                    margin: 'auto',
                    transition: 'all 0.8s ease-in-out',
                    '&.swiper-slide-active': {
                      transform: 'scale(1.1) translateY(-20px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                      zIndex: 10,
                    },
                  }}
                  className="" // className khali hai, lekin active pe style apply hoga
                />
              </SwiperSlide>

              <SwiperSlide>
                <Box
                  component="img"
                  src={scroll1}
                  sx={{
                    width: '100%',
                    height: { xs: 'auto', md: '464px' },
                    objectFit: 'cover',
                    display: 'block',
                    margin: 'auto',
                    transition: 'all 0.8s ease-in-out',
                    '&.swiper-slide-active': {
                      transform: 'scale(1.1) translateY(-20px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                      zIndex: 10,
                    },
                  }}
                />
              </SwiperSlide>

              <SwiperSlide>
                <Box
                  component="img"
                  src={scroll3}
                  sx={{
                    width: '100%',
                    height: { xs: 'auto', md: '464px' },
                    objectFit: 'cover',
                    display: 'block',
                    margin: 'auto',
                    transition: 'all 0.8s ease-in-out',
                    '&.swiper-slide-active': {
                      transform: 'scale(1.1) translateY(-20px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                      zIndex: 10,
                    },
                  }}
                />
              </SwiperSlide>
            </Swiper>
          </div>

{/* slider-end */}

    </Box>
  );
};

export default Men;