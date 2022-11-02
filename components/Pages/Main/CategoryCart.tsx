import { Card, Button, Typography, Box } from '@mui/material';
import type { NextPage } from 'next'
import Keyboard from '../../../public/Keyboard.jpg'
import Image from 'next/image';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CategoryCartProps {};

const CategoryCart: NextPage<CategoryCartProps> = () => {
     const ref = useRef(null);
		const isInView = useInView(ref, {
			once: true,
			amount: 0.2,
		});
    return (
		<Card
			ref={ref}
			sx={{
				minWidth: 275,
				height: 275,
				position: 'relative',
				transform: isInView ? 'none' : 'translateY(20%)',
				opacity: isInView ? 1 : 0,
				transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
			}}>
			<Image
				src={Keyboard}
				alt='1'
				fill
				style={{ objectFit: 'cover', position: 'absolute' }}
			/>
			<Box
				sx={{
					height: '100%',
					width: '100%',
					position: 'relative',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 5,
					zIndex: 2,
				}}>
				<Typography variant='h2' color='Background'>
					Keyboard
				</Typography>
				<Button variant='contained' color='primary'>
					Explore
				</Button>
			</Box>
		</Card>
	);
}

export default CategoryCart;