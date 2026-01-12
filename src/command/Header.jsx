import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// React Router ke liye
import { Link } from 'react-router-dom';

import logo from '../imge/logo.png';

// Pages list with proper paths
const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Men', path: '/men' },
  { name: 'Women', path: '/women' },
  { name: 'Collection', path: '/Collection' },
  // { name: 'Contect', path: '/contect' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchText, setSearchText] = React.useState('');
  const [showSearch, setShowSearch] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Mobile menu close + search reset
  const handleMenuItemClick = () => {
    handleCloseNavMenu();
    setShowSearch(false);
    setSearchText('');
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(90deg, #3a0936ff, #142d36ff, #3a0936ff)',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 70 } }}>

          {/* LOGO - Click karne par Home page (puri website) pe jayega */}
          <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 1, sm: 2 } }}>
            <Link to="/">
              <img
                src={logo}
                alt="STEPX Logo"
                style={{
                  width: 130,
                  height: 70,
                  maxWidth: '100%',
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
              />
            </Link>
          </Box>

          {/* MOBILE MENU ICON */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
            <IconButton color="inherit" onClick={handleOpenNavMenu} size="large">
              <MenuIcon />
            </IconButton>
          </Box>

          {/* MOBILE MENU */}
          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page.name} onClick={handleMenuItemClick}>
                <Link
                  to={page.path}
                  style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </Link>
              </MenuItem>
            ))}
          </Menu>

          {/* DESKTOP NAVIGATION */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              gap: { md: 1, lg: 3 },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{
                  color: 'white',
                  fontSize: { md: '0.95rem', lg: '1rem' },
                  px: { md: 1.5, lg: 2 },
                  py: 1,
                  '&:hover': {
                    backgroundColor: '#68236aff',
                    borderRadius: 1,
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* SEARCH + WISHLIST + CART */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.5, sm: 1, md: 1.5 },
            }}
          >
            <IconButton
              color="inherit"
              onClick={() => setShowSearch(!showSearch)}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <SearchIcon />
            </IconButton>

            {showSearch && (
              <TextField
                size="small"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onBlur={() => !searchText && setShowSearch(false)}
                autoFocus
                sx={{
                  backgroundColor: 'white',
                  borderRadius: 2,
                  width: { sm: 160, md: 200, lg: 250 },
                  mr: 1,
                  '& .MuiInputBase-root': {
                    borderRadius: 2,
                  },
                  display: { xs: 'none', sm: 'block' },
                }}
              />
            )}

            <IconButton color="inherit">
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;