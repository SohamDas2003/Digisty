import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const stats = [
  { value: '$42M+', label: 'Revenue Generated', sub: 'for our clients' },
  { value: '500+', label: 'Campaigns Launched', sub: 'across all channels' },
  { value: '3.8x', label: 'Average ROAS', sub: 'return on ad spend' },
  { value: '98%', label: 'Client Retention', sub: 'year over year' },
];

export default function Results() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="results"
      sx={{
        py: { xs: 10, md: 14 },
        background: isDark
          ? 'linear-gradient(135deg, #0D1B3E 0%, #1A0B3D 100%)'
          : 'linear-gradient(135deg, #EEF2FF 0%, #F5F3FF 50%, #FAF5FF 100%)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${theme.palette.divider}`,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/analytics-img.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: isDark ? 0.12 : 0.04,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(59,130,246,0.1) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              letterSpacing: '0.12em',
              fontSize: '0.85rem',
            }}
          >
            Our Impact
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 800, color: 'text.primary' }}>
            Numbers That Speak
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.secondary',
              maxWidth: 500,
              mx: 'auto',
              fontSize: '1.05rem',
            }}
          >
            Real results for real businesses. Here's what we've achieved for our clients.
          </Typography>
        </Box>

        <Grid container spacing={3.5} justifyContent="center">
          {stats.map((stat) => (
            <Grid size={{ xs: 6, md: 3 }} key={stat.label}>
              <Box
                sx={{
                  textAlign: 'center',
                  p: 3.5,
                  borderRadius: 3.5,
                  background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.85)',
                  border: isDark
                    ? '1px solid rgba(255,255,255,0.1)'
                    : '1px solid rgba(37,99,235,0.14)',
                  boxShadow: isDark ? 'none' : '0 10px 30px -4px rgba(99,102,241,0.08)',
                  backdropFilter: 'blur(12px)',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: isDark
                      ? '0 15px 30px rgba(0,0,0,0.3)'
                      : '0 16px 36px -6px rgba(99,102,241,0.15)',
                  },
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #2563EB, #9333EA)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    lineHeight: 1.1,
                    mb: 1,
                    fontSize: { xs: '2.25rem', md: '3rem' },
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 700, mb: 0.5, color: 'text.primary' }}
                >
                  {stat.label}
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  {stat.sub}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
