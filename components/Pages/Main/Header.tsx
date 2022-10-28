/** @format */

import type { NextPage } from 'next';
import HeaderImg from '../../../public/Header.jpg';
import Image from 'next/image';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GiBoltEye } from 'react-icons/gi';

const Header: NextPage = () => {
	return (
		<header>
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100vh',
					zIndex: -1,
				}}>
				<Image
					src={HeaderImg}
					alt='1'
					fill
					style={{ objectFit: 'cover' }}
				/>
			</Box>
			<Grid container height='100vh'>
				<Grid
					item
					md={4}
					xs={12}
					pt={10}
					px={5}
					sx={{
						bgcolor: '#0004',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 2,
					}}>
					<Typography
						variant='h4'
						textAlign='center'
						color='Background'>
						Exclusive offers of the latest computer technology
					</Typography>
					<Typography variant='body1' color='Background'>
						Explore different categories. Find the best deals.
					</Typography>
					<Button variant='contained' color='primary'>
						Shop Now
					</Button>
				</Grid>
				<Grid
					item
					md={8}
					sx={{
                        display: {xs:'none', md:'flex'},
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						gap: 2,
					}}
					pt={10}>
					<Typography variant='h1' color='Background'>
						<GiBoltEye size='1.3em' />
					</Typography>
					<Typography variant='h1' color='Background'>
						E-Store
					</Typography>
				</Grid>
			</Grid>
		</header>
	);
};

export default Header;
