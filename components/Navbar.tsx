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
    Button, Drawer,
} from '@mui/material';
import type { NextPage } from 'next';
import { useContext, useState } from 'react';
import {
	FaShoppingCart,
	FaUserAlt,
	FaSun,
	FaMoon,
	FaBars,
} from 'react-icons/fa';
import { GiBoltEye } from 'react-icons/gi';
import Links from './Links';
import { ColorModeContext } from './ThemeModeProvider';

// BsMoonFill FaSun FaMoon
const Navbar: NextPage = () => {
	const { toggleColorMode } = useContext(ColorModeContext);
    const { mode, primary } = useTheme().palette;
    const [openDrawer, setOpenDrawer] = useState(false)
    
    const toggleDrawer = (value:boolean): ()=>void => {
        return ()=>setOpenDrawer(value);
    
}

	return (
		<>
			<Drawer
				anchor='left'
				open={openDrawer}
				onClose={toggleDrawer(false)}>
				<Box
					sx={{
                        height: '100vh',
						display: 'flex',
						flexDirection: 'column',
						p: 2,
						pr: 7,
                        bgcolor: mode === 'light' ? primary.main : '',
                        color: '#FFF'
					}}>
					<Typography
						variant='h4'
						sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 1,
							pb: 2,
						}}>
						<GiBoltEye size='1.3em' />
						Store
					</Typography>
					<Links />
				</Box>
			</Drawer>
			<AppBar position='fixed' color='primary'>
				<Container maxWidth='lg'>
					<Toolbar sx={{ gap: 1, justifyContent: 'space-between' }}>
						<Box sx={{ display: { xs: 'block', md: 'none' } }}>
							<IconButton
								aria-label='Menu'
								size='large'
								color='inherit'
								onClick={toggleDrawer(true)}>
								<FaBars />
							</IconButton>
						</Box>

						<Typography
							variant='h4'
							sx={{
								display: { xs: 'none', md: 'flex' },
								alignItems: 'center',
								gap: 1,
							}}>
							<GiBoltEye size='1.3em' />
							Store
						</Typography>
						<Box
							sx={{
								display: { xs: 'none', md: 'flex' },
								gap: 3,
							}}>
							<Links />
						</Box>
						<Box>
							<IconButton
								aria-label='User'
								size='large'
								color='inherit'
								onClick={toggleColorMode}>
								{mode === 'light' ? <FaSun /> : <FaMoon />}
							</IconButton>
							<IconButton
								aria-label='User'
								size='large'
								color='inherit'>
								<Badge
									badgeContent={11}
									color='secondary'
									max={9}>
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
		</>
	);
};

export default Navbar;
