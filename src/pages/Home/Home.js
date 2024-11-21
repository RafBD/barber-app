import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import BookAppointment from "../BookAppointment";
import NavBar from "../../components/navbar/NavBar";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import data from "../../data/data.json";
import "./Home.css";

const Home = () => {

    //const { loginWithRedirect, isAuthenticated } = useAuth0();
    // console.log("autenticado", isAuthenticated);

    return (
        <div className="scroll-smooth">
            <NavBar />
            {/* HERO */}
            <header className="contenedor">
                <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white text-center">
                    Bienvenido a Barber Shop
                </h1>
                <p class="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 text-center">
                    Tu lugar de confianza para un corte de cabello y afeitado
                </p>
                <a href="/services" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#422f06] bg-[#eaa108] rounded-lg hover:bg-[#ca8a04]">
                    Conoce nuestros servicios
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </header>

            {/* ABOUT  */}
            
            <section id="about" class="bg-white">
                <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                    <div class="font-light sm:text-lg">
                        <h2 class="mb-4 text-4xl tracking-tight font-bold">Barber Shop</h2>
                        <p class="mb-4">
                            Nos destacamos por proporcionar una atención más íntima, personalizada y detallada, transformando esta tradición consagrada en una experiencia placentera y destacada para el hombre de hoy, donde cortarse el cabello, cuidarse la piel y afeitarse se convierten en una terapia de amigos y relajación, más que en un hábito.
                        </p>
                        <p class="mb-4">
                            Nos esforzamos por brindar un santuario de cuidado personal que combine a la perfección; el encanto del pasado con las exigencias del presente.
                        </p>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-8">
                        {data.about.map((image, index) => (
                            <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full rounded-lg ${index === 1 ? "mt-4 lg:mt-10" : ""}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <Gallery/>

            {/* TESTIMONIALS */}
            <section className="bg-white py-8 px-4">
                <div className="max-w-screen-lg mx-auto text-center">
                    <h2 className="text-4xl font-semibold text-gray-800 mb-6">Lo que dicen nuestros clientes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {data.testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                                <p className="mt-2 font-semibold">{testimonial.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* <section id="location">
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
            </section> */}
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

            <Footer />
        </div>

    )
}

export default Home;

