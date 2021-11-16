import React, {useState} from 'react';
import {Table} from "react-bootstrap";
import Product from "./Product";
import {ProductsData} from "./ProductsData";
import {Button} from "react-bootstrap";
import EditModal from "./modals/EditModal";

const ProductList = () => {

    const [products, setProducts] = useState(ProductsData)
    // const productsMap = products.map(product =)
    //
    //
    //     {[i.name]: i} for i in products

    function handleDelete(value){
        let tempProducts = [...products]
        tempProducts.filter(product => product.name!==value.name)
        return tempProducts
    }

    function handleEdit(value, key){
        let tempProducts = [...products]
        tempProducts.map(e => {
            if (e.id === key){
                e = value
            }
            return e
        })
        setProducts(tempProducts)
    }


    return (
        <div>
            <Table bordered hover>
                <thead>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Unit</th>
                    <th>Price</th>
                </thead>
                <tbody>
                {
                    products.map(value => {
                        return (
                            <tr>
                                <Product key={value.name} product={value}/>
                                <EditModal handleEdit={handleEdit} item={value} val={value.id}/>
                                {/*<Button variant={"secondary"} onClick={() => setProducts(handleDelete(value.name))}>Usun</Button>*/}
                            </tr>
                            )
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