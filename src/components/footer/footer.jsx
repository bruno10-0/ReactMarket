import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

export const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 mt-2 bg-base-100 text-base-content">
                <nav>
                    <h6 className="footer-title">Visita nuestro local</h6>
                    <a href="https://www.google.com/maps/@-27.3693929,-55.8978413,20.25z?entry=ttu" target="_blank" rel="noopener noreferrer" className="link link-hover">Esquina Junín, Entre Ríos 1234</a>
                    <span>Horario</span>
                    <span>Jueves - Sábado</span>
                    <span>11.00 a 17.00</span>
                </nav>
                <nav>
                    <h6 className="footer-title">Servicios</h6>
                    <a className="link link-hover">Reparaciones</a>
                    <a className="link link-hover">Mantenimientos</a>
                    <a className="link link-hover">Vendemos por vos</a>
                </nav>
                <nav>
                    <h6 className="footer-title">ReactMarket</h6>
                    <a className="link link-hover">Acerca de nosotros</a>
                    <a className="link link-hover">Contáctenos</a>
                    <a className="link link-hover">Tienda</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a><FaWhatsapp className="cursor-pointer text-2xl"/></a>
                        <a><CiInstagram className="cursor-pointer text-2xl"/></a>
                    </div>
                </nav>
            </footer>
        </div>
    )
}
