import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Button, Rating, Box, List, ListItem, ListItemText } from '@mui/material';
import { products } from '../data/products';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const [mainImage, setMainImage] = useState(product?.images[0] || '');

  if (!product) return <Typography>Product not found</Typography>;

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <Box sx={{ padding: 4, backgroundColor: '#fff' }}> {/* Light background like Campus */}
      <Grid container spacing={4}>
        {/* Left: Thumbnails */}
        <Grid item xs={12} md={2}>
          <List>
            {product.images.map((img, index) => (
              <ListItem key={index} button onClick={() => setMainImage(img)}>
                <img src={img} alt={`Thumbnail ${index}`} style={{ width: '100%', maxWidth: 100 }} />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Middle: Main Image */}
        <Grid item xs={12} md={5}>
          <img src={mainImage} alt={product.name} style={{ width: '100%', maxHeight: 400 }} />
        </Grid>

        {/* Right: Details */}
        <Grid item xs={12} md={5}>
          <Typography variant="h4">{product.name}</Typography>
          <Rating value={product.rating} readOnly precision={0.5} />
          <Typography variant="h5" color="error">
            {discount}% OFF
          </Typography>
          <Typography variant="h6">
            PRICE ₹{product.price} <del>MRP ₹{product.originalPrice}</del>
          </Typography>
          <Typography>Colors: {/* Add color options if needed */}</Typography>
          <Typography>Size Guide</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {product.sizes.map((size) => (
              <Button key={size} variant="outlined">
                {size}
              </Button>
            ))}
          </Box>
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            ADD TO CART
          </Button>
          <Button variant="contained" color="secondary" fullWidth sx={{ mt: 1 }}>
            BUY NOW
          </Button>
          <Typography sx={{ mt: 2 }}>{product.description}</Typography>
          <Typography sx={{ mt: 2 }}>Care Instructions: {product.careInstructions}</Typography>
          <Typography>Manufactured by: StepX, New Delhi, India, 110001</Typography>
          <Typography>Country of Origin: {product.countryOfOrigin}</Typography>
          <Typography>Net Qty: 1 Pair of Shoes</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;