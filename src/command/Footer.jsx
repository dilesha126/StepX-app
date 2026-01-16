import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  Button,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Facebook,
  YouTube,
  Instagram,
  Twitter,
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(135deg, #23001c 0%, #0f1a3a 100%)', // purple → dark blue-purple
        color: '#e0e7ff', 
        pt: { xs: 6, md: 8 },
        pb: { xs: 5, md: 7 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, sm: 5, md: 6 }}>
          {/* Column 1 - What's In Store */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{
                color: '#c084fc', 
                fontSize: { xs: '1.15rem', md: '1.3rem' },
              }}
            >
              What's In Store
            </Typography>
            <Box sx={{ fontSize: { xs: '0.84rem', sm: '0.9rem' } }}>
              {['New Arrivals', 'Men', 'Women', 'Kids', 'Track Order'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  display="block"
                  mb={0.9}
                  sx={{ '&:hover': { color: '#a5b4fc' } }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 2 - Company Info */}
          <Grid item xs={6} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{
                color: '#c084fc',
                fontSize: { xs: '1.15rem', md: '1.3rem' },
              }}
            >
              Company Info & Policies
            </Typography>
            <Box sx={{ fontSize: { xs: '0.84rem', sm: '0.9rem' } }}>
              {['Blogs', 'Sneaker Care', 'Terms & Conditions', 'Privacy Policy', 'Return Policy', 'Shipping Policy'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  color="inherit"
                  underline="hover"
                  display="block"
                  mb={0.9}
                  sx={{ '&:hover': { color: '#a5b4fc' } }}
                >
                  {item}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 3 - Get In Touch */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{
                color: '#c084fc',
                fontSize: { xs: '1.15rem', md: '1.3rem' },
              }}
            >
              Get In Touch
            </Typography>

            <Typography variant="body2" mb={0.8} fontSize={{ xs: '0.85rem', sm: '0.9rem' }}>
              Inquiry/Complaint: <strong>96677 06012</strong>
            </Typography>
            <Typography variant="body2" mb={2.5} fontSize={{ xs: '0.85rem', sm: '0.9rem' }}>
              10:00 AM – 7:00 PM
            </Typography>

            <Typography variant="body2" mb={0.8} fontSize={{ xs: '0.85rem', sm: '0.9rem' }}>
              Any Other Queries: <strong>96677 06012</strong>
            </Typography>

            <Typography variant="body2" mb={3} fontSize={{ xs: '0.85rem', sm: '0.9rem' }}>
              Email:{' '}
              <Link
                href="mailto:customercare@yourbrand.com"
                color="#67e8f9" // light cyan/blue
                underline="hover"
                sx={{ '&:hover': { color: '#22d3ee' } }}
              >
                customercare@stepx.com
              </Link>
            </Typography>

            <Box>
              {[
                { Icon: Facebook },
                { Icon: YouTube },
                { Icon: Instagram },
                { Icon: Twitter },
              ].map(({ Icon }, i) => (
                <IconButton
                  key={i}
                  size="medium"
                  sx={{
                    color: '#94a3b8',
                    '&:hover': { color: '#f6f6f6', transform: 'scale(1.15)' },
                    transition: 'all 0.2s',
                    mx: 0.5,
                  }}
                >
                  <Icon fontSize={isMobile ? 'small' : 'medium'} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Column 4 - Newsletter */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              fontWeight={700}
              gutterBottom
              sx={{
                color: '#c084fc',
                fontSize: { xs: '1.15rem', md: '1.3rem' },
              }}
            >
              Newsletter
            </Typography>

            <Typography variant="body2" mb={2.5} fontSize={{ xs: '0.85rem', sm: '0.9rem' }}>
              Get exclusive offers, new arrivals & exciting updates!
            </Typography>

            <Box component="form" noValidate>
              <TextField
                fullWidth
                placeholder="Your email address"
                variant="outlined"
                size="medium"
                sx={{
                  mb: 2.5,
                  '& .MuiOutlinedInput-root': {
                    color: '#e0f2fe',
                    bgcolor: 'rgba(255,255,255,0.07)',
                    borderRadius: 2,
                    '& fieldset': { borderColor: '#64748b' },
                    '&:hover fieldset': { borderColor: '#f967f9' },
                    '&.Mui-focused fieldset': { borderColor: '#f96fdb' },
                  },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#8b5cf6', // vibrant purple
                  color: 'white',
                  py: 1.4,
                  borderRadius: 2,
                  fontWeight: 600,
                  '&:hover': {
                    bgcolor: '#7c3aed',
                    boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                  },
                }}
              >
                SUBMIT
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: { xs: 5, md: 7 }, borderColor: 'rgba(167, 139, 250, 0.15)' }} />

        <Box textAlign="center">
          <Typography
            variant="body2"
            color="#94a3b8"
            mb={1.5}
            sx={{ fontSize: { xs: '0.78rem', sm: '0.82rem' } }}
          >
            Popular Searches: Running • Casual • Sports • Flip Flops • Slides • Sneakers • Sandals • Formal 
          </Typography>

          <Typography
            variant="body2"
            color="#64748b"
            sx={{ fontSize: { xs: '0.78rem', sm: '0.82rem' } }}
          >
            © {new Date().getFullYear()} StepX . All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;