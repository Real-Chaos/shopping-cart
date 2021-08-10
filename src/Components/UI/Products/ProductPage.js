import React from 'react'
import { Link } from 'react-router-dom'
import '../../../Styles/products.css'


const ProductPageTemplate = () => {
    return (
        <div className="shopping-page-content product-category">
            <ul className="filter-products">
                <Link className="product-links" to="/products"><li>All</li></Link>
                <Link className="product-links" to="/products/shirts"><li>Shirts</li></Link>
                <Link className="product-links" to="/products/pants"><li>Pants</li></Link>
                <Link className="product-links" to="/products/suits"><li>Suits</li></Link>
                <Link className="product-links" to="/products/toys"><li>Toys</li></Link>
            </ul>
        </div>
    )
}

export default ProductPageTemplate