import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

const locations = [
  { city: 'Mumbai', region: 'Maharashtra', color: '#2563EB' },
  { city: 'Pune', region: 'Maharashtra', color: '#9333EA' },
  { city: 'Bangalore', region: 'Karnataka', color: '#059669' },
  { city: 'Delhi', region: 'National Capital Region', color: '#D97706' },
  { city: 'Gurgaon', region: 'Haryana', color: '#E11D48' },
  { city: 'Chandigarh', region: 'Chandigarh', color: '#0891B2' },
];

export default function Locations() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="locations"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.paper',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.85rem' }}
          >
            Where We Work
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 800, color: 'text.primary' }}>
            Serving Businesses Across India
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 560, mx: 'auto', lineHeight: 1.7, fontSize: '1.05rem' }}
          >
            Local insight, ambitious strategy, and measurable digital growth for brands in every market we serve.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {locations.map((location) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={location.city}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  p: 2.5,
                  height: '100%',
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.divider}`,
                  background: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    borderColor: `${location.color}55`,
                    boxShadow: isDark
                      ? `0 16px 30px rgba(0,0,0,0.25), 0 0 0 1px ${location.color}22`
                      : `0 14px 28px -10px rgba(15, 23, 42, 0.16), 0 0 0 1px ${location.color}22`,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    color: location.color,
                    background: `${location.color}14`,
                  }}
                >
                  <LocationCityIcon />
                </Box>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.2 }}>
                    {location.city}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.5 }}>
                    {location.region}
                  </Typography>
                </Box>
                <ArrowForwardIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}