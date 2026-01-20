import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import LiquidEther from '../components/LiquidEther';// liquidbackground effect import
import BackToTop from '../components/BackToTop';

const Home = () => {

  const { scrollY } = useScroll();


  return (
    <Box
      sx={{
      
        display: 'flex',
        alignItems: 'center',
        py: { xs: 6, md: 12 },
        color: '#ffffff',
        overflow: 'hidden',
        position: 'relative',
        background: 'black', //Black background 
      }}
    >
      {/* LiquidEther Background Effect  */}
      <LiquidEther
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0, // Content ni pachal, black background in upar set 
          opacity: 0.8, // trasparent
          mixBlendMode: 'screen', // background bland thai jase 
        }}
        colors={['#5227FF', '#FF9FFC', '#B19EEF']}
        mouseForce={25}
        cursorSize={120}
        isViscous={false}
        resolution={0.5}
        autoDemo={true}
        autoIntensity={2.5}
      />

      {/* Content (text, image, buttons) */}
              <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
              <Grid container spacing={6} alignItems="center" direction={{ xs: 'column-reverse', md: 'row' }}>
                
                {/* LEFT TEXT */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <Typography 
                      variant="h1"
                      sx={{
                        fontWeight: 800,
                        fontFamily:'sans-serif',
                        fontSize: { xs: '2.5rem', sm: '3.5rem', md: '5rem' },
                        mb: 3,
                        background: 'linear-gradient(90deg, #ffffff 0%, #5aacefff 100%, #e7ebf5ff 0%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    >
                      Step Into Style & Comfort
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 2, fontWeight: 500, color: '#bbdefb' }}>
                      Step Into the Future
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, fontWeight: 300, color: '#e0e0e0', maxWidth: '95%' }}>
                      Discover our premium collection of footwear designed for the modern individual.
                    </Typography>

                    {/* BUTTONS */}
                    <Box
                      sx={{
                        display: 'flex',
                        gap: 2,
                        flexDirection: { xs: 'column', sm: 'row' },
                        justifyContent: 'flex-start',
                        '@media (min-width:557px) and (max-width:627px)': {
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '100%',
                        },
                      }}
                    >
                  
                  <button class="button">
                  Shop Now
                  </button>
            
              
              <button class="button">
                View Collection
              </button>

                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Container>

            {/* Back to Top – only on home page */}
           <BackToTop />
    </Box>
  );
};

export default Home;