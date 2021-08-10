import React, {useState} from 'react'
import shirts from '../Products/ProductsImages'
import { productPageVariant as pageAnimation } from '../Products/Products'
import { motion } from 'framer-motion'
import Zoom from 'react-img-zoom'
import '../../../Styles/productDetail.css'



const ShirtDetails = ({ match }) => {
    const checkShirt = shirts.filter(shirt => shirt.name.toLowerCase().split(" ").join("-") === match.params.id ? shirt.img: null)
    let [productImg, setProductImg] = useState(checkShirt[0].allImages[0].src);

    const [ imgWidth, setImgWidth] = useState(400)
  
    let allImages = [...checkShirt[0].allImages]
    const handleClick = (e) => {
        setProductImg(e.target.src)
        switch(imgWidth) {
            case 400:
                setImgWidth(401)
                break;
            case 401:
                setImgWidth(400)
                break;
        }
    }


    let showAllImages = allImages.map(image => {
        return (
            <div className="img-container" key={image.src}>
                <img onClick={handleClick} src={image.src} alt="img"/>
            </div>
        )
    })

    return (
        <motion.div variants={pageAnimation} animate="animate" initial="initial" exit="exit">
            <div className="product-img-div">
                <Zoom
                  img={productImg}
                  zoomScale={3}
                  width={imgWidth}
                  height={400}
                  transitionTime={0.5}
                  className="product-img"
                />
            </div>
            <div>{productImg}</div>
            <div className="all-images">
                {showAllImages}
            </div>
            <div className="product-detail">
                <div className="previous">
                </div>

                <div className="next">
                    
                </div>
                <div className="add-to-bag">

                </div>
            </div>
        </motion.div>
    )
}

export default ShirtDetails