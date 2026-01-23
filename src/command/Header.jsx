import React, { useEffect } from 'react';
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
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import logo from '../imge/logo.png';

// Pages list
const pages = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Men', path: '/men' },
  { name: 'Women', path: '/women' },
  { name: 'Collection', path: '/Collection' }
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [searchText, setSearchText] = React.useState('');
  const [showSearch, setShowSearch] = React.useState(false);

  // Login popup states
  const [openLogin, setOpenLogin] = React.useState(false);
  const [mobile, setMobile] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [step, setStep] = React.useState(1);
  const [error, setError] = React.useState('');
  const [accepted, setAccepted] = React.useState(false);
  const [successMessage, setSuccessMessage] = React.useState('');

  // Logged-in user state
  const [user, setUser] = React.useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  const handleMenuItemClick = () => {
    handleCloseNavMenu();
    setShowSearch(false);
    setSearchText('');
  };

  const handleSendOTP = () => {
    if (!mobile || mobile.length !== 10) {
      setError('Please enter valid 10-digit mobile number');
      return;
    }
    if (!accepted) {
      setError('Please accept Privacy Policy & T&Cs');
      return;
    }
    setError('');
    setStep(2); // In real app → send OTP via API
  };

  const handleVerifyOTP = () => {
    if (!otp || otp.length !== 6) {
      setError('Please enter 6-digit OTP');
      return;
    }
    setError('');

    // Mock success (in real app → verify OTP with backend)
    const userData = { mobile: `+91${mobile}`, name: `User${mobile.slice(-4)}` };
    localStorage.setItem('loggedInUser', JSON.stringify(userData));
    setUser(userData);

    setSuccessMessage('User logged in successfully!');
    setTimeout(() => {
      setSuccessMessage('');
      handleCloseLogin();
    }, 2000); // Show message for 2 seconds
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
    if (anchorElNav) handleCloseNavMenu();
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
    setTimeout(() => {
      setStep(1);
      setMobile('');
      setOtp('');
      setError('');
      setAccepted(false);
    }, 300);
  };
 

  // header 

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(90deg, #3a0936ff, #142d36ff, #3a0936ff)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 70 } }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', mr: { xs: 1, sm: 2 } }}>
              <Link to="/">
                <img
                  src={logo}
                  alt="STEPX Logo"
                  style={{ width: 130, height: 70, objectFit: 'contain', cursor: 'pointer' }}
                />
              </Link>
            </Box>

            {/* Mobile menu icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton color="inherit" onClick={handleOpenNavMenu}>
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile menu */}
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleMenuItemClick}>
                  <Link to={page.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {user ? (
                <MenuItem onClick={() => { handleLogout(); handleMenuItemClick(); }}>
                  <Typography>Logout</Typography>
                </MenuItem>
              ) : (
                <MenuItem onClick={() => { handleMenuItemClick(); setOpenLogin(true); }}>
                  <Typography>Login</Typography>
                </MenuItem>
              )}
            </Menu>

            {/* Desktop nav */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: 3 }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  sx={{ color: 'white', '&:hover': { backgroundColor: '#68236aff' } }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Icons + Login/Logout proccess */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1.5 } }}>
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
                  sx={{ bgcolor: 'white', borderRadius: 2, width: 200, display: { xs: 'none', sm: 'block' } }}
                />
              )}

              <IconButton color="inherit"><FavoriteBorderIcon /></IconButton>
              <IconButton color="inherit"><ShoppingCartIcon /></IconButton>

              {user ? (
                // show user info + logout
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                 
                  <Button
                    variant="outlined"
                    startIcon={<LogoutIcon />}
                    onClick={handleLogout}
                    sx={{
                      display: { xs: 'none', md: 'flex' },
                      color: '#ff9800',
                      borderColor: '#ff9800',
                      '&:hover': { borderColor: '#fb8c00', backgroundColor: 'rgba(255,152,0,0.1)' },
                      textTransform: 'none',
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              ) : (
                // Not login → Login button
                <Button
                  variant="outlined"
                  startIcon={<LoginIcon />}
                  onClick={() => setOpenLogin(true)}
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    color: '#b3d4fc',
                    borderColor: '#68236a',
                    '&:hover': { borderColor: '#8e3a8f', backgroundColor: 'rgba(104,35,106,0.15)' },
                    textTransform: 'none',
                  }}
                >
                  Login
                </Button>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Login Proccess popup */}
      {openLogin && (
        <Box
          onClick={handleCloseLogin}
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.7)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: 2,
          }}
        >
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              width: { xs: '100%', sm: 460 },
              maxHeight: '90vh',
              overflowY: 'auto',
              bgcolor: '#ffffff',
              borderRadius: 2,
              boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
              position: 'relative',
              color: '#333',
            }}
          >
            <IconButton onClick={handleCloseLogin} sx={{ position: 'absolute', top: 8, right: 8, color: '#555' }}>
              <CloseIcon />
            </IconButton>

            <Box sx={{ p: { xs: 3, sm: 4 }, pt: 5 }}>
              <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#3a0936', mb: 1 }}>
                Stepx
              </Typography>
              <Typography variant="h6" align="center" sx={{ color: '#555', mb: 3 }}>
                Login / Sign Up
              </Typography>

              {successMessage ? (
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ color: 'green', fontWeight: 'bold', my: 4 }}
                >
                  {successMessage}
                </Typography>
              ) : step === 1 ? (
                <>
                  <Typography variant="body1" align="center" sx={{ mb: 3, color: '#444' }}>
                    Login now to avail best offers!
                  </Typography>

                  <TextField
                    fullWidth
                    placeholder="Enter Mobile Number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    InputProps={{
                      startAdornment: <Typography sx={{ color: '#3a0936', mr: 1, fontWeight: 500 }}>+91</Typography>,
                    }}
                    variant="outlined"
                    sx={{ mb: 2, '& .MuiOutlinedInput-root': { borderRadius: 1.5, bgcolor: '#f9f9f9' } }}
                  />

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <input
                      type="checkbox"
                      checked={accepted}
                      onChange={(e) => setAccepted(e.target.checked)}
                      style={{ marginRight: 8 }}
                    />
                    <Typography variant="body2" sx={{ color: '#555' }}>
                      I accept that I have read & understood your{' '}
                      <span style={{ color: '#68236a', cursor: 'pointer' }}>Privacy Policy</span> and{' '}
                      <span style={{ color: '#68236a', cursor: 'pointer' }}>T&Cs</span>.
                    </Typography>
                  </Box>

                  {error && <Typography color="error" align="center" sx={{ mb: 2 }}>{error}</Typography>}

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleSendOTP}
                    sx={{
                      bgcolor: '#68236a',
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderRadius: 1.5,
                      textTransform: 'none',
                      '&:hover': { bgcolor: '#8e3a8f' },
                    }}
                  >
                    Continue
                  </Button>
                </>
              ) : (
                <>
                  <Typography variant="body1" align="center" sx={{ mb: 3 }}>
                    Enter OTP sent to +91 {mobile}
                  </Typography>

                  <TextField
                    fullWidth
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    variant="outlined"
                    sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: 1.5, bgcolor: '#f9f9f9' } }}
                  />

                  {error && <Typography color="error" align="center" sx={{ mb: 2 }}>{error}</Typography>}

                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleVerifyOTP}
                    sx={{
                      bgcolor: '#68236a',
                      py: 1.5,
                      fontSize: '1.1rem',
                      borderRadius: 1.5,
                      textTransform: 'none',
                      '&:hover': { bgcolor: '#8e3a8f' },
                    }}
                  >
                    Verify & Login
                  </Button>

                  <Button
                    fullWidth
                    variant="text"
                    onClick={() => setStep(1)}
                    sx={{ mt: 2, color: '#68236a', textTransform: 'none' }}
                  >
                    Change Number
                  </Button>
                </>
              )}

              {/* Benefit cards */}
              <Box sx={{ mt: 5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
                {[
                  { title: 'Customer-first', desc: 'Putting you in the center' },
                  { title: 'Transparent', desc: 'Honest from the inside out' },
                  { title: 'Innovative', desc: 'Getting the absolute best for you' },
                ].map((item, i) => (
                  <Box
                    key={i}
                    sx={{ flex: 1, p: 2, border: '1px solid #ddd', borderRadius: 2, textAlign: 'center', bgcolor: '#f8f8f8' }}
                  >
                    <StarIcon sx={{ color: '#f4c430', fontSize: 32, mb: 1 }} />
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ color: '#3a0936' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', mt: 0.5 }}>
                      {item.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Header;