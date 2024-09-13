import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import BookAppointment from "../BookAppointment";
import NavBar from "../../components/navbar/NavBar";
import "./Home.css";

const Home = () => {

    const { loginWithRedirect, isAuthenticated } = useAuth0();
    console.log("autenticado", isAuthenticated);

    return (
        <div
            className="scroll-smooth"
        >
            <NavBar />

            <header className="contenedor">
                <h1 className="mt-5 text-5xl z-10"
                >
                    Bienvenido a Barber Shop
                </h1>
                <p 
                    className="text-center text-2xl z-10"
                >
                    Tu lugar de confianza para un corte de cabello y afeitado
                </p>        
            </header>

            <section 
                id="about"
                className="mt-10 mb-10 p-7 bg-gray-100"
            >
                <h2
                    className="text-2xl font-semibold text-center"
                >
                    Sobre nosotros
                </h2>
                <div
                    className="text-gray-900 w-3/4 mx-auto p-4"
                >
                    <p
                        className="text-gray-900 text-lg mt-4 mb-4"
                    >
                        Somos una barbería con más de 10 años de experiencia. Nuestro objetivo es ofrecer un servicio de calidad y un trato personalizado a cada uno de nuestros clientes. Ven a visitarnos y disfruta de un ambiente relajado y agradable.

                    </p>
                </div>
                
            </section>

            <section 
                id="gallery"
                className="mt-10 mb-10 p-7 bg-gray-100"
            >
                <h2
                    className="text-2xl font-semibold text-center"
                >
                    Galería
                </h2>
                <div className="grid grid-cols-4 gap-4 mt-5">
                    <div className="relative overflow-hidden w-full h-auto">
                        <img src="https://plus.unsplash.com/premium_photo-1721203654854-d5b79749560a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen"
                        className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                    <div className="relative overflow-hidden w-full h-auto">
                        <img src="https://images.unsplash.com/photo-1642504640216-a2a8cce892e6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="relative overflow-hidden w-full h-auto">
                        <img src="https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="relative overflow-hidden w-full h-auto">
                        <img src="https://images.unsplash.com/photo-1541533848490-bc8115cd6522?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="relative overflow-hidden w-full h-auto">
                        <img src="https://plus.unsplash.com/premium_photo-1661645807231-2635324e8833?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="relative overflow-hidden w-full h-auto">
                        <img src="https://plus.unsplash.com/premium_photo-1661645788141-8196a45fb483?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="relative overflow-hidden w-full h-auto">
                        <img src="https://images.unsplash.com/photo-1606333259737-6da197890fa2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110" />
                    </div>
                    <div className="relative overflow-hidden w-full h-auto">
                        <img src="https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="imagen" className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110" />
                    </div>  
                </div>
            </section>

            <section id="location">
                <div>
                    <iframe
                        title="mapa"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.010568178476!2d-99.1339766850827!3d19.43260748688886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff9c9b1d0f7b%3A0x6d9d5b6c1f7f7f4c!2sPalacio%20de%20Bellas%20Artes!5e0!3m2!1ses-419!2smx!4v1627360701127!5m2!1ses-419!2smx"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </section>
            {/* {isAuthenticated ? (
                    <>
                        <BookAppointment/>
                    </>
                ): (
                    <button 
                    onClick={() => loginWithRedirect()}
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
                    >
                    Iniciar sesión
                    </button>
            )} */}
        </div>
        
    )
}

export default Home;

