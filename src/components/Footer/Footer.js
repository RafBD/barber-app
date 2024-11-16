import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#eaa108] py-6">
            <div className="max-w-screen-lg mx-auto text-center text-white">
                <p>&copy; 2024 Barber Shop. Todos los derechos reservados.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.instagram.com/_bbaston/" target="_blank" rel="noopener noreferrer" className="text-white">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
