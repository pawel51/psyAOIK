import React from 'react';
import PropTypes from 'prop-types';

const Product = props => {
    const {name, amount, unit, price} = props.product;
    return (
        <tr>
            <td>{name}</td>
            <td>{amount}</td>
            <td>{unit}</td>
            <td>{price}</td>
        </tr>
    );
};

Product.propTypes = {
    name: PropTypes.string,
    amount: PropTypes.number,
    unit: PropTypes.string,
    price: PropTypes.number
};

export default Product;