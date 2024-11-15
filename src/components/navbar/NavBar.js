import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // Importa el hook de Auth0

const NavBar = () => {
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0(); // Desestructuramos las funciones de Auth0
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#eaa108] fixed w-full z-20 top-0 start-0">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpjtvi3c0mgtGBXZ2jVVGn5-gUgxktZ7QPw&s"
                        className="h-8"
                        alt="BRB Logo"
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        BRB Shop
                    </span>
                </a>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    {isAuthenticated ? (
                        // Si está autenticado, muestra el botón para cerrar sesión
                        <button
                            onClick={() => logout({ returnTo: window.location.origin })} // Cerrar sesión
                            className="text-[#422f06] bg-[#ca8a04] hover:bg-[#a16f07] transition-all ease-in-out focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                            Cerrar sesión
                        </button>

                    ) : (
                        // Si no está autenticado, muestra el botón para iniciar sesión
                        <button
                            onClick={() => loginWithRedirect()} // Iniciar sesión
                            className="text-[#422f06] bg-[#ca8a04] hover:bg-[#a16f07] transition-all ease-in-out focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center"
                        >
                            Iniciar sesión
                        </button>
                    )}
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#a16f07] focus:outline-none"
                        aria-controls="navbar-sticky"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? (
                            <svg
                                className="w-5 h-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        )}
                    </button>
                </div>
                <div
                    className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                        } md:opacity-100 md:max-h-full`}
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-[#eaa108] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 text-white rounded md:p-0 hover:underline transition-all ease-in-out"
                            >
                                Inicio
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 text-white rounded md:p-0 hover:underline transition-all ease-in-out"
                            >
                                Acerca de
                            </a>
                        </li>
                        <li>
                            <a
                                href="/services"
                                className="block py-2 px-3 text-white rounded md:p-0 hover:underline transition-all ease-in-out"
                            >
                                Servicios
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 text-white rounded md:p-0 hover:underline transition-all ease-in-out"
                            >
                                Contacto
                            </a>
                        </li>
                        {isAuthenticated ? (
                            <li>
                                <a
                                    href="/services"
                                    className="block py-2 px-3 text-white rounded md:p-0 hover:underline transition-all ease-in-out"
                                >
                                    Mis Reservas
                                </a>
                            </li>

                        ) : (
                            ""
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
