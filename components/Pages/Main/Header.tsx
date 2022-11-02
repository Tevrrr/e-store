/** @format */

import type { NextPage } from 'next';
import HeaderImg from '../../../public/Header.jpg';
import Image from 'next/image';
import { Box } from '@mui/system';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { GiBoltEye } from 'react-icons/gi';
import { blueGrey } from '@mui/material/colors'
import { motion} from 'framer-motion'

const Header: NextPage = () => {
	return (
		<header>
			<Box
				sx={{
					position: 'absolute',
					width: '100%',
					height: '100vh',
					zIndex: -1,
					bgcolor: blueGrey[900],
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
                    component={motion.div}
					md={4}
					sm={6}
					xs={12}
					pt={10}
					px={5}
					sx={{
						bgcolor: '#0004',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
						gap: 2,
                    }}
                    initial={{ opacity: 0, x: -100 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}>
					
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
					sm={6}
					sx={{
						display: { sm: 'flex', xs: 'none' },
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
