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
    width: "100vw"
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
              <Link to="/shopping-cart"><a className="navbar-brand" href="#">Logo</a></Link>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01"     aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="navbar-collapse collapse" id="navbarColor01">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{width: "100%", justifyContent: "flex-end", alignItems: "center"}}>
                  <li className="nav-item" style={{marginRight: 15}}>
                    <Link to="/products"><a className="nav-link" href="#">Shop</a></Link>
                  </li>
                  <li className="nav-item" style={{fontSize: 30, marginRight: 20}}
                  >
                    <motion.i class="fas fa-shopping-cart cart" variants={shoppingCartVariant}
                  whileHover="hover" ></motion.i>
                  </li>
                </ul>
                <motion.form className="d-flex" style={searchBarStyles} variants={searchVariant} initial="initial" animate="animate" exit="exit">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-light" type="submit">Search</button>
                </motion.form>
              </div>
            </div>
        </nav>
    )
}

export default Nav