import React, {useEffect, useState} from "react";
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, NavMenu, MobileIcon, NavLinks, NavItem, NavBtn, NavBtnLink} from "./NavElements";
import {animateScroll as scroll} from "react-scroll";

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
            <IconContext.Provider value={{color: 'rgb(21, 235, 210)'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={toggleHome}>Home</NavLogo>
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
                                          offset={-80}>Account</NavLinks>
                            </NavItem>

                            <NavItem>
                                <NavLinks to="signup" smooth={true} duration={500} spy={true} exact="true"
                                          offset={-80}>SignUp</NavLinks>
                            </NavItem>
                        </NavMenu>
                        <NavBtn>
                            <NavBtnLink to="/signin">Sign In</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;