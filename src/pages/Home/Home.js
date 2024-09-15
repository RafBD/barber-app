import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import BookAppointment from "../BookAppointment";
import NavBar from "../../components/navbar/NavBar";
import imagesData from "../../data/imagesData.json";
import "./Home.css";

const Home = () => {

    //const { loginWithRedirect, isAuthenticated } = useAuth0();
    // console.log("autenticado", isAuthenticated);

    return (
        <div className="scroll-smooth">
            <NavBar />
            {/* HERO */}
            <header className="contenedor">
                <h1 className="mt-5 text-5xl z-10"
                >
                    Bienvenido a Barber Shop
                </h1>
                <p 
                    className="text-center text-2xl z-10 "
                >
                    Tu lugar de confianza para un corte de cabello y afeitado
                </p>
                <a href="#" className="text-white text-lg p-3 font-semibold rounded-lg mt-6 bg-[#CA8A04] z-10">
                    Conoce nuestros servicios
                </a>

            </header>

            {/* ABOUT  */}
            <section 
                id="about"
                className="p-7 bg-gray-100"
            >
                
                <div className="text-gray-900 w-3/4 mx-auto p-4 m-20 grid grid-cols-2 gap-10">
                    <div className="p-4 text-justify">
                        <div>
                            <h2 className="text-4xl font-semibold gold">
                                Barber Shop
                            </h2>
                        </div>
                        <div>
                            <p className="text-gray-900 text-lg mt-4 mb-4 leading-loose">
                                Nos destacamos por proporcionar una atención más íntima, personalizada y detallada, transformando esta tradición consagrada en una experiencia placentera y destacada para el hombre de hoy, donde cortarse el cabello, cuidarse la piel y afeitarse se convierten en una terapia de amigos y relajación, más que en un hábito.
                            </p>
                            <p className="text-gray-900 text-lg mt-4 mb-4 leading-loose">
                                Nos esforzamos por brindar un santuario de cuidado personal que combine a la perfección; el encanto del pasado con las exigencias del presente.
                            </p>
                        </div>
                        <div className="mt-10">
                            <a href="/" className="text-white text-lg p-4 rounded-lg mt-4 bg-[#CA8A04] uppercase font-semibold tracking-[.2rem] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-300">
                                conócenos
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 h-auto">
                        {imagesData.about.map((image, index) => (
                            <img 
                                src={image.src} 
                                alt={image.alt} 
                                className="w-full h-full object-cover" 
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section 
                id="gallery"
                className="p-7"
            >
                <div className="text-gray-900 w-3/4 mx-auto">
                    <div className="p-4">
                        <div>
                                <h2 className="text-4xl font-semibold gold">
                                    Galería
                                </h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-5 grid-gallery">
                            {imagesData.gallery.map((image, index) => (
                                <div key={index} className="relative overflow-hidden w-full h-auto">
                                    <img 
                                        src={image.src} 
                                        alt={image.alt} 
                                        className="w-full h-auto object-contain transition-transform duration-500 hover:scale-110" 
                                    />
                                </div> 
                            ))}
                        </div>
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

