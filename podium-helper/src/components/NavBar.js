import React from 'react'
import {Typography, IconButton, MenuItem, Menu, Box, Toolbar, AppBar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SRO from '../images/SRO.jpg';
import '../Styling/navBar.scss';
import { useNavigate, Link } from 'react-router-dom';


const pages = [
  {
    name: 'Competitors',
    action: '/competitors'
  },
  {
    name: 'New Podium',
    action: '/'
  },
  {
    name: 'Result History',
    action: '/results'
  },
  {
    name: 'Manage Entries',
    action: '/entry-dashboard'
  },
]
function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.target);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handlePath = (path) => {
    handleCloseNavMenu();
    navigate(path);
  }

  return (
    <div className="nav-bar">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{bgcolor: '#FF0000'}}>
        {/* <a onClick={() => navigate('/Competitors')}>Competitors</a> */}
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenNavMenu}
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
                <MenuItem key={page.name} onClick={() => handlePath(page.action)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          <a className='img-container' href="https://www.sro-america.com/">
            <img src={SRO} alt="SRO" />
          </a>
          <Link to='/'>New Podium</Link>
          <Link to='/Competitors'>Competitors</Link>
          <Link to='/Results'>Results</Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar
