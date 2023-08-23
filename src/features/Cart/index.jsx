import React from 'react';
import { useSelector } from 'react-redux';
import { cartTotalSelector } from './Selectors';

CartFeature.propTypes = {

};

function CartFeature({ product }) {
    const cartTotal = useSelector(cartTotalSelector)

    return (
        <div>
            {cartTotal}
        </div>
    );
}

export default CartFeature;