import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Button } from "primereact/button";
import data from "../../data/data.json";

const ServicesSection = () => {
    const servicios = data.servicios;

    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex flex-col gap-4 p-6 rounded-lg shadow-2xl mt-12 flex-grow">
                <h2 className="text-xl text-black/60 font-bold mt-5">Servicios</h2>
                <Accordion className="flex flex-col gap-6 shadow-xl p-6">
                    {Object.keys(servicios).map((categoria) => (
                        <AccordionTab key={categoria}
                            header={<span className="text-xl font-semibold">{categoria.charAt(0).toUpperCase() + categoria.slice(1)}</span>}
                        >
                            <div className="space-y-4">
                                {servicios[categoria].map((servicio, index) => (
                                    <div key={index} className="md:flex items-center justify-between p-6 rounded-lg shadow-lg">
                                        <div>
                                            <h3 className="text-base font-semibold">{servicio.nombre}</h3>
                                            <p className="text-gray-500">{servicio.descripcion}</p>
                                        </div>
                                        <div className="mt-3 md:mt-0 md:flex md:gap-4">
                                            <div className="md:text-center">
                                                <p className="font-bold">{servicio.precio}</p>
                                                <p>{servicio.tiempo} minutos</p>
                                            </div>
                                            <div>
                                                <Button
                                                    label="Reservar"
                                                    icon="pi pi-calendar"
                                                    className="mt-3 md:mt-0 bg-[#a16f07] hover:bg-[#8e5707] transition-all duration-300 p-2 text-white text-base font-semibold rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </AccordionTab>
                    ))}
                </Accordion>
            </div>
            <Footer />
        </div>
    );
};

export default ServicesSection;
