import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Alert from '@mui/material/Alert';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

const contactInfo = [
  {
    icon: <EmailOutlinedIcon sx={{ color: 'primary.main', fontSize: 24 }} />,
    label: 'Email Us',
    value: 'info@digisty.in',
  },
  {
    icon: <PhoneOutlinedIcon sx={{ color: 'primary.main', fontSize: 24 }} />,
    label: 'Call Us',
    value: '+91 9082722403',
  },
  {
    icon: <LocationOnOutlinedIcon sx={{ color: 'primary.main', fontSize: 24 }} />,
    label: 'Visit Us',
    value: 'Sector 137, Noida, Uttar Pradesh 201305',
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 10, md: 14 },
        bgcolor: 'background.default',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: isDark
            ? 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)'
            : 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(37,99,235,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
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
            Get In Touch
          </Typography>
          <Typography variant="h2" sx={{ mt: 1, mb: 2, fontWeight: 800, color: 'text.primary' }}>
            Let's Grow Together
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: 500, mx: 'auto', fontSize: '1.05rem' }}
          >
            Ready to take your brand to the next level? Tell us about your goals and
            we'll build a custom strategy for you.
          </Typography>
        </Box>

        <Grid container spacing={5} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {contactInfo.map((info) => (
                <Box
                  key={info.label}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2.5,
                    p: 3,
                    borderRadius: 3,
                    background: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                    border: isDark
                      ? '1px solid rgba(255,255,255,0.07)'
                      : `1px solid ${theme.palette.divider}`,
                    boxShadow: isDark ? 'none' : '0 2px 10px rgba(15, 23, 42, 0.03)',
                  }}
                >
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: isDark ? 'rgba(59,130,246,0.12)' : 'rgba(37,99,235,0.08)',
                      flexShrink: 0,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="caption"
                      sx={{ color: 'text.secondary', display: 'block', fontWeight: 500, mb: 0.2 }}
                    >
                      {info.label}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 700, color: 'text.primary' }}>
                      {info.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                p: { xs: 3.5, md: 5 },
                borderRadius: 3.5,
                background: isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF',
                border: isDark
                  ? '1px solid rgba(255,255,255,0.08)'
                  : `1px solid ${theme.palette.divider}`,
                boxShadow: isDark ? 'none' : '0 4px 20px -2px rgba(15, 23, 42, 0.05)',
              }}
            >
              {submitted ? (
                <Alert severity="success" sx={{ borderRadius: 2, py: 2 }}>
                  Thanks for reaching out! We'll get back to you within 24 hours.
                </Alert>
              ) : (
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Your Name"
                        fullWidth
                        required
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Email Address"
                        type="email"
                        fullWidth
                        required
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Company Name"
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Phone Number"
                        fullWidth
                        variant="outlined"
                        size="small"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Tell us about your goals"
                        fullWidth
                        required
                        multiline
                        rows={4}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          py: 1.6,
                          fontWeight: 700,
                          boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
