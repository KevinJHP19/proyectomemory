'use client'
import React, { useState} from "react";
//importame el  Imag
import Image from "next/image";
import {
    Card,
    CardContent,
    
    CardHeader,
    CardTitle,
    CardFooter,

} from "@/components/ui/card"
import { useContadorGlobal } from "@/context/Contador" // Importa el contexto del contador global

 
interface TarjetaProps {
    id: number;
    nombre: string;
    imagen: string;
    onSeleccionar: (id: number) => void; // Callback function to handle selection
    emparejada: boolean;
    revelada: boolean;
}

export const Tarjeta = ({ id, nombre, imagen, emparejada, revelada, onSeleccionar }: TarjetaProps) => {
    const [clicktarjeta, setClicktarjeta] = useState(0);
    const { incrementarGlobal } = useContadorGlobal(); // Usa el contexto del contador global

    function manejarClick() {
        if (!revelada && !emparejada) {
            setClicktarjeta(clicktarjeta + 1); // Incrementa el contador local
            incrementarGlobal(); // Incrementa el contador global
            onSeleccionar(id); // Notifica al componente padre
        }
    }

    return (
        <Card
            className={`bg-[#F2EBCB] ${!revelada && !emparejada ? "bg-cover bg-center transition duration-150 ease-in-out" : "transition duration-150 ease-in-out"}`}
            style={{
                backgroundImage: !revelada && !emparejada
                    ? "url('https://i.pinimg.com/originals/34/b4/df/34b4df40b5fc257204c98782b723c25c.png')"
                    : "none",
            }}
            onClick={manejarClick}
        >
            <CardHeader>
                <CardTitle>{revelada || emparejada ? nombre : "?"}</CardTitle>
            </CardHeader>
            <CardContent>
                {revelada || emparejada ? (
                    <Image
                        src={imagen}
                        alt={nombre}
                        
                        width={150}
                        height={150}
                    />
                ) : (
                    <div className="w-[150px] h-[150px] opacity-0">
                        {/* Espacio vacío para mantener el diseño */}
                    </div>
                )}
            </CardContent>
            <CardFooter className="flex justify-center items-center">
                <div className="border-2 border-red-700 p-[10px]">
                    <p className={`${revelada || emparejada ? "text-black" : "text-white"} font-bold`}>
                        Clicks : <span>{clicktarjeta}</span>
                    </p>
                </div>
            </CardFooter>
        </Card>
    );
};