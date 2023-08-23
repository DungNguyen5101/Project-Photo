import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import './ProductInfo.scss'
import { formatPrice } from '../../../Utils';

ProductInfo.propTypes = {
    product: PropTypes.object
};

function ProductInfo({ product = {} }) {
    const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product
    return (
        <Box className="product-info">
            <Typography component='h1' variant='h4' className='info-name'>{name}</Typography>
            <Typography variant='body2' className='info-shortdescription'>{shortDescription}</Typography>
            <Box className='price-box'>
                <Box component="span" className='info-saleprice'>{formatPrice(salePrice)}</Box>
                {promotionPercent > 0 && (
                    <>
                        <Box component="span" className='info-originalprice'>{formatPrice(originalPrice)}</Box>
                        <Box component="span" className='info-promotionpercent'>{`-${promotionPercent}%`}</Box>

                    </>
                )}
            </Box>
        </Box>
    );
}

export default ProductInfo;