import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import '../../Styles/homepage.css'
import spiderman from '../../Images/spider.png'
import Zoom from 'react-img-zoom'



const homepageVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {delay: 0.2,duration: 0.3}
    },
    exit: {
        x: "-100vw",
        transition: {ease: 'easeInOut', duration: 0.6}
    }
}

const HomePage = () => {
    
    const spiderVariant = {
        animate: {
            y: -50,
            transition: {duration: 0.9, yoyo: Infinity}
        },
    }

    // useEffect(() => {
    //     $('.spider-man').blowup({
    //         "background" : "#FFF",
    //         "width" : 220,
    //         "height" : 220,
    //         "cursor" : true,
    //         "round" : true,
    //         "shadow" : "0 10px 15px 0 rgba(0,0,0,0.2)"
    
    //     });
    // })

    
    

    return (
        <motion.div className="home-page-content" variants={homepageVariant} initial="initial" animate="animate" exit="exit">
            <div>
                <h1>Buy Clothes & Toys</h1>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                <Link to="/products"><button className="buy-btn">Buy Now</button></Link>
            </div>
            <div>
                <AnimatePresence>
                    <motion.img className="spider-man" src={spiderman} alt="Spiderman" variants={spiderVariant} animate="animate" exit="exit"/>
                    {/* <Zoom
                      img={spiderman}
                      zoomScale={3}
                      width={600}
                      height={600}
                      transitionTime={0.5}
                    /> */}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

export default HomePage