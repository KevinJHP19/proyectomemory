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


export const Tarjeta = ({nombre, imagen}: TarjetaProps) =>{

    const [clicktarjeta, setClicktarjeta] = useState(0);
    const { incrementarGlobal } = useContadorGlobal(); // Usa el contexto del contador global

    function Contadortarjeta(){
        setClicktarjeta(clicktarjeta + 1);
        incrementarGlobal(); // Incrementa el contador global
    }
    return (
        
            <Card className="bg-[#F2EBCB]" onClick={Contadortarjeta}>
            <CardHeader>
                <CardTitle>{nombre}</CardTitle>
                
            </CardHeader>
            <CardContent>
                <img src={imagen} alt={nombre}  className="w-[150px] h-[150px]"/>
            </CardContent>
            <CardFooter className="flex justify-center items-center">
                <div className="border-2 border-red-700 p-[10px]">
                    <p>Clicks : <span>{clicktarjeta}</span></p>
                </div>
            </CardFooter>
            
            </Card>
        

    );
}