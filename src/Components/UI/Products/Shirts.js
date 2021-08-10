import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductPageTemplate from './ProductPage'
import { productPageVariant as pageAnimation } from './Products'
import shirts from './ProductsImages'

const Shirts = () => {
    const [ shirtsImages ] = useState(shirts)
    const displayShirts = shirtsImages.map(shirtInfo => {
        return (
            <div className="product-card hovereffect">
                <img className="product-image img-responsive" src={shirtInfo["img"]} alt={shirtInfo["name"]} />
                <div className="overlay">
                    <h2>{shirtInfo["name"]}</h2>
                    <Link to={`/shirts/${shirtInfo["name"].toLowerCase().split(" ").join("-")}`}><button className="info">More Info</button></Link>
                </div>
                <h1 style={{color: "white"}}>{shirtInfo["name"]}</h1>
            </div>
        )
    })
    return (
        <motion.div className="products-container shirts-container" variants={pageAnimation} initial="initial" animate="animate" exit="exit">
            <div>
                <h1 className="h4">Products/<br />Shirts</h1>
                <ProductPageTemplate />
            </div>
            <div className="show-shirts col-lg-3 col-md-4 col-sm-6 col-xs-12" style={{overflowX: "hidden"}}>
                {displayShirts}
            </div>
        </motion.div>
    )
}

export default Shirts