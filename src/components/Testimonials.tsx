import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';
import { useTheme } from '@mui/material/styles';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'CEO, TechNova Solutions',
    initials: 'SM',
    color: '#2563EB',
    rating: 5,
    quote:
      'Digisty Technologies transformed our digital presence completely. Our organic traffic tripled within six months and leads are at an all-time high.',
  },
  {
    name: 'James Okonkwo',
    role: 'Marketing Director, Apex Retail',
    initials: 'JO',
    color: '#9333EA',
    rating: 5,
    quote:
      "The team's strategic approach to paid ads delivered a 4.2x ROAS in our first quarter. They are true experts who understand performance marketing.",
  },
  {
    name: 'Priya Sharma',
    role: 'Founder, LuminaBrand',
    initials: 'PS',
    color: '#059669',
    rating: 5,
    quote:
      'From content strategy to social media management, Digisty Technologies handles everything seamlessly. Our brand awareness has never been stronger.',
  },
];

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.paper',
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
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
            Client Stories
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 800, color: 'text.primary' }}>
            Trusted by Growing Brands
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {testimonials.map((t) => (
            <Grid size={{ xs: 12, md: 4 }} key={t.name}>
              <Card
                sx={{
                  height: '100%',
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 3.5,
                  border: `1px solid ${theme.palette.divider}`,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Rating value={t.rating} readOnly size="small" sx={{ mb: 2.5 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.75,
                      mb: 3,
                      fontStyle: 'italic',
                      fontSize: '0.975rem',
                    }}
                  >
                    "{t.quote}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 'auto' }}>
                    <Avatar sx={{ bgcolor: t.color, fontWeight: 700, width: 44, height: 44, color: '#FFFFFF' }}>
                      {t.initials}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
