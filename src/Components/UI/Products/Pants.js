import React from 'react'
import { motion } from 'framer-motion'
import ProductPageTemplate from './ProductPage'
import { productPageVariant as pageAnimation } from './Products'

const Pants = () => {
    return (
        <motion.div className="products-container pants-container" variants={pageAnimation} initial="initial" animate="animate" exit="exit">
            <h1 className="h4">Products/<br />Pants</h1>
            <ProductPageTemplate />
        </motion.div>
    )
}

export default Pants