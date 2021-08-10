import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Nav = () => {
  const searchBarStyles = {
    display: "flex!important",
    position: "absolute",
    left: "0",
    right: "0",
    marginRight: "auto",
    marginLeft: "auto",
    width: "550px"
  }

  const navStyles = {
    background: "transparent",
    zIndex: "3", 
    color: "white", 
    position: "absolute", 
    width: "100vw",
    padding: "3% 5%"
  }

  const shoppingCartVariant = {
    hover: {
      transform: [ "rotate(0deg)","rotate(-50deg)", "rotate(50deg)",],
      cursor: "pointer",
      transition: {
        duration: 0.5,
        yoyo: Infinity
      }
    }
  }

  const searchVariant = {

      initial: {
          opacity: 0
      },
      animate: {
          opacity: 1,
          transition: {delay: 0.6,duration: 0.5}
      },
      exit: {
        x: "-100vw",
        transition: {ease: 'easeInOut', duration: 0.6}
    }
  }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark" style={navStyles}>
            <div className="container-fluid">
                <Link to="/shopping-cart" className="navbar-brand navbar-brand-1">Logo</Link>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 shopping-cart-block" style={{width: "100%", justifyContent: "flex-end", alignItems: "center"}}>
                  <li className="nav-item"><Link to="/shopping-cart" className="navbar-brand navbar-brand-2">Logo</Link></li>
                    <li className="nav-item">
                      <Link to="/products" style={{color: "white"}}>Shop</Link>
                    </li>
                    <li className="nav-item" style={{fontSize: 30}}>
                      <motion.i className="fas fa-shopping-cart cart" variants={shoppingCartVariant}
                        whileHover="hover" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      </motion.i>
                      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                          <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                        ...
                        </div>
                    </div>
                    </li>
                  </ul>
                <motion.form className="d-flex" style={searchBarStyles} variants={searchVariant} initial="initial" animate="animate" exit="exit">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </motion.form>
              </div>
        </nav>
    )
}

export default Nav