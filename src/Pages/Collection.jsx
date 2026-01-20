import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Rating, Button, Chip, Box } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


import ElectricBorder from '../components/ElectricBorder';//  ElectricBorder - Effect

import { shoesData } from '../data/products';


const Collection = () => {
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
                width: 380,
                height: 610,
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
                  image={shoe.image}   // image use  (import )
                  alt={shoe.name}
                  sx={{
                    height: 350,
                    objectFit: 'cover',
                    transition: 'transform 0.35s ease',
                    '&:hover': { transform: 'scale(1.08)' },
                  }}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/380x350?text=Image+Not+Found';
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
                    StepX
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
                    component={Link}
                    to={`/product/${shoe.slug}`}
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
            </ElectricBorder>
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