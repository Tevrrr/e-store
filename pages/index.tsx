/** @format */

import {
	Box,
} from '@mui/material';
import Header from '../components/Pages/Main/Header';

import MainContainer from '../components/MainContainer';
import Category from '../components/Pages/Main/Category';
import Benefits from '../components/Pages/Main/Benefits';



export default function Home() {
    
    return (
        <MainContainer>
            <Header />
            <Category />
            <Benefits/>
        </MainContainer>
		
			
			
		
	);
}
