'use client'
import React, { useState} from "react";
import {
    Card,
    CardContent,
    
    CardHeader,
    CardTitle,
    CardFooter,

} from "@/components/ui/card"
import { useContadorGlobal } from "@/context/Contador" // Importa el contexto del contador global

 
// Define the props interface
interface TarjetaProps {
    nombre: string;
    imagen: string;
}

export const Tarjeta = ({ nombre, imagen }: TarjetaProps) => {
    const [clicktarjeta, setClicktarjeta] = useState(0);
    const [revelada, setRevelada] = useState(false);
    const { incrementarGlobal } = useContadorGlobal(); // Usa el contexto del contador global

    function Contadortarjeta() {
        if (!revelada) {
            setRevelada(true);
            setClicktarjeta(clicktarjeta + 1);
            incrementarGlobal(); // Incrementa el contador global

            // Ocultar la carta después de 1 segundo
            setTimeout(() => {
                setRevelada(false);
            }, 1000);
        }
    }

    return (
        <Card
            className={`bg-[#F2EBCB] ${!revelada ? "bg-cover bg-center  transition duration-150 ease-in-out" : " transition duration-150 ease-in-out"}`}
            style={{
                backgroundImage: !revelada
                    ? "url('https://i.pinimg.com/originals/34/b4/df/34b4df40b5fc257204c98782b723c25c.png')"
                    : "none",
            }}
            onClick={Contadortarjeta}
        >
            <CardHeader>
                <CardTitle>{revelada ? nombre : "?"}</CardTitle>
            </CardHeader>
            <CardContent>
                {revelada ? (
                    <img
                        src={imagen}
                        alt={nombre}
                        className="w-[150px] h-[150px]"
                    />
                ) : (
                    <div className="w-[150px] h-[150px] opacity-0">
                        {/* Espacio vacío para mantener el diseño */}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-center items-center">
                <div className="border-2 border-red-700 p-[10px]">
                    <p className={`${revelada ? "text-black" : "text-white"} font-bold`}>
                        Clicks : <span>{clicktarjeta}</span>
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
};