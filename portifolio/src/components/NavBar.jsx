import React from "react";
import "../style/navbar.css";
import logo from "/logo-jv.png";

const NavBar = () => {
    const [scrolled, setScrolled] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    return (
        <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <div className="logo">
                <img src={logo} alt="Logo João Vitor" />
            </div>

            <ul className="nav-list">
                <li className="nav-item" onClick={() => (window.location.href = "#home")}>Home</li>
                <li className="nav-item" onClick={() => (window.location.href = "#projects")}>Projetos</li>
                <li className="nav-item" onClick={() => (window.location.href = "#sobre")}>Sobre</li>
                <li className="nav-item" onClick={() => (window.location.href = "#contato")}>Contato</li>
            </ul>
        </nav>
    );
};

export default NavBar;
