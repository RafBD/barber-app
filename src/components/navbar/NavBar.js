import React from "react";

const NavBar = () => {
    return (
        <div className="fixed z-10 w-full">
            <nav className="bg-yellow-600 p-4">
                <ul className="flex justify-between">
                    <li>
                        <a href="/" className="text-white">Inicio</a>
                    </li>
                    <li>
                        <a href="#about" className="text-white">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="#gallery" className="text-white">Galería</a>
                    </li>
                    <li>
                        <a href="/book-appointment" className="text-white">Iniciar Sesión</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;