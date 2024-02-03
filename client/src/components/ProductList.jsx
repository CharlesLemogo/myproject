import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
    const { removeFromDom, product, setProduct } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then((res) => {
                console.log(res.data);
                setProduct(...product, res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
        <h1>All Products:</h1>
            {
                product.map((product, index) => {
                    return (
                        <div key={index}>
                            
                            <Link to={`/product/${product._id}`}>{product.title}'s Page!</Link>|
                            <Link to={`/product/edit/${product._id}`}>Edit</Link>|
                            <button onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default ProductList;
