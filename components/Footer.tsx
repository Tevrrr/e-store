import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Box, Typography, useTheme } from '@mui/material';
import { GiBoltEye } from 'react-icons/gi';
import {
	AiFillFacebook,
	AiFillInstagram,
	AiFillLinkedin,
	AiOutlineTwitter,
} from 'react-icons/ai';
import { bgcolor } from '@mui/system';

const Footer: NextPage = () => {
    const { primary, action, mode } = useTheme().palette;

    return (
		<Box
			sx={{
				bgcolor: mode === 'light' ? primary.light : action.focus,
				color: mode === 'light' ? primary.dark : '',
			}}>
			<Container maxWidth='lg'>
				<Grid container columnSpacing={3} sx={{ pt: 10, pb: 3 }}>
					<Grid item xs={12} sm={4}>
						<Typography
							variant='h4'
							sx={{
								display: 'inline-flex',
								alignItems: 'center',
								gap: 1,
							}}>
							<GiBoltEye size='1.3em' />
							Store
						</Typography>
						<Box
							sx={{
								display: 'flex',
								alignItems: 'center',
								gap: 2,
								fontSize: 27,
								pb: 1,
							}}>
							<AiFillFacebook />
							<AiFillInstagram />
							<AiFillLinkedin />
							<AiOutlineTwitter />
						</Box>
						<Typography variant='h6'>Address</Typography>
						<Typography variant='body1'>+123 654 987</Typography>
						<Typography variant='body1'>
							877 The Bronx, NY
						</Typography>
						<Typography variant='body1'>14568, USA</Typography>
					</Grid>
					<Grid item md={2} sm={4} xs={6}>
						<Typography variant='h6'>My Account</Typography>
						<Typography variant='body1'>Sign in</Typography>
						<Typography variant='body1'>Register</Typography>
					</Grid>
					<Grid item md={2} sm={4} xs={6}>
						<Typography variant='h6'>Help</Typography>
						<Typography variant='body1'>Shipping</Typography>
						<Typography variant='body1'>Returns</Typography>
					</Grid>
					<Grid item xs={12}>
						<Typography variant='body1' pt={5}>
							Copyright ©2020 INWOOD. All Rights Reserved
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Footer;