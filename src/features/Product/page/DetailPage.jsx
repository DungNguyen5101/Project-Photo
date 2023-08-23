import { Box, Container, Grid, LinearProgress, Paper } from '@mui/material';
import React from 'react';
import { Outlet, useMatch } from 'react-router-dom';
import ProductThumbnail from '../component/Filters/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import ProductInfo from '../component/ProductInfo';
import AddToCartForm from '../component/AddToCartForm';
import ProductMenu from '../component/ProductMenu';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Cart/cartSlide';


function DetailPage(props) {
    const {
        params: { productId },
    } = useMatch(`/products/:productId`)

    const { product, loading } = useProductDetail(productId)

    const dispatch = useDispatch()

    if (loading) {
        return <Box className='box-loading'>
            <LinearProgress style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: "100%"
            }} />
        </Box>
    }

    const handleAddToCardSubmit = ({ quantity }) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity,
        })
        console.log(action)
        dispatch(action)
    }
    return (
        <Box>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item width="400px" padding="12px" border="1px solid #dddddd">
                            <ProductThumbnail product={product} />
                        </Grid>

                        <Grid item flex="1 1 0" padding="12px">
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCardSubmit} />
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu />
                <Outlet />
            </Container>
        </Box>
    );
}

export default DetailPage;