import React from 'react'
import { Link } from "react-router-dom";
//import Portada from "images/inicio.jpg";

export default function Inicio() {
    return (
        <div className="inicio">
            <Link to="/productos">
            <h1><center>Productos</center></h1>
            </Link>
            <img src="https://img.freepik.com/vector-gratis/telefonos-moviles-evolucion-concepto-vector-dibujos-animados-generaciones-telefonos-celulares-modelos-antiguos-teclados-numericos-fisicos-antenas-retractiles-dispositivos-modernos-e-inteligentes-ilustracion-pantalla-tactil_1441-3106.jpg?w=2000" alt=""/>
        </div>
    )
}
