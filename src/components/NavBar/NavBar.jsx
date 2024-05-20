import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';


import groupLogo from "../../assets/img/logo.svg";
import faceIcon from "../../assets/img/nav-icon-face.svg";
import instaIcon from "../../assets/img/nav-icon-insta.svg";
import './NavBar.css';


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={groupLogo}
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#about-us" 
                        className={activeLink === "about-us" ? 'active navbar-link' : "navbar-link"} 
                        onClick={() => onUpdateActiveLink('about-us')} >Sobre nosotros</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? 'active navbar-link' : "navbar-link"} 
                        onClick={() => onUpdateActiveLink('projects')} >Proyectos</Nav.Link>
                        <Nav.Link href="#funding" className={activeLink === "funding" ? 'active navbar-link' : "navbar-link"} 
                        onClick={() => onUpdateActiveLink('funding')} >Financiamiento</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className='social-icon'>
                            <a href="https://www.facebook.com/share/gq9jYzxsWRgDGzyP/?mibextid=qi2Omg">
                                <img src={faceIcon} alt="" />
                            </a>
                            <a href="https://www.instagram.com/lanachoenalemania?igsh=eThmbmp0aDA2MHNm">
                                <img src={instaIcon} alt="" />
                            </a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Contactanos</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;