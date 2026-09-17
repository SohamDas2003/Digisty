import { createTheme, responsiveFontSizes, type Theme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark'): Theme => {
  const isDark = mode === 'dark';

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#3B82F6' : '#2563EB',
        light: '#60A5FA',
        dark: '#1D4ED8',
      },
      secondary: {
        main: isDark ? '#A855F7' : '#9333EA',
        light: '#C084FC',
        dark: '#7E22CE',
      },
      background: {
        default: isDark ? '#0A0F1E' : '#F8FAFC',
        paper: isDark ? '#111827' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#F9FAFB' : '#0F172A',
        secondary: isDark ? '#9CA3AF' : '#475569',
      },
      divider: isDark ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.08)',
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontWeight: 800, letterSpacing: '-0.02em' },
      h2: { fontWeight: 700, letterSpacing: '-0.01em' },
      h3: { fontWeight: 700 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 600 },
      h6: { fontWeight: 600 },
      button: { fontWeight: 600, textTransform: 'none', letterSpacing: '0.02em' },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280, // 7xl width standard (1280px / 80rem)
        xl: 1440,
      },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
        styleOverrides: {
          root: {
            paddingLeft: '20px',
            paddingRight: '20px',
            '@media (min-width: 600px)': {
              paddingLeft: '32px',
              paddingRight: '32px',
            },
          },
          maxWidthLg: {
            maxWidth: '1280px !important',
          },
          maxWidthXl: {
            maxWidth: '1280px !important',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
          },
        },
      },
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 8, padding: '10px 24px' },
          containedPrimary: {
            background: 'linear-gradient(135deg, #2563EB 0%, #6366F1 100%)',
            color: '#FFFFFF',
            '&:hover': {
              background: 'linear-gradient(135deg, #1D4ED8 0%, #4F46E5 100%)',
            },
          },
          outlined: {
            borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.18)',
            color: isDark ? '#F9FAFB' : '#0F172A',
            '&:hover': {
              borderColor: isDark ? '#3B82F6' : '#2563EB',
              backgroundColor: isDark ? 'rgba(59,130,246,0.08)' : 'rgba(37,99,235,0.06)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            background: isDark ? 'rgba(255,255,255,0.04)' : '#FFFFFF',
            backdropFilter: isDark ? 'blur(12px)' : 'none',
            border: isDark ? '1px solid rgba(255,255,255,0.08)' : '1px solid #E2E8F0',
            boxShadow: isDark
              ? 'none'
              : '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
            borderRadius: 16,
          },
        },
      },
    },
  });

  return responsiveFontSizes(theme);
};

// Default theme is now light
const defaultTheme = getTheme('light');
export default defaultTheme;
