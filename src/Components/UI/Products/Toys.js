import React from 'react'
import ProductPageTemplate from './ProductPage'
import { motion } from 'framer-motion'
import { productPageVariant as pageAnimation } from './Products'

const Toys = () => {
    return (
        <motion.div className="products-container toys-container" variants={pageAnimation} initial="initial" animate="animate" exit="exit">
            <h1 className="h4">Products/<br />Toys</h1>
            <ProductPageTemplate />
        </motion.div>
    )
}

export default Toys