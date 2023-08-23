import { Box } from '@mui/material';
import React from 'react';
import { useMatch } from 'react-router-dom';
import './ProductMenu.scss';

ProductMenu.propTypes = {

};

function ProductMenu(props) {
    const { pathname } = useMatch('/products/:productId')

    return (
        <Box component='ul' className='box-container'>
            <li>

            </li>
        </Box>
    );
}

export default ProductMenu;