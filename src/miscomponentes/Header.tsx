'use client'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
import { useEffect, useState } from "react";


  export default function Header() {
    const [nombre, setNombre] = useState('');
    useEffect(() => {
      const usuarioGuardado = localStorage.getItem('usuario');
      if (usuarioGuardado) {
        const usuario = JSON.parse(usuarioGuardado);
        setNombre(usuario.name || 'Usuario');
      }
    }
    , []);
    return (
      <div className=" dark:bg-gray-900 flex justify-center items-center p-4 w-full">
      <NavigationMenu className="flex justify-center items-center">
        {nombre && (
                <div className="ml-8 text-white font-semibold text-lg me-5">
                    Bienvenido, {nombre}
                    

        <button
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            onClick={async () => {
                try {
                    const response = await fetch("https://m7-daw2huamanpinto-fpllefiacodespaces-laravel-production-6c3c.up.railway.app/api/logout", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${localStorage.getItem("token")}`
                        }
                    });
                    if (response.ok) {
                        localStorage.removeItem("token");
                        localStorage.removeItem("usuario");
                        alert("Sesión cerrada correctamente.");
                        window.location.href = "/"; // Redirigir a la página de inicio
                    } else {
                        alert("Error al cerrar sesión. Inténtalo de nuevo.");
                    }
                } catch  {
                    alert("Error al cerrar sesión. Inténtalo de nuevo.");
                }
            }}
        >
            Cerrar Sesión
        </button>

                    
                    

                </div>
            )}
          <NavigationMenuList className="gap-40">
            <NavigationMenuItem >
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                Inicio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/about">
                Acerca de
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/game">
                Juego
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/login">
              Iniciar Sesion
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/register">
              Registrate
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
      </div>
    );
  }