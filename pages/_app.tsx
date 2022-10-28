import { createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import Navbar from '../components/Navbar';


export default function App({ Component, pageProps }: AppProps) {
    const theme = createTheme({
		palette: {
			
		},
	});
  return (
		<>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1, width=device-width'
				/>
          </Head>
			<Component {...pageProps} />
		</>
  );
}
