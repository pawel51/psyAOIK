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