import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss'
import React from 'react';
import PropTypes from 'prop-types';
import ProductList from "./ProductList";

const App = props => {
    return (
        <div>
            <ProductList ProductData={ProductList}/>
        </div>
    );
};

App.propTypes = {
    
};

export default App;