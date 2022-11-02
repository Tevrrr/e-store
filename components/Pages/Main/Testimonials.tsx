import { Box,  Typography, Grid, Container  } from '@mui/material';
import type { NextPage } from 'next'
import Review from './Review';

const Testimonials: NextPage = () => {

    return (
		<Container maxWidth='lg'>
			<Box sx={{ my: 10, textAlign: 'center' }}>
				<Typography variant='h3'>Testimonials</Typography>
				<Typography variant='h5' mt={2}>
					Over 15,000 happy customers.
				</Typography>
				<Review />
			</Box>
		</Container>
	);
}

export default Testimonials;