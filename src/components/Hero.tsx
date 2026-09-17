import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';

const stats = [
  { icon: <TrendingUpIcon sx={{ fontSize: 20 }} />, value: '500+', label: 'Campaigns' },
  { icon: <PeopleIcon sx={{ fontSize: 20 }} />, value: '200+', label: 'Clients' },
  { icon: <StarIcon sx={{ fontSize: 20 }} />, value: '98%', label: 'Satisfaction' },
];

export default function Hero() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="hero"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        pt: { xs: 12, md: 0 },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: isDark ? 'url(/hero-bg.webp)' : 'url(/hero-bg-light.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: isDark
              ? 'linear-gradient(135deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.75) 60%, rgba(10,15,30,0.88) 100%)'
              : 'linear-gradient(90deg, rgba(248,250,252,0.70) 0%, rgba(248,250,252,0.35) 45%, rgba(255,255,255,0.02) 100%)',
          },
        }}
      />

      {/* Decorative ambient glow orbs */}
      <Box
        sx={{
          position: 'absolute',
          width: 640,
          height: 640,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
          top: '-10%',
          left: '-5%',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 550,
          height: 550,
          borderRadius: '50%',
          background: isDark
            ? 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(147,51,234,0.10) 0%, transparent 70%)',
          bottom: '-5%',
          right: '8%',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 10, md: 16 } }}>
        <Box sx={{ maxWidth: 740 }}>
          <Chip
            label="Award-Winning Digital Agency"
            size="small"
            sx={{
              mb: 3,
              background: isDark ? 'rgba(59,130,246,0.15)' : 'rgba(37,99,235,0.08)',
              border: isDark
                ? '1px solid rgba(59,130,246,0.3)'
                : '1px solid rgba(37,99,235,0.2)',
              color: isDark ? 'primary.light' : 'primary.main',
              fontWeight: 700,
              fontSize: '0.8rem',
              py: 2,
              px: 1,
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.75rem', md: '4.75rem' },
              fontWeight: 800,
              color: 'text.primary',
              mb: 3,
              lineHeight: 1.08,
            }}
          >
            Elevate Your Business{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #2563EB, #9333EA)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              with Digisty Technologies
            </Box>
          </Typography>

          <Typography
            variant="h5"
            sx={{
              color: 'text.secondary',
              mb: 5,
              fontWeight: 400,
              lineHeight: 1.65,
              maxWidth: 580,
              fontSize: { xs: '1.05rem', md: '1.25rem' },
            }}
          >
            We craft data-driven digital marketing strategies that grow your audience,
            boost conversions, and build lasting brand authority.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 8 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              href="#contact"
              sx={{
                fontSize: '1rem',
                py: 1.6,
                px: 4,
                boxShadow: '0 4px 16px rgba(37, 99, 235, 0.35)',
              }}
            >
              Start Your Campaign
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<PlayCircleOutlineIcon />}
              href="#services"
              sx={{
                fontSize: '1rem',
                py: 1.6,
                px: 4,
                borderColor: isDark ? 'rgba(255,255,255,0.2)' : 'rgba(15,23,42,0.18)',
                color: 'text.primary',
                '&:hover': {
                  borderColor: 'primary.main',
                  bgcolor: isDark ? 'rgba(59,130,246,0.08)' : 'rgba(37,99,235,0.05)',
                },
              }}
            >
              See Our Work
            </Button>
          </Stack>

          <Stack direction="row" spacing={{ xs: 3, sm: 5 }} flexWrap="wrap" useFlexGap>
            {stats.map((s) => (
              <Box key={s.label} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isDark ? 'rgba(59,130,246,0.15)' : 'rgba(37,99,235,0.08)',
                    color: 'primary.main',
                  }}
                >
                  {s.icon}
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ lineHeight: 1.1, fontWeight: 800, color: 'text.primary' }}
                  >
                    {s.value}
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                    {s.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
