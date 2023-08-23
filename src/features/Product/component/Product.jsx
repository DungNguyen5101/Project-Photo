import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { STATIC_HOST } from '../../../constant/index';
import { THUMBNAIL_PLACEHOLDER } from '../../../constant/comom'
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../../Utils';

Product.propTypes = {
    product: PropTypes.object
};

function Product({ product }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/products/${product.id}`)
    }
    const thumbnailUrl = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail?.url}`
        : THUMBNAIL_PLACEHOLDER
    return (
        <Box padding={1} onClick={handleClick}>
            <Box padding={1} minHeight="215px">
                <img src={thumbnailUrl} alt={product.name} width='100%' />
            </Box>
            <Typography variant='body2'>{product.name}</Typography>
            <Typography variant='body2'>
                <Box component='span' fontSize='16px' fontWeight="bold" mr={1}>
                    {formatPrice(product.salePrice)}
                </Box>
                {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}

            </Typography>

        </Box>
    );
}

export default Product;