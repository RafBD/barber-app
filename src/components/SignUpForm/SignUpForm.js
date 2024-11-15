import React from "react";

const LoginForm = () => {
    return (
        <div className="px-4 md:p-0">
            <form className="mx-auto p-6 md:p-10 border rounded-lg shadow-2xl -translate-y-44 bg-white max-w-sm sm:max-w-md md:max-w-md lg:max-w-lg">
                <div className="mb-5">
                    <div className="flex items-center justify-between">
                        <h1 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                            Crear Cuenta
                        </h1>
                        <a href="/login" className="p-2 rounded-xl font-medium inline-block text-sm text-[#ca8a04] hover:underline hover:bg-[#ca8a04]/30">
                            Ya tengo una cuenta
                        </a>
                    </div>
                    <p className="text-sm text-gray-900 mb-5">
                        Los mejores servicios de belleza en un solo lugar.
                    </p>
                </div>
                <div className="">
                    <div className="mb-5  md:grid md:grid-cols-2 md:gap-5">
                        <div>
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                    Nombre
                                    <span className="text-red-600 text-sm font-medium ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="text-base shadow-sm bg-gray-50 border border-black text-gray-900 rounded-lg focus:outline-none focus:ring-[#ca8a04] focus:border-[#ca8a04] focus:border-2 block w-full p-2 mb-2"
                                    placeholder="Nombre"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                    Correo Electrónico
                                    <span className="text-red-600 text-sm font-medium ml-1">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="name"
                                    className="text-base shadow-sm bg-gray-50 border border-black text-gray-900 rounded-lg focus:outline-none focus:ring-[#ca8a04] focus:border-[#ca8a04] focus:border-2 block w-full p-2 mb-2"
                                    placeholder="correo@correo.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                    Teléfono
                                    <span className="text-red-600 text-sm font-medium ml-1">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="tel"
                                    className="text-base shadow-sm bg-gray-50 border border-black text-gray-900 rounded-lg focus:outline-none focus:ring-[#ca8a04] focus:border-[#ca8a04] focus:border-2 block w-full p-2"
                                    placeholder="1234567890"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                    Apellidos
                                    <span className="text-red-600 text-sm font-medium ml-1">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="text-base shadow-sm bg-gray-50 border border-black text-gray-900 rounded-lg focus:outline-none focus:ring-[#ca8a04] focus:border-[#ca8a04] focus:border-2 block w-full p-2 mb-2"
                                    placeholder="Nombre"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-900">
                                    Contraseña
                                    <span className="text-red-600 text-sm font-medium ml-1">*</span>
                                </label>
                                <input
                                    type="password"
                                    id="name"
                                    className="text-base shadow-sm bg-gray-50 border border-black text-gray-900 rounded-lg focus:outline-none focus:ring-[#ca8a04] focus:border-[#ca8a04] focus:border-2 block w-full p-2"
                                    placeholder="correo@correo.com"
                                    required
                                />
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="text-[#422f06] bg-[#ca8a04] hover:bg-[#a16f07] transition-all ease-in-out focus:outline-none font-medium rounded-lg text-sm md:text-base px-4 py-2 w-full">Crear Cuenta</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default LoginForm;
