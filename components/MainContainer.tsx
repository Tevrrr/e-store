/** @format */

import { CssBaseline } from '@mui/material';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import ThemeModeProvider from './ThemeModeProvider';
interface MainContainerProps {
	children: ReactNode;
	title?: string;
}

const MainContainer: NextPage<MainContainerProps> = ({
	children,
	title = '',
}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
			</Head>{' '}
			<ThemeModeProvider>
				<CssBaseline />
				<Navbar />
				{children}
				<Footer />
			</ThemeModeProvider>
		</>
	);
};

export default MainContainer;
