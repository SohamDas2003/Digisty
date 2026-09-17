import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import SearchIcon from '@mui/icons-material/Search';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { useTheme } from '@mui/material/styles';

const services = [
  {
    icon: <SearchIcon sx={{ fontSize: 32 }} />,
    title: 'SEO Optimization',
    description:
      'Dominate search rankings with proven on-page, off-page, and technical SEO strategies that drive organic growth.',
    color: '#2563EB',
  },
  {
    icon: <CampaignIcon sx={{ fontSize: 32 }} />,
    title: 'Social Media Marketing',
    description:
      'Engage your audience across every platform with compelling content strategies and community management.',
    color: '#9333EA',
  },
  {
    icon: <ShowChartIcon sx={{ fontSize: 32 }} />,
    title: 'Paid Advertising (PPC)',
    description:
      'Maximize ROI with precision-targeted Google Ads, Meta Ads, and LinkedIn campaigns that convert.',
    color: '#059669',
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 32 }} />,
    title: 'Content Marketing',
    description:
      'Build authority with high-impact blogs, videos, infographics, and brand stories that resonate.',
    color: '#D97706',
  },
  {
    icon: <EmailIcon sx={{ fontSize: 32 }} />,
    title: 'Email Marketing',
    description:
      'Nurture leads and retain customers with automated, personalized email journeys that deliver results.',
    color: '#E11D48',
  },
  {
    icon: <AnalyticsIcon sx={{ fontSize: 32 }} />,
    title: 'Analytics & Reporting',
    description:
      'Gain clear insight into campaign performance with custom dashboards and actionable monthly reports.',
    color: '#0891B2',
  },
];

export default function Services() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1,
          height: 1,
          background: isDark
            ? 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: '0.12em', fontSize: '0.85rem' }}
          >
            What We Do
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 800, color: 'text.primary' }}>
            Full-Spectrum Digital Services
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 540, mx: 'auto', lineHeight: 1.7, fontSize: '1.05rem' }}
          >
            From search to social, we deliver integrated digital marketing solutions
            tailored to your business goals.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {services.map((service) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={service.title}>
              <Card
                sx={{
                  height: '100%',
                  p: 1.5,
                  borderRadius: 3.5,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  border: `1px solid ${theme.palette.divider}`,
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: `${service.color}50`,
                    boxShadow: isDark
                      ? `0 20px 40px rgba(0,0,0,0.35), 0 0 0 1px ${service.color}22`
                      : `0 20px 35px -10px rgba(15, 23, 42, 0.08), 0 0 0 1px ${service.color}33`,
                  },
                }}
              >
                <CardContent sx={{ p: 2.5 }}>
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: 2.5,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                      background: `${service.color}14`,
                      color: service.color,
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700, color: 'text.primary' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.925rem' }}>
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
