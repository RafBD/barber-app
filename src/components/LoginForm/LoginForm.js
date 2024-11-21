import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginForm = () => {

    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();



    return (
        <div className="mx-auto p-6 md:p-10 border rounded-lg shadow-2xl -translate-y-24 bg-white max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg">
            <h1 className="text-xl md:text-2xl text-center font-semibold text-gray-900 mb-2">
                Iniciar Sesión
            </h1>
            <p className="text-center text-gray-500 mb-6">
                Para agendar una cita con nosotros debes de iniciar sesión
            </p>
            <div className="flex justify-center">
                <button
                    onClick={() => loginWithRedirect()}
                    className="text-[#422f06] bg-[#ca8a04] hover:bg-[#a16f07] transition-all ease-in-out focus:outline-none font-medium rounded-lg text-sm md:text-base px-4 py-2 w-full"
                >
                    Iniciar sesión
                </button>
            </div>

        </div>

    )
}

export default LoginForm;
