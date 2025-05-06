'use client'
import React, { useState } from "react";
import {
    Card,
    CardContent,
    
    CardHeader,
    CardTitle,
    CardFooter,

} from "@/components/ui/card"
 
// Define the props interface
interface TarjetaProps {
    nombre: string;
    imagen: string;
}

export const Tarjeta = ({nombre, imagen}: TarjetaProps) =>{

    const [clicktarjeta, setClicktarjeta] = useState(0);

    function Contadortarjeta(){
        setClicktarjeta(clicktarjeta + 1);
        console.log("Contador de tarjeta: " + clicktarjeta);
        

    }
    return (
        <a onClick={Contadortarjeta}  className="flex justify-center items-center">
            <Card className="bg-[#F2EBCB]">
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
        </a>

    );
}