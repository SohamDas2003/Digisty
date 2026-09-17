import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../ThemeContext';

const navLinks = ['Services', 'About', 'Locations', 'Results', 'Social', 'Contact'];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 40 });
  const theme = useTheme();
  const { mode, toggleColorMode } = useColorMode();
  const isDark = mode === 'dark';

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? isDark
              ? 'rgba(10, 15, 30, 0.92)'
              : 'rgba(255, 255, 255, 0.88)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? `1px solid ${theme.palette.divider}` : 'none',
          boxShadow:
            scrolled && !isDark ? '0 4px 20px -2px rgba(15, 23, 42, 0.06)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                flexGrow: 1,
                textDecoration: 'none',
              }}
            >
              <Box
                component="img"
                src="/logo.png"
                alt="Digisty Technologies"
                sx={{
                  width: { xs: 190, sm: 220 },
                  height: 'auto',
                  display: 'block',
                }}
              />
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
              {navLinks.map((link) => (
                <Button
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  sx={{
                    color: 'text.secondary',
                    fontWeight: 500,
                    px: 1.8,
                    '&:hover': {
                      color: 'primary.main',
                      backgroundColor: isDark
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(37, 99, 235, 0.06)',
                    },
                    fontSize: '0.9rem',
                  }}
                >
                  {link}
                </Button>
              ))}

              <Tooltip title={isDark ? 'Switch to Light theme' : 'Switch to Dark theme'}>
                <IconButton
                  onClick={toggleColorMode}
                  sx={{
                    ml: 1,
                    color: 'text.primary',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    p: 1,
                    '&:hover': {
                      bgcolor: isDark
                        ? 'rgba(255, 255, 255, 0.08)'
                        : 'rgba(15, 23, 42, 0.05)',
                    },
                  }}
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <LightModeOutlinedIcon sx={{ fontSize: 20, color: '#FBBF24' }} />
                  ) : (
                    <DarkModeOutlinedIcon sx={{ fontSize: 20, color: '#475569' }} />
                  )}
                </IconButton>
              </Tooltip>

              <Button
                variant="contained"
                href="#contact"
                sx={{
                  ml: 1.5,
                  fontWeight: 600,
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                }}
              >
                Get Started
              </Button>
            </Box>

            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
              <IconButton
                onClick={toggleColorMode}
                sx={{
                  color: 'text.primary',
                  border: `1px solid ${theme.palette.divider}`,
                  p: 0.8,
                }}
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <LightModeOutlinedIcon sx={{ fontSize: 20, color: '#FBBF24' }} />
                ) : (
                  <DarkModeOutlinedIcon sx={{ fontSize: 20, color: '#475569' }} />
                )}
              </IconButton>
              <IconButton
                sx={{ color: 'text.primary' }}
                onClick={() => setDrawerOpen(true)}
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { width: 290, bgcolor: 'background.paper', pt: 2 },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2.5, pb: 2 }}>
          <Box
            component="img"
            src="/logo.png"
            alt="Digisty Technologies"
            sx={{ width: 180, height: 'auto', display: 'block' }}
          />
          <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List sx={{ px: 1.5, py: 2 }}>
          {navLinks.map((link) => (
            <ListItem key={link} disablePadding sx={{ mb: 0.5 }}>
              <ListItemButton
                href={`#${link.toLowerCase()}`}
                onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText
                  primary={link}
                  primaryTypographyProps={{ fontWeight: 600, fontSize: '0.95rem' }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ px: 2.5, pt: 2 }}>
          <Button
            variant="contained"
            fullWidth
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            sx={{ py: 1.2 }}
          >
            Get Started
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
