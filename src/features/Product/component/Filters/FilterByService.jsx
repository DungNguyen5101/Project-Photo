import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './FilterByService.scss'

FilterByService.propTypes = {
    filter: PropTypes.object,
    onChange: PropTypes.func

};

function FilterByService({ onChange, filter = {} }) {
    const handleChange = (e) => {
        if (!onChange) return
        // setValues(prevValues => ({
        //     ...prevValues,
        //     [name]: checked
        // }))
        const { name, checked } = e.target
        onChange({ [name]: checked })


    }
    return (
        <Box className='price-container'>
            <Typography variant='subtitle2' className='price-name'>Dịch Vụ</Typography>

            <ul className='check-list'>
                {[
                    { value: 'isPromotion', label: 'Khuyễn mãi' },
                    { value: 'isFreeShip', label: 'Miễn phí vận chuyển' }
                ].map(service => (
                    <li key={service.value}>
                        <FormControlLabel
                            label={service.label}
                            control={
                                <Checkbox
                                    checked={Boolean(filter[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color='primary'
                                />
                            }
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;