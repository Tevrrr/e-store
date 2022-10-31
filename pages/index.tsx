/** @format */

import {
	Box, Divider,
} from '@mui/material';
import Header from '../components/Pages/Main/Header';

import MainContainer from '../components/MainContainer';
import Category from '../components/Pages/Main/Category';
import Benefits from '../components/Pages/Main/Benefits';
import Testimonials from '../components/Pages/Main/Testimonials';
import { grey } from '@mui/material/colors';
import NewsletterForm from '../components/Pages/Main/NewsletterForm';



export default function Home() {
    
    return (
		<MainContainer>
			<Header />
			<Category />
			<Benefits />
			{/* <Divider
				sx={{ bgcolor: grey[500], height: 3, mt:10 }}
				textAlign='left'
				variant='middle'></Divider> */}
            <Testimonials />
            <NewsletterForm/>
		</MainContainer>
	);
}
