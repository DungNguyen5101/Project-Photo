import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PropTypes from 'prop-types'
import './FilterByPrice.scss'

FilterByPrice.propTypes = {
    onChange: PropTypes.func

};

function FilterByPrice({ onChange }) {
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }
    const handleSubmit = () => {
        if (onChange) onChange(values)

        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0
        })
    }
    return (
        <Box className='price-container'>
            <Typography variant='subtitle2' className='price-name'>Giá</Typography>
            <Box className='price-box'>
                <TextField name='salePrice_gte' value={values.salePrice_gte} onChange={handleChange} variant='standard' />
                <span>-</span>
                <TextField name='salePrice_lte' value={values.salePrice_lte} onChange={handleChange} variant='standard' />
            </Box>
            <Button variant='outlined' color='primary' onClick={handleSubmit} className='price-btn'>Áp dụng</Button>
        </Box>
    );
}

export default FilterByPrice;