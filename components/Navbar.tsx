/** @format */

import {
	AppBar,
	Container,
	Toolbar,
	Typography,
	IconButton,
	Badge,
	useTheme,
	Box,
    Button,
} from '@mui/material';
import type { NextPage } from 'next';
import { useContext } from 'react';
import { FaShoppingCart, FaUserAlt, FaSun, FaMoon } from 'react-icons/fa';
import { GiBoltEye } from 'react-icons/gi';
import { ColorModeContext } from './ThemeModeProvider';

// BsMoonFill FaSun FaMoon
const Navbar: NextPage = () => {
	const { toggleColorMode } = useContext(ColorModeContext);
	const theme = useTheme();
	return (
		<AppBar position='fixed' color='primary'>
			<Container maxWidth='lg'>
                <Toolbar sx={{ gap: 1, justifyContent: 'space-between' }}>
					<Typography
						variant='h4'
						sx={{
							display: 'inline-flex',
							alignItems: 'center',
							gap: 1,
						}}>
						<GiBoltEye size='1.3em' />
						Store
					</Typography>
                    <Box sx={{ display: {xs: 'none', md:'flex'}, gap:3}}>
						<Typography variant='h6'>Home</Typography>
						<Typography variant='h6'>Produts</Typography>
						<Typography variant='h6'>About</Typography>
                        <Typography variant='h6'>Contact Us</Typography>
					</Box>
					<Box>
						<IconButton
							aria-label='User'
							size='large'
							color='inherit'
							onClick={toggleColorMode}>
							{theme.palette.mode === 'light' ? (
								<FaSun />
							) : (
								<FaMoon />
							)}
						</IconButton>
						<IconButton
							aria-label='User'
							size='large'
							color='inherit'>
							<Badge badgeContent={11} color='secondary' max={9}>
								<FaShoppingCart />
							</Badge>
						</IconButton>
						<IconButton
							aria-label='User'
							size='large'
							color='inherit'>
							<FaUserAlt />
						</IconButton>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Navbar;
