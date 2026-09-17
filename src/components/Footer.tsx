import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { useTheme } from '@mui/material/styles';

const footerLinks = {
  Services: ['SEO Optimization', 'Social Media', 'Paid Advertising', 'Content Marketing', 'Email Marketing'],
  Company: ['About Us', 'Our Work', 'Careers', 'Blog', 'Press'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
};

const socials = [
  { icon: <FacebookIcon />, label: 'Facebook', color: '#1877F2' },
  { icon: <InstagramIcon />, label: 'Instagram', color: '#E1306C' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', color: '#0A66C2' },
  { icon: <TwitterIcon />, label: 'Twitter', color: '#1DA1F2' },
  { icon: <YouTubeIcon />, label: 'YouTube', color: '#FF0000' },
];

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
		<Box
			component="footer"
			sx={{
				bgcolor: isDark ? "#060C1A" : "#F1F5F9",
				borderTop: `1px solid ${theme.palette.divider}`,
				pt: { xs: 8, md: 10 },
				pb: 4,
			}}>
			<Container maxWidth="lg">
				<Grid
					container
					spacing={6}
					sx={{ mb: 6 }}>
					<Grid size={{ xs: 12, md: 4 }}>
						<Box
							component="img"
							src="/logo.png"
							alt="Digisty Technologies"
							sx={{
								width: { xs: 220, sm: 250 },
								height: "auto",
								display: "block",
								mb: 2,
							}}
						/>
						<Typography
							variant="body2"
							sx={{
								color: "text.secondary",
								lineHeight: 1.8,
								mb: 3,
								maxWidth: 300,
								fontSize: "0.925rem",
							}}>
							Elevating brands to new heights through data-driven digital
							marketing strategies that deliver real, measurable results.
						</Typography>
						<Typography
							variant="body2"
							sx={{
								color: "text.secondary",
								lineHeight: 1.6,
								mb: 3,
								maxWidth: 300,
								fontSize: "0.875rem",
							}}>
							Sector 137, Noida, Uttar Pradesh 201305
						</Typography>
						<Box sx={{ display: "flex", gap: 1 }}>
							{socials.map((s) => (
								<IconButton
									key={s.label}
									size="small"
									aria-label={s.label}
									sx={{
										color: "text.secondary",
										border: `1px solid ${theme.palette.divider}`,
										borderRadius: 2,
										p: 0.9,
										"&:hover": {
											color: s.color,
											bgcolor: `${s.color}14`,
											borderColor: `${s.color}40`,
										},
										transition: "all 0.2s ease",
									}}>
									{s.icon}
								</IconButton>
							))}
						</Box>
					</Grid>

					{Object.entries(footerLinks).map(([category, links]) => (
						<Grid
							size={{ xs: 6, md: "auto" }}
							key={category}
							sx={{ flexGrow: 1 }}>
							<Typography
								variant="subtitle2"
								sx={{
									fontWeight: 700,
									mb: 2.5,
									color: "text.primary",
									letterSpacing: "0.04em",
									fontSize: "0.95rem",
								}}>
								{category}
							</Typography>
							<Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
								{links.map((link) => (
									<Link
										key={link}
										href="#"
										underline="none"
										sx={{
											color: "text.secondary",
											fontSize: "0.875rem",
											fontWeight: 500,
											"&:hover": { color: "primary.main" },
											transition: "color 0.15s ease",
										}}>
										{link}
									</Link>
								))}
							</Box>
						</Grid>
					))}
				</Grid>

				<Divider sx={{ borderColor: theme.palette.divider, mb: 4 }} />

				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						justifyContent: "space-between",
						alignItems: { xs: "flex-start", sm: "center" },
						gap: 1.5,
					}}>
					<Typography
						variant="caption"
						sx={{ color: "text.secondary", fontSize: "0.825rem" }}>
						&copy; {new Date().getFullYear()} Digisty Technologies. All rights
						reserved.
					</Typography>
					<Typography
						variant="caption"
						sx={{ color: "text.secondary", fontSize: "0.825rem" }}>
						Built with precision. Powered by results.
					</Typography>
				</Box>
			</Container>
		</Box>
	);
}
