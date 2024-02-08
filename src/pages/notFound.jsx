import { NavBar } from "../components/navBar/navBar";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div>
            <NavBar />
            <div className="bg-base-300 w-full h-screen flex flex-col justify-center items-center gap-4">
                <h1>404</h1>
                <h2 style={{ letterSpacing: "1px" }}>La página que estás buscando no se encontró</h2>
                <Link to="/">
                    <button className="btn bg-primary text-base-100 font-light" style={{ letterSpacing: "4px" }}>Volver al inicio</button>
                </Link>
                <div className="w-full bg-primary text-center text-base-100 absolute bottom-0 p-2" style={{ letterSpacing: "2px", fontSize:"11px"  }}>
                    <p>Es posible que la página no exista, esté en mantenimiento o se encuentre en proceso de mejoras. Por favor, inténtalo nuevamente más tarde.</p>
                </div>
            </div>
        </div>
    );
};
