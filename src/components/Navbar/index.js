import React, {useEffect, useState} from "react";
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavLinks, NavItem, NavBtn, NavBtnLink} from "./NavElements";
import {animateScroll as scroll} from "react-scroll";
import {logo} from "../../images/logo.png";
//allows us to pass any styling value into any icons inside my navbar
import {IconContext} from "react-icons/lib";

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();

    };


    return (
        <>
            <IconContext.Provider value={{color: 'white'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}><img src={require('../../images/logo.png')} alt="logo"
                                                                  height={80} width={200}/></NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>

                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact="true"
                                          offset={-80}>About</NavLinks>
                            </NavItem>


                            <NavItem>
                                <NavLinks to="training" smooth={true} duration={500} spy={true} exact="true"
                                          offset={-80}>Training</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="account" smooth={true} duration={500} spy={true} exact="true"
                                          offset={-80}>Quiz</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true"
                                          offset={-80}>SignUp</NavLinks>
                            </NavItem>
                        </NavMenu>


                        <NavBtn>
                            {/*<NavBtnLink to="/signup">Register</NavBtnLink>*/}

                            <NavBtnLink to="/signin">Sign In / Register</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;