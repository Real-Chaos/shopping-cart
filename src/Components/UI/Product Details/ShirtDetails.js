import React, {useState, useEffect} from 'react'
import shirts from '../Products/ProductsImages'
import { productPageVariant as pageAnimation } from '../Products/Products'
import { motion } from 'framer-motion'
import '../../../Styles/productDetail.css'
import Cart from '../Cart'
const addedToCart = [

]


const ShirtDetails = ({ match }) => {
    const checkShirt = shirts.filter(shirt => shirt.name.toLowerCase().split(" ").join("-") === match.params.id ? shirt.img: null)
    const [productImg, setProductImg] = useState(checkShirt[0].allImages[0].src);
    const [ productName ] = useState(checkShirt[0].name)
    const [ productPrice ] = useState(checkShirt[0].price)

    
  
    let allImages = [...checkShirt[0].allImages]
    const handleClick = (e) => {
        setProductImg(e.target.src)
    }

    

    let showAllImages = allImages.map(image => {
        return (
            <div className="img-container" key={image.src}>
                <img onClick={handleClick} src={image.src} alt="img"/>
            </div>
        )
    })

    useEffect(() => {
        document.querySelector('.add-to-cart').addEventListener('click', ()=> {
                addedToCart.push({name: productName, img: productImg, price: productPrice})
                console.log(addedToCart)
        })
    })

    return (
        <motion.div variants={pageAnimation} animate="animate" initial="initial" exit="exit">
            <div className="product-img-div">
                <h1 className="product-h1">{productName}</h1>
                <img className="product-img" src={productImg} alt="img"/>
            </div>
            <div className="all-images">
                {showAllImages}
            </div>
            <div className="product-detail">
                <div className="previous">
                </div>

                <div className="next">
                    
                </div>
                <div className="add-to-bag">
                    <button className="buy-btn add-to-cart" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Add to Cart</button>
                </div>
            </div>
            {addedToCart.length === 1 && <Cart />}
        </motion.div>
    )
}

export { ShirtDetails, addedToCart}