import './navBarStyles.css';
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

export const NavBar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos === 0);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [prevScrollPos]);

    const navStyle = {
        top: visible ? "0" : "-80px",
    };

    return (
        <header>
            <nav>
                <ul id="nav" className="nav-bar" style={navStyle}>
                    <li className="logo">
                        <a href="#">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 76 65"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" />
                            </svg>
                        </a>
                    </li>
                    <input type="checkbox" id="check" />
                    <span className="menu">
                        <li><a href="#">lorem</a></li>
                        <li><a href="#">lorem</a></li>
                        <li><a href="#">lorem</a></li>
                        <li><a href="#">lorem</a></li>
                        <li><a href="#">lorem</a></li>
                        <label htmlFor="check" className="close-menu"><IoCloseOutline /></label>
                    </span>
                    <label htmlFor="check" className="open-menu"><RxHamburgerMenu /></label>
                </ul>
            </nav>
        </header>
    );
};
