import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Box, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const shoe = state?.shoe;

  if (!shoe) return <Typography>Product not found</Typography>;

  return (
    <Box sx={{ padding: 6, backgroundColor: '#000000', color: '#ffffff', minHeight: '100vh' }}>
      <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        <img src={shoe.imageUrl} alt={shoe.name} style={{ maxWidth: '500px', borderRadius: '16px' }} />
        <Box>
          <Typography variant="h3">{shoe.name}</Typography>
          <Typography variant="h6">Brand: {shoe.brand}</Typography>
          <Typography variant="h4" sx={{ my: 2 }}>₹{shoe.price.toLocaleString('en-IN')}</Typography>
          {shoe.onSale && <Typography color="error">On Sale!</Typography>}

          <FormControl fullWidth sx={{ my: 3 }}>
            <InputLabel id="size-label" sx={{ color: '#ffffff' }}>Select Size</InputLabel>
            <Select labelId="size-label" label="Select Size" defaultValue="9">
              <MenuItem value="7">UK 7</MenuItem>
              <MenuItem value="8">UK 8</MenuItem>
              <MenuItem value="9">UK 9</MenuItem>
              <MenuItem value="10">UK 10</MenuItem>
              <MenuItem value="11">UK 11</MenuItem>
            </Select>
          </FormControl>

          <Button variant="contained" size="large" sx={{ background: '#5a024eff' }}>
            Add to Cart & Buy
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;