import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  IconButton,
  Typography,
  Divider,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkMode from '@mui/icons-material/DarkMode';
import LightMode from '@mui/icons-material/LightMode';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CodeIcon from '@mui/icons-material/Code';
import { useThemeToggle } from '../../context/ThemeContext';

const drawerWidth = 240;

const manualRoutes = {
  "Home": [
    { label: "Home", path: "/", icon: <MenuIcon sx={{ fontSize: 18, mr: 1, color: '#888' }} /> },
    { label: "QuickStart", path: "/quickstart", icon: <RocketLaunchIcon sx={{ fontSize: 18, mr: 1, color: '#888' }} /> },
    { label: "Under the Hood", path: "/under-the-hood", icon: <BuildCircleIcon sx={{ fontSize: 18, mr: 1, color: '#888' }} /> },
    { label: "Source Code Docs", path: "https://docs.netget.me", external: true, icon: <CodeIcon sx={{ fontSize: 18, mr: 1, color: '#888' }} /> },
    { label: "About neurons.me", path: "https://neurons.me", external: true, icon: (
      <img
        src="/neurons-grey.png"
        alt="neurons.me icon"
        style={{
          width: 24,
          height: 24,
          marginRight: 8,
          filter: (typeof theme !== "undefined" && theme.palette && theme.palette.mode === 'dark') ? 'invert(1)' : 'none'
        }}
      />
    ) }
  ]
};

export default function NavBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState('Home');
  const navigate = useNavigate();
  const location = useLocation();

  const { isDarkMode, toggleTheme } = useThemeToggle();

  React.useEffect(() => {
    setSelectedSection('Home');
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ mt: { xs: 1, md: 0 } }}>
      <Box sx={{ px: 1.2, py: 3.2, mt: -0 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="section-select-label">Section</InputLabel>
          <Select
            labelId="section-select-label"
            id="section-select"
            value={selectedSection}
            label="Section"
            onChange={(e) => {
              const section = e.target.value;
              if (section === 'neurons.me') {
                window.open('https://www.neurons.me', '_blank');
                return; // Do not update selectedSection or navigate
              }
              setSelectedSection(section);
              if (section === 'Home') {
                navigate('/');
              }
            }}
          >
            <MenuItem value="Home">Home</MenuItem>
            <MenuItem value="neurons.me">neurons.me</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Divider />

      <List>
        {(manualRoutes[selectedSection] || []).map(({ label, path, icon, external }) => (
          external ? (
            <ListItemButton
              key={label}
              component="a"
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                '& .MuiListItemText-primary': {
                  color: theme.palette.text.primary,
                }
              }}
            >
              {icon}
              <ListItemText primary={label} />
            </ListItemButton>
          ) : (
            <ListItemButton
              key={label}
              component={Link}
              to={path}
              selected={location.pathname === path}
              sx={{
                '& .MuiListItemText-primary': {
                  color: location.pathname === path ? 'rgb(0,154,137)' : theme.palette.text.primary,
                  fontWeight: location.pathname === path ? 500 : 400,
                }
              }}
            >
              {icon}
              <ListItemText primary={label} />
            </ListItemButton>
          )
        ))}
      </List>
    </Box>
  );

  return (
      <Box sx={{ display: 'flex' }}>
        {/* Top AppBar */}
        <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : theme.palette.background.paper,
          borderBottom: `1px solid ${theme.custom.border}`,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar variant="dense">
        {isMobile && (
        <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2 }}
       >
      <MenuIcon sx={{ color: theme.palette.icon.main }} />
      </IconButton>
      )}
    <Link to="/" style={{ textDecoration: 'none', flexGrow: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="/neurons.me.png"
          alt="neurons.me logo"
          style={{ height: 32, marginRight: 5 }}
        />
        <Typography variant="h6" noWrap component="div" sx={{ color: theme.palette.text.primary }}>
          NetGet
        </Typography>
      </Box>
    </Link>
    <IconButton onClick={toggleTheme} sx={{ color: theme.palette.icon.main }}>
      {theme.palette.mode === 'dark' ? <DarkMode /> : <LightMode />}
    </IconButton>
      </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Temporary drawer for mobile */}
        {isMobile && (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                mt: 6,
              },
            }}
          >
            {drawer}
          </Drawer>
        )}

        {/* Permanent drawer for desktop */}
        {!isMobile && (
          <Drawer
            variant="permanent"
            open
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { width: drawerWidth, top: 48 },
            }}
          >
            {drawer}
          </Drawer>
        )}
      </Box>
    </Box>
  );
}