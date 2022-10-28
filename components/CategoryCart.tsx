import { Card, Button, Typography, Box } from '@mui/material';
import type { NextPage } from 'next'
import Keyboard from '../public/Keyboard.jpg'
import Image from 'next/image';

interface CategoryCartProps {};

const CategoryCart: NextPage<CategoryCartProps> = () => {

    return (
		<Card
			sx={{
				minWidth: 275,
				height: 275,
				position: 'relative',
			}}>
			<Image
				src={Keyboard}
				alt='1'
				fill
				style={{ objectFit: 'cover', position: 'absolute'}}
			/>
			<Box
                sx={{
                    height:'100%', width: '100%', position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
                    justifyContent: 'center',
                    gap: 5,
                    zIndex:2
				}}>
				<Typography variant='h2' color='Background'>Keyboard</Typography>
				<Button variant='contained' color='success'>
					Explore
				</Button>
			</Box>
		</Card>
	);
}

export default CategoryCart;