import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';


function ProductFeature(props) {
    return (
        <Box pt={4}>
            <Outlet />
        </Box>
    );
}

export default ProductFeature;