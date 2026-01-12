import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Rating, Button, Chip, Box } from '@mui/material';
import { motion, useScroll, useSpring, useTransform, useMotionValue, useVelocity, useAnimationFrame } from 'framer-motion';
import { useRef, useLayoutEffect, useState } from 'react';

import ElectricBorder from '../components/ElectricBorder';//  ElectricBorder - Effect

import '../components/ScrollVelocity.css'; // gredient - Line -Effect

// Images
import card7 from '../imge/card7.jpg';
import card8 from '../imge/card8.jpg';
import card9 from '../imge/card9.jpg';
import card10 from '../imge/card10.jpg';
import card11 from '../imge/card11.jpg';
import card12 from '../imge/card12.jpg';

// Shoes data
const shoesData = [
  { id: 1, name: 'Running Pro',   brand: 'StepX', imageUrl: card7, rating: 4.5, price: 1200,  onSale: true },
  { id: 2, name: 'Casual Walker', brand: 'StepX', imageUrl: card8, rating: 4.0, price: 2000,   onSale: false },
  { id: 3, name: 'Sport Elite',   brand: 'StepX', imageUrl: card9, rating: 4.8, price: 2200,  onSale: false },
  { id: 4, name: 'Urban Sneaker', brand: 'StepX', imageUrl: card10, rating: 4.2, price: 2500,   onSale: false },
  { id: 5, name: 'Trail Runner',  brand: 'StepX', imageUrl: card11, rating: 4.6, price: 1500,  onSale: true },
  { id: 6, name: 'Gym Master',    brand: 'StepX', imageUrl: card12, rating: 4.3, price: 1500,  onSale: true },
];

// Helper hook for element width
function useElementWidth(ref) {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (ref.current) setWidth(ref.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [ref]);
  return width;
}

// ScrollVelocity Component with Gradient Text
const ScrollVelocity = ({
  velocity = 160,
  texts = [
    "★Step In To StepX , STEP INTO STYLE★",
    " ★Men's & WOMEN'S PREMIUM COLLECTION★"
  ],
}) => {
  const VelocityText = ({ children, baseVelocity }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });

    const copyRef = useRef(null);
    const copyWidth = useElementWidth(copyRef);

    const wrap = (min, max, v) => {
      const range = max - min;
      return min + ((((v - min) % range) + range) % range);
    };

    const x = useTransform(baseX, (v) =>
      copyWidth === 0 ? "0px" : `${wrap(-copyWidth, 0, v)}px`
    );

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
      if (velocityFactor.get() < 0) directionFactor.current = -1;
      else if (velocityFactor.get() > 0) directionFactor.current = 1;
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    const spans = Array.from({ length: 8 }, (_, i) => (
      <span key={i} ref={i === 0 ? copyRef : null} className="custom-scroll-text">
        {children}
      </span>
    ));

    return (
      <div className="parallax">
        <motion.div className="scroller" style={{ x }}>
          {spans}
        </motion.div>
      </div>
    );
  };

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#000000", overflow: "hidden" }}>
      {texts.map((text, index) => (
        <VelocityText
          key={index}
          baseVelocity={index % 2 === 0 ? velocity : -velocity}
        >
          {text}&nbsp;&nbsp;&nbsp;&nbsp;
        </VelocityText>
      ))}
    </Box>
  );
};

// Main Women Component
const Women = () => {
  const firstRow = shoesData.slice(0, 3);
  const secondRow = shoesData.slice(3, 6);

  const renderRow = (rowData) => (
    <Grid container spacing={4} justifyContent="center" sx={{ mb: 8 }}>
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
                  <Typography variant="h6" sx={{ color: '#ffffff' }}>
                    ₹{shoe.price}
                  </Typography>
                  <Button variant="contained" fullWidth sx={{ mt: 1, background: '#5a024eff' }}>
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
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          background: 'linear-gradient(90deg, #ffffff 0%, #f623b3ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          mb: 10,
          fontFamily: 'sans-serif',
          fontWeight: 'bold',
        }}
      >
        Women's Collection
      </Typography>

      {renderRow(firstRow)}
      {renderRow(secondRow)}

      {/* Scrolling Text Effect with Purple-White-LightBlue Gradient */}
      <ScrollVelocity velocity={260} />
    </Box>
  );
};

export default Women;