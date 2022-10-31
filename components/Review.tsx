import { Box, Grid, Typography } from '@mui/material';
import type { NextPage } from 'next'
import Avatar from '../public/Znachenie-imeni-Adrian.jpg';
import Image from 'next/image';
interface ReviewProps {};

const Review: NextPage<ReviewProps> = () => {

    return (
		<Grid container spacing={5} sx={{ alignItems: 'center', py: 5 }}>
			<Grid
				item
				md={4}
				sm={6}
				xs={12}
				sx={{
					display: 'flex',
					justifyContent: 'center',
				}}>
				<Box
					sx={{
						maxWidth: 250,
						width: '100%',
						height: 250,
						position: 'relative',
						overflow: 'hidden',
						borderRadius: 2,
					}}>
					<Image
						src={Avatar}
						alt='1'
						fill
						style={{ objectFit: 'cover' }}
					/>
				</Box>
			</Grid>
			<Grid item md={8} sm={6} xs={12}>
				<Typography variant='h5'>
					“My experience with Mark is a complete sucess, from customer
					service, wide range of products, clean store, purchasing
					experience, the newsletter.Thank you.”
				</Typography>
			</Grid>
		</Grid>
	);
}

export default Review;