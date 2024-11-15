import React from "react";

const LoginForm = () => {
    return (
        <form className="mx-auto p-6 md:p-10 border rounded-lg shadow-2xl -translate-y-44 bg-white max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg">
            <div className="mb-5">
                <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">Iniciar Sesión</h1>
                <p className="text-sm text-gray-900 mb-5">
                    Encuentra los mejores servicios de belleza en un solo lugar.
                </p>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                    Correo Electrónico
                    <span className="text-red-600 text-sm font-medium ml-1">*</span>
                </label>
                <input 
                    type="email" 
                    id="email" 
                    className="text-base md:text-lg shadow-sm bg-gray-50 border border-black text-gray-900 rounded-lg focus:outline-none focus:ring-[#ca8a04] focus:border-[#ca8a04] focus:border-2 block w-full p-2.5" 
                    placeholder="correo@correo.com" 
                    required 
                />
            </div>
            <div className="mb-5">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                    Contraseña
                    <span className="text-red-600 text-sm font-medium ml-1">*</span>
                </label>
                <input 
                    type="password" 
                    id="password" 
                    className="text-base md:text-lg shadow-sm bg-gray-50 border border-black text-gray-900 rounded-lg focus:outline-none focus:ring-[#ca8a04] focus:border-[#ca8a04] focus:border-2 block w-full p-2.5" 
                    placeholder="********" 
                    required 
                />
                <a href="/" className="p-2 rounded-xl font-medium inline-block text-sm text-[#ca8a04] mt-2 hover:underline hover:bg-[#ca8a04]/30">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="flex justify-center">
                <button type="submit" className="text-[#422f06] bg-[#ca8a04] hover:bg-[#a16f07] transition-all ease-in-out focus:outline-none font-medium rounded-lg text-sm md:text-base px-4 py-2 w-full">Iniciar sesión</button>
            </div>
            <div className="flex items-center gap-2 mt-3">
                <p className="text-sm text-gray-900 font-medium"> ¿No tienes una cuenta? </p>
                <a href="/signup" className="p-2 rounded-xl font-medium inline-block text-sm text-[#ca8a04] hover:underline hover:bg-[#ca8a04]/30">
                    Unirse Ahora
                </a>
            </div>
        </form>
    )
}

export default LoginForm;
