import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
    filter: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

function ProductFilters({ filter, onChange }) {
    const handleCategoryChange = (newCategoryId) => {
        if (!newCategoryId) return
        const newFilter = {
            ...filter,
            'category.id': newCategoryId
        }
        onChange(newFilter)
    }

    const handleChange = (values) => {
        if (onChange) onChange(values)
    }
    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterByService filter={filter} onChange={handleChange} />
        </Box>
    );
}

export default ProductFilters;