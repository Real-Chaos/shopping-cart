import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../../../Styles/products.css'

const productPageVariant = {

    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {delay: 0.2,duration: 0.3}
    },
    exit: {
        x: "100vw",
        transition: {ease: 'easeInOut', duration: 0.6}
    }
}

const ProductPageTemplate = () => {
    return (
        <motion.div className="shopping-page-content" variants={productPageVariant} initial="initial" animate="animate" exit="exit" >
            <div className="product-category">
                <ul className="filter-products">
                    <Link to="/products"><li><a className="product-links" >All</a></li></Link>
                    <Link to="/products/shirts"><li><a className="product-links" >Shirts</a></li></Link>
                    <Link to="/products/pants"><li><a className="product-links" >Pants</a></li></Link>
                    <Link to="/products/suits"><li><a className="product-links" >Suits</a></li></Link>
                    <Link to="/products/toys"><li><a className="product-links" >Toys</a></li></Link>
                </ul>
            </div>
        </motion.div>
    )
}

export default ProductPageTemplate