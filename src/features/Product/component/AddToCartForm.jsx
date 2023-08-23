import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Quantityfield from '../../../components/form-controls/QuantityField';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func
};

function AddToCartForm({ onSubmit = null }) {
    const schema = yup.object().shape({
        quantity: yup.number().required('please enter quantity').min(1, 'minimum value is 1').typeError('Please enter a number')
    });

    const form = useForm({
        defaultValues: {
            quantity: 1,
        },
        resolver: yupResolver(schema)
    })

    const handleSubmit = async (values) => {
        if (onSubmit) {
            await onSubmit(values)
        }
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <Quantityfield form={form} name='quantity' label='Quantity' />

            <Button type='submit' variant='contained' color='primary' style={{ width: '250px' }} size='large'>
                Thêm vào giỏ hàng
            </Button>
        </form>
    );
}

export default AddToCartForm;