import React from 'react';
import PropTypes from 'prop-types';
import {Table} from "react-bootstrap";
import Product from "./Product";
import {ProductsData} from "./ProductsData";

const ProductList = props => {

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Unit</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {
                    ProductsData.map(value => {
                        return <Product key={value.name} product={value}/>
                    })
                }
                </tbody>
            </Table>
        </div>
    );
};

ProductList.propTypes = {

};

export default ProductList;