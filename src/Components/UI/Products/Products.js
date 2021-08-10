import React from 'react'
import { motion } from 'framer-motion'
import ProductPageTemplate from './ProductPage'

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

const Products = () => {
    return (
        <motion.div className="products-container all-products" variants={productPageVariant} initial="initial" animate="animate" exit="exit" >
            <h4 className="h4">All <br /> Products</h4>
            <ProductPageTemplate />
        </motion.div>
    )
}

export {Products, productPageVariant}