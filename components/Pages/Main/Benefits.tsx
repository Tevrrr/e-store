import type { NextPage } from 'next'
import Typography from '@mui/material/Typography'
import { Box, Container, Grid, useTheme } from '@mui/material';
import { FaMoneyCheck } from 'react-icons/fa';
import { TbTruckReturn } from 'react-icons/tb';
import { BiSupport } from 'react-icons/bi';

const Benefits: NextPage = () => {
    const theme = useTheme();
    
    return (
		<Box
			sx={{
				bgcolor: theme.palette.mode === 'light'
						? theme.palette.success.main
						: theme.palette.action.hover,
				color:
					theme.palette.mode === 'light'
						? theme.palette.primary.dark
						: '',
				py: 5,
				mt: 10,
			}}>
			<Container maxWidth='lg'>
				<Typography variant='h3' textAlign='center'>
					Benefits for your expediency
				</Typography>
				<Grid container spacing={{ md: 20, sm: 2 }}>
					<Grid item mt={5} sm={4} xs={12} textAlign='center'>
						<Typography variant='h3'>
							<FaMoneyCheck />
						</Typography>

						<Typography variant='h5'>Payment Method</Typography>
						<Typography variant='body1'>
							We offer flexible payment options, to make easier.
						</Typography>
					</Grid>
					<Grid item mt={5} sm={4} xs={12} textAlign='center'>
						<Typography variant='h3'>
							<TbTruckReturn />
						</Typography>

						<Typography variant='h5'>Return policy</Typography>
						<Typography variant='body1'>
							You can return a product within 30 days.
						</Typography>
					</Grid>
					<Grid item mt={5} sm={4} xs={12} textAlign='center'>
						<Typography variant='h3'>
							<BiSupport />
						</Typography>

						<Typography variant='h5'>Customer Support</Typography>
						<Typography variant='body1'>
							Our customer support is 24/7.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Benefits;