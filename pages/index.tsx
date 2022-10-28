/** @format */

import {
	Box,
} from '@mui/material';
import Header from '../components/Pages/Main/Header';

import MainContainer from '../components/MainContainer';
import Category from '../components/Pages/Main/Category';


export default function Home() {
    
    return (
        <MainContainer>
            <Header />
            <Category/>
            {/* <Box sx={{height:'500vh'}}></Box> */}
        </MainContainer>
		
			
			
		
	);
}
