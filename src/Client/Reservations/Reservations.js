import React from "react";

import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer/Footer";

const Reservations = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar />
            <div className="flex flex-col gap-4 p-6 rounded-lg shadow-2xl mt-12 flex-grow">
                <h2 className="text-xl text-black/60 font-bold mt-5">Mis reservas</h2>
            </div>
            <Footer />
        </div>
    );
};

export default Reservations;
