import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const LogOutButton = () => {
    const { logout } = useAuth0();
    return(
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg" onClick = {() => logout()}>
        <i className="pi pi-sign-out"></i>
        Cerrar Sesión
        </button>
    )
}