import { Grid } from '@mui/material';
import { useInView } from 'framer-motion';
import type { NextPage } from 'next'
import { ReactNode, useRef } from 'react';

interface BenefitsItemProps {
    children: ReactNode
};

const BenefitsItem: NextPage<BenefitsItemProps> = ({ children }) => {
     const ref = useRef(null);
		const isInView = useInView(ref, {
			 once: true,
			amount: 0.7,
		});
	return (
		<Grid
			item
			ref={ref}
			sx={{
			transform: isInView ? 'none' : 'translateY(20%)',
			opacity: isInView ? 1 : 0,
			transition: 'all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
		}}
			mt={5}
			sm={4}
			xs={12}
			textAlign='center'>
			{children}
		</Grid>
	);
};

export default BenefitsItem;