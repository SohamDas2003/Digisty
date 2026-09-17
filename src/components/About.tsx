import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';

const highlights = [
  'Data-driven strategy for every campaign',
  'Dedicated account manager assigned to you',
  'Transparent weekly and monthly reporting',
  'Proven results across 15+ industries',
  'Agile team that adapts to your growth',
  'Full-funnel approach from awareness to conversion',
];

export default function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: -100,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(147,51,234,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: isDark
                  ? '0 40px 80px rgba(0,0,0,0.4)'
                  : '0 25px 50px -12px rgba(15, 23, 42, 0.15)',
                border: `1px solid ${theme.palette.divider}`,
              }}
            >
              <Box
                component="img"
                src="/team-img.webp"
                alt="Digisty Technologies Team"
                sx={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  bgcolor: isDark ? 'rgba(10,15,30,0.9)' : 'rgba(255,255,255,0.92)',
                  backdropFilter: 'blur(12px)',
                  border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(15,23,42,0.08)',
                  boxShadow: isDark ? 'none' : '0 10px 30px rgba(15, 23, 42, 0.1)',
                  borderRadius: 2.5,
                  px: 2.5,
                  py: 1.5,
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 800, color: 'primary.main' }}>
                  10+ Years
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Of Digital Excellence
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.85rem' }}
            >
              About Us
            </Typography>
            <Typography variant="h2" sx={{ mt: 1, mb: 3, fontWeight: 800, color: 'text.primary' }}>
              We Don't Just Market—
              <br />
              We Deliver Results
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 4, fontSize: '1.05rem' }}
            >
              Digisty Technologies is a performance-first digital marketing and business growth agency. We combine creative
              strategy with analytical rigor to help businesses of all sizes grow their online
              presence, capture qualified leads, and maximize return on marketing investment.
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
              {['Google Partner', 'Meta Certified', 'HubSpot Expert', 'Clutch Top Agency'].map(
                (badge) => (
                  <Chip
                    key={badge}
                    label={badge}
                    size="small"
                    sx={{
                      background: isDark ? 'rgba(59,130,246,0.1)' : 'rgba(37,99,235,0.08)',
                      border: isDark ? '1px solid rgba(59,130,246,0.25)' : '1px solid rgba(37,99,235,0.2)',
                      color: isDark ? 'primary.light' : 'primary.main',
                      fontWeight: 600,
                      py: 1.8,
                      px: 0.5,
                    }}
                  />
                ),
              )}
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {highlights.map((item) => (
                <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                  <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 22, mt: 0.2, flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
