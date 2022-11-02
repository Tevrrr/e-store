import type { NextPage } from 'next'
import Grid from '@mui/material/Grid'
import Cover from '../../../public/christin-hume-Hcfwew744z4-unsplash.jpg';
import Image from 'next/image';
import { Box, Typography, Button, TextField } from '@mui/material';
import InfoBox from '../../InfoBox';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const NewsletterForm: NextPage = () => {
         const ref = useRef(null);
			const isInView = useInView(ref, {
				once: true,
				amount: 0.2,
			});

    return (
		<InfoBox>
			<Grid container columnSpacing={10}>
				<Grid
					item
					md={6}
					xs={12}
					sx={{
						display: 'flex',
						justifyContent: 'center',
					}}>
					<Box
						sx={{
							width: '100%',
							height: 400,
							position: 'relative',
						}}>
						<Image
							src={Cover}
							alt='1'
							fill
							style={{ objectFit: 'cover' }}
						/>
					</Box>
				</Grid>
				<Grid
					ref={ref}
					sx={{
						transform: isInView ? 'none' : 'translateY(20%)',
						opacity: isInView ? 1 : 0,
						transition:
							'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
					}}
					item
					md={6}
					xs={12}>
					<Box
						sx={{
							p: 3,
							display: 'flex',
							flexDirection: 'column',
							alignItems: { xs: 'center', sm: 'flex-start' },
							textAlign: { xs: 'center', sm: 'left' },
						}}>
						<Typography variant='h2'>Join Our</Typography>
						<Typography variant='h3'>Newsletter</Typography>
						<Typography variant='h6'>
							Receive exclusive deals, discounts and many offers.
						</Typography>

						<TextField sx={{ my: 3 }} label='Enter your email' />
						<Button
							variant='contained'
							size='large'
							color='primary'>
							Subscribe
						</Button>
					</Box>
				</Grid>
			</Grid>
		</InfoBox>
	);
}

export default NewsletterForm;