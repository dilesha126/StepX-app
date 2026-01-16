import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Rating,
  Button,
  Chip,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { shoesData } from '../data/products'; 

const ProductDetail = () => {
  const { slug } = useParams();
  const product = shoesData.find((p) => p.slug === slug);

  
 
  const [mainImage, setMainImage] = useState(product?.imageUrl || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);

  // Early return AFTER all hooks
  if (!product) {
    return (
      <Box sx={{ p: 6, textAlign: 'center', color: 'white', bgcolor: '#111', minHeight: '100vh' }}>
        <Typography variant="h4">Product Not Found</Typography>
      </Box>
    );
  }

  const discount = Math.round(((product.price * 1.4 - product.price) / (product.price * 1.4)) * 100);


  return (
    <Box sx={{ bgcolor: '#f8f8f8', minHeight: '100vh', p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>
        {/* Left thumbnails */}
        <Grid item xs={12} md={2}>
          <List
            sx={{
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              gap: 2,
              overflowX: { xs: 'auto', md: 'hidden' },
            }}
          >

          </List>
        </Grid>

        {/* Center main image */}
        <Grid item xs={12} md={5}>
          <Box sx={{ position: 'relative', bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: 1 }}>
            {product.onSale && (
              <Chip
                label={`${discount}% OFF`}
                color="error"
                sx={{ position: 'absolute', top: 16, left: 16, fontWeight: 'bold' }}
              />
            )}
            <img
              src={mainImage}
              alt={product.name}
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </Box>
        </Grid>

        {/* Right details */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Rating value={product.rating} precision={0.5} readOnly size="large" />
            <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary' }}>
              (4.7) • 1,025 Reviews
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Typography variant="h4" color="error" fontWeight="bold">
              ₹{product.price.toLocaleString('en-IN')}
            </Typography>
            <Typography variant="h6" sx={{ textDecoration: 'line-through', color: 'text.secondary' }}>
              ₹{Math.round(product.price * 1.4).toLocaleString('en-IN')}
            </Typography>
            <Chip label={`${discount}% OFF`} color="error" size="small" />
          </Box>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Colors:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            <Box sx={{ width: 32, height: 32, bgcolor: '#d2b48c', borderRadius: '50%', border: '1px solid #ccc' }} />
            <Box sx={{ width: 32, height: 32, bgcolor: '#8b4513', borderRadius: '50%', border: '1px solid #ccc' }} />
             <Box sx={{ width: 32, height: 32, bgcolor: '#00095d', borderRadius: '50%', border: '1px solid #ccc' }} />
          </Box>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Size (UK):
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
            {[4, 5, 6, 7, 8].map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? 'contained' : 'outlined'}
                color={selectedSize === size ? 'primary' : 'inherit'}
                onClick={() => setSelectedSize(size)}
                sx={{ minWidth: 50 }}
              >
                {size}
              </Button>
            ))}
          </Box>

          <Typography variant="body2" color="primary" sx={{ mb: 2, cursor: 'pointer' }}>
            Size Guide →
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Quantity:
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <IconButton onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              <RemoveIcon />
            </IconButton>
            <Typography variant="h6">{quantity}</Typography>
            <IconButton onClick={() => setQuantity((q) => q + 1)}>
              <AddIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
            <Button variant="contained" color="primary" fullWidth size="large">
              ADD TO CART
            </Button>
            <Button variant="contained" color="secondary" fullWidth size="large">
              BUY NOW
            </Button>
          </Box>

          <IconButton sx={{ mb: 3 }}>
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </IconButton>

          <Typography variant="body1" paragraph sx={{ mt: 4 }}>
            {product.description}
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
            Care Instructions:
          </Typography>
          <Typography variant="body2" paragraph>
            Wipe with Lukewarm Water. Do Not Bleach. Upper Material: PU. Insole: Super soft.
          </Typography>

          <Typography variant="body2">
            Manufactured by: StepX, New Delhi, India, 110001
          </Typography>
          <Typography variant="body2">
            Country of Origin: India
          </Typography>
          <Typography variant="body2">
            Net Qty: 1 Pair of Shoes
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;