import './navBarStyles.css'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
export const NavBar = () => {
    return (
        <>
            <header>
                <nav>
                    <ul className="nav-bar">
                        <li className="logo">
                            <a href="#">
                                <svg
                                    width="40"
                                    height="40"
                                    viewBox="0 0 76 65"
                                    fill="none" xmlns="http://www.w3.org/2000/svg"><path
                                    d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>
                            </a>
                        </li>
                        <input type="checkbox" id='check' />
                        <span className="menu">
                            <li><a href="#">lorem</a></li>
                            <li><a href="#">lorem</a></li>
                            <li><a href="#">lorem</a></li>
                            <li><a href="#">lorem</a></li>
                            <li><a href="#">lorem</a></li>
                            <label htmlFor="check" className='close-menu'><IoCloseOutline/></label>
                        </span>
                        <label htmlFor="check" className='open-menu'><RxHamburgerMenu/></label>
                    </ul>
                </nav>
            </header>
        </>
    )
}
