import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';
import './styleQuantity.scss';


Quantityfield.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,

    label: PropTypes.string,
    disable: PropTypes.bool
};

function Quantityfield(props) {
    const { form, name, label, disable } = props
    const { control, setValue } = form

    return (

        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error, isTouched } }) => (
                <>
                    <FormControl error={isTouched && invalid} fullWidth margin='normal' variant='outlined' size='small'>
                        <Typography>{label}</Typography>

                        <Box className='box'>
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                                <RemoveCircleOutline />
                            </IconButton>
                            <OutlinedInput
                                id={name}
                                type='number'
                                error={invalid}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                                disabled={disable}

                            />
                            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
                                <AddCircleOutline />
                            </IconButton>
                        </Box>

                    </FormControl>
                    <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                </>
            )}
        ></Controller>
    );
}

export default Quantityfield;