import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import CategoryCart from '../../CategoryCart'

const Category: NextPage = () => {

    return (

			<Container maxWidth='lg'>
				<Typography variant='h3' py={4} textAlign='center'>
					Explore by Category
				</Typography>
				<Grid container spacing={2}>
					<Grid
						item
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
						}}
						xs={12}
						sm={6}>
						<CategoryCart />
						<CategoryCart />
						<CategoryCart />
					</Grid>
					<Grid
						item
						sx={{
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
						}}
						xs={12}
						sm={6}>
						<CategoryCart />
						<CategoryCart />
						<CategoryCart />
					</Grid>
				</Grid>
			</Container>

	);
}

export default Category;