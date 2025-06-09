import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../images/logo.png';

const pages = ['Home', 'Services', 'About Us', 'Videos', 'Testimonial', 'Contact Us'];

function ResponsiveAppBar({ hasImage }) {
  const [scrolled, setScrolled] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 56) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to handle navigation using call by ID
  const handleNavigateById = (page) => {
    let id;
    switch (page) {
      case 'About Us':
        id = 'aboutus';
        break;
      case 'Testimonial':
        id = 'testimonial';
        break;
      case 'Contact Us':
        id = 'contactus';
        break;
      case 'Services':
        id = 'services';
        break;
      case 'Videos':
          id = 'videos';
          break; 
      default:
        return;
    }   

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      handleCloseNavMenu(); // Close the menu after navigation
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: hasImage ? (scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent') : 'rgba(0, 0, 0, 0.85)',
        backdropFilter: hasImage ? (scrolled ? 'blur(10px)' : 'none') : 'blur(10px)',
        transition: 'all 0.3s ease-in-out',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 2, alignItems: 'center' }}>
            <img src={logo} alt="Vidya Events Logo" style={{ height: '50px', marginRight: '10px' }} />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Vidya Events
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          
          {/* Mobile menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={() => {
                  if (page === 'Home') {
                    window.location.href = '/';
                  } else {
                    handleNavigateById(page);
                  }
                  handleCloseNavMenu();
                }}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* Logo for mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, alignItems: 'center' }}>
            <img src={logo} alt="Vidya Events Logo" style={{ height: '40px', marginRight: '10px' }} />
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: '"Playfair Display", serif',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Vidya Events
          </Typography>
          
          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if (page === 'Home') {
                    window.location.href = '/';
                  } else {
                    handleNavigateById(page);
                  }
                }}
                sx={{ 
                  mx: 1,
                  my: 2, 
                  color: 'white', 
                  display: 'block',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    '&::after': {
                      width: '100%',
                    }
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '0%',
                    height: '2px',
                    backgroundColor: '#FF8F00',
                    transition: 'width 0.3s ease'
                  }
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;