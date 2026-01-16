import React from 'react';
import { Box, Container, Typography } from '@mui/material';

// Replace image path
import imgshoes from '../imge/imgshoes.png'; 

const About= () => {
  return (
   <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'black',
      }}
    >
      <Container maxWidth="lg">
        {/* Flexbox Container */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' }, // Mobile: column (text upar), Desktop: row
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
         
          <Box
            sx={{
              flex: 1,
              order: { xs: 1, md: 2 }, 
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
             
             <Typography variant="h3" align="left" gutterBottom sx={{  background: 'linear-gradient(90deg, #ffffff 0%, #f623b3ff 100%, #e7ebf5ff 0%)',   WebkitBackgroundClip: 'text',
                                 WebkitTextFillColor: 'transparent', mb: 3 ,fontFamily:'sans-serif'}}>
                  ABOUT STEPX
               </Typography>


           <Typography variant='body1'    sx={{
                color: 'white',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' },
                mb: 3,
              }} > Welcome to StepX – your destination for unique and stylish footwear.</Typography>


            <Typography
              variant="body1"
              sx={{
                color: 'white',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' },
                mb: 3,
              }}
            >
           We bring you a carefully curated collection of shoes for both men and women that you won't find everywhere else.
            At StepX, we believe in combining quality, comfort, and distinctive design to help you express your personal style.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: 'white',
                lineHeight: 1.8,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
            >
             * Unique collection with exclusive designs  <br />
             * Premium quality footwear for men and women <br />
             * Styles that stand out from the crowd  <br />
             * Comfort meets fashion in every pair <br />
            </Typography>
            <br />

               <Typography
                 variant="body1"
                 sx={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #23c1f6ff 0%, #e7f1f5ff 30%)',   WebkitBackgroundClip: 'text',
                                 WebkitTextFillColor: 'transparent',
                   lineHeight: 1.8,
                   fontSize: { xs: '1rem', md: '1.1rem' },
                 }}
             >
               "Step into something special. Step into StepX."
            </Typography>
          </Box>

          {/* Image Part  */}
            <Box
                    sx={{
                      flex: 1,
                      order: { xs: 2, md: 1 },
                      width: '100%',
                    }}
        >
                      <Box
                        sx={{
                          borderRadius: 3,
                          overflow: 'hidden', // Zoom imge 
                          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                          position: 'relative',
                          '& img': {
                            width: '100%',
                            height: 'auto',
                            display: 'block',
                            transition: 'transform 0.6s ease-in-out', // Smooth hover transition
                          },
                          '&:hover img': {
                            transform: 'scale(1.15)', // Hover par strong zoom
                          },
                          // Scroll zoom animation
                          animation: 'scrollZoom 15s ease-in-out forwards',
                          '@keyframes scrollZoom': {
                            '0%': {
                              transform: 'scale(1.2)', 
                            },
                            '100%': {
                              transform: 'scale(1)', 
                            },
                          },
        
                          '@media (max-width: 600px)': {
                            animationDuration: '20s',
                          },
                        }}
                      >
                        <img
                          src={imgshoes}
                          alt="About STEPX"
                          loading="lazy"
                        />
                      </Box>
                    </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;




