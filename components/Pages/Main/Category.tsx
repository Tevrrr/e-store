import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import CategoryCart from '../../CategoryCart'

const Category: NextPage = () => {

    return (
		<Box pb={10}>
			<Container maxWidth='lg'>
				<Typography variant='h3' py={4} textAlign='center'>
					Explore by Category
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<CategoryCart />
					</Grid>
					<Grid item xs={12} sm={6}>
						<CategoryCart />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default Category;