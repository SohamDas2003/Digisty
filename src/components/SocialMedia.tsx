import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import RedditIcon from '@mui/icons-material/Reddit';
import { useTheme } from '@mui/material/styles';

const platforms = [
  {
    name: 'Facebook',
    icon: <FacebookIcon sx={{ fontSize: 34 }} />,
    color: '#1877F2',
    description: 'Reach 3B+ users with targeted ads and organic community building.',
    stat: '2.9B+ Users',
  },
  {
    name: 'Instagram',
    icon: <InstagramIcon sx={{ fontSize: 34 }} />,
    color: '#E1306C',
    description: 'Showcase your brand through stunning visuals, Reels, and Stories.',
    stat: '2B+ Users',
  },
  {
    name: 'LinkedIn',
    icon: <LinkedInIcon sx={{ fontSize: 34 }} />,
    color: '#0A66C2',
    description: 'Connect with decision-makers and grow B2B leads at scale.',
    stat: '950M+ Users',
  },
  {
    name: 'X (Twitter)',
    icon: <TwitterIcon sx={{ fontSize: 34 }} />,
    color: '#1DA1F2',
    description: 'Join real-time conversations and build brand authority.',
    stat: '550M+ Users',
  },
  {
    name: 'YouTube',
    icon: <YouTubeIcon sx={{ fontSize: 34 }} />,
    color: '#FF0000',
    description: 'Drive engagement with video content and pre-roll advertising.',
    stat: '2.7B+ Users',
  },
  {
    name: 'Pinterest',
    icon: <PinterestIcon sx={{ fontSize: 34 }} />,
    color: '#E60023',
    description: 'Inspire purchase decisions with visual discovery content.',
    stat: '465M+ Users',
  },
  {
    name: 'WhatsApp',
    icon: <WhatsAppIcon sx={{ fontSize: 34 }} />,
    color: '#25D366',
    description: 'Engage customers directly with WhatsApp Business campaigns.',
    stat: '2B+ Users',
  },
  {
    name: 'Telegram',
    icon: <TelegramIcon sx={{ fontSize: 34 }} />,
    color: '#26A5E4',
    description: 'Build loyal communities and automate customer communication.',
    stat: '900M+ Users',
  },
  {
    name: 'Reddit',
    icon: <RedditIcon sx={{ fontSize: 34 }} />,
    color: '#FF4500',
    description: 'Tap into niche communities with authentic engagement and ads.',
    stat: '850M+ Users',
  },
];

export default function SocialMedia() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="social"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(168,85,247,0.07) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(147,51,234,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'secondary.main',
              fontWeight: 700,
              letterSpacing: '0.12em',
              fontSize: '0.85rem',
            }}
          >
            Platforms We Master
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 800, color: 'text.primary' }}>
            Every Platform, One Strategy
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 540, mx: 'auto', lineHeight: 1.7, fontSize: '1.05rem' }}
          >
            We manage your brand presence across all major social networks, delivering
            consistent messaging and measurable growth wherever your audience lives.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {platforms.map((platform) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={platform.name}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  background: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                  border: isDark
                    ? '1px solid rgba(255,255,255,0.07)'
                    : `1px solid ${theme.palette.divider}`,
                  borderRadius: 3.5,
                  boxShadow: isDark ? 'none' : '0 2px 10px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  '&:hover': {
                    background: isDark ? `${platform.color}0D` : '#FFFFFF',
                    borderColor: isDark ? `${platform.color}40` : `${platform.color}60`,
                    transform: 'translateY(-4px)',
                    boxShadow: isDark
                      ? '0 16px 40px rgba(0,0,0,0.25)'
                      : `0 16px 32px -4px rgba(15, 23, 42, 0.08), 0 0 0 1px ${platform.color}30`,
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      borderRadius: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: `${platform.color}14`,
                      color: platform.color,
                      flexShrink: 0,
                    }}
                  >
                    {platform.icon}
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2, color: 'text.primary' }}>
                      {platform.name}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: platform.color, fontWeight: 700, fontSize: '0.8rem' }}
                    >
                      {platform.stat}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, fontSize: '0.925rem' }}>
                  {platform.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
