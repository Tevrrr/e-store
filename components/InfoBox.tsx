import { Box, SxProps, useTheme } from '@mui/material';
import type { NextPage } from 'next';
import { ReactNode } from 'react';

interface InfoBoxProps {
	children: ReactNode;
	sx?: SxProps;
}

const InfoBox: NextPage<InfoBoxProps> = ({ children, sx = {} }) => {
	const { mode, primary, success, action } = useTheme().palette;

	return (
		<Box
			sx={{
				bgcolor: mode === 'light' ? success.main : action.hover,
				color: mode === 'light' ? primary.dark : '',
				...sx,
			}}>
			{children}
		</Box>
	);
};

export default InfoBox;