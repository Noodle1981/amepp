import React from 'react'
import './Footer.css'

const Footer = () => {
return (
        <div className="footer">
            <div className="boxprincipal">
                <div className="contacto">

                    <div className="col-datos">
                        <div className="card1">
                        <h5>Dirección</h5>
                        <p>9 de Julio 362 este, Capital, San Juan</p>
                        <p>Correo electrónico: info@example.com</p>
                        <p>Teléfono: +01 234 567 88</p>
                        </div>
                        
                        <div className="card2">
                        <h5>Redes Sociales</h5>
                        <ul className="list-redes-sociales">                          
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                        </div>
                        
                    </div>

                    <div className="col-maps">
                        <h5>Ubicación vía Google Maps</h5>
                        <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.34759632338!2d-68.52257672347275!3d-31.542073902340373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96816a9c19234ca5%3A0x1fb2eb11194a06bc!2s9%20de%20Julio%20Este%20362%2C%20J5402AMH%20San%20Juan!5e0!3m2!1ses!2sar!4v1699905145508!5m2!1ses!2sar"
                        width="100%" height="150" // Ajusta el ancho y la altura según tus necesidades
                        style={{ border: 0 }} // Utiliza un objeto de estilo en lugar de una cadena
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>

                
            </div>
            <div className="derechos-reservados">
                <p>© 2024 Derechos de autor: amepp.com.ar</p>
            </div>
        </div>
);
};
export default Footer;