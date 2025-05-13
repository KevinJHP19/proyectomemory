"use client";
import React, { useEffect, useState } from "react";

import GrupoTarjetas from "@/miscomponentes/GrupoTarjetas";
import { TotalClicks } from "@/context/Contador"; // Importa el componente TotalClicks

export default function Game(  ) {
    const [tiempo, setTiempo] = useState(20); // Tiempo inicial de 20 segundos
    

    const [juegoTerminado, setJuegoTerminado] = useState(false); // Estado para controlar el fin del juego
    

    const [puntos, setPuntos] = useState(0); // Estado para los puntos del jugador
    const [puntosTotales, setPuntosTotales] = useState(0); // Estado para los puntos totales

    // Función para manejar el clic en el botón "JUGAR"
    const manejarClick = () => {
        setJuegoTerminado(false); // Reinicia el estado del juego
        setTiempo(20); // Reinicia el tiempo a 20 segundos
        setPuntos(0); // Reinicia los puntos a 0
    };
    useEffect(() => {
        if (tiempo > 0) {
            const timer = setInterval(() => {
                setTiempo((prevTiempo) => prevTiempo - 1);
            }, 1000);

            return () => clearInterval(timer); // Limpia el intervalo al desmontar el componente
        } else {
            setJuegoTerminado(true); // Marca el juego como terminado cuando el tiempo llega a 0
        }
    }, [tiempo]);

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-2xl font-bold">Página de Juego</h1>
            <p>Contenido de la página de juego.</p>

            <div className="grid grid-cols-5 grid-rows-5 gap-2   " style={{ width: "100vw", height: "160vh" }}>
                <div className="col-span-1 bg-sky-300 border-2 border-sky-500 rounded-lg flex flex-col justify-center items-center gap-4 pt-[250px] pb-[250px] ">
                    <h1 className="font-bold">MEMORY</h1>

                    <div className="flex flex-col items-center gap-2">
                        <span>Tiempo:</span>
                        <div
                            id="tiempo"
                            className="flex justify-center items-center bg-cyan-900 text-white rounded-lg p-2 border-2 border-red-700"
                        >
                            <span className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">{tiempo}</span>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <span>Puntos:</span>
                        <div
                            id="puntos"
                            className="flex justify-center items-center bg-cyan-900 text-white rounded-lg p-2 border-2 border-red-700"
                        >
                            <span className="bg-gray-700 text-white font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto">{puntos}</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <span>Clicks:</span>
                        <div
                            id="clicks"
                            className="flex justify-center items-center bg-cyan-900 text-white rounded-lg p-2 border-2 border-red-700"
                        >
                            <span>
                                <TotalClicks />
                            </span>
                        </div>
                    </div>

                    <button className="mt-4" onClick={manejarClick}>
                        <span className="text-white bg-red-900  font-bold text-2xl w-18 h-10 flex justify-center items-center rounded-md mx-auto ps-[50px] pe-[50px]  ">JUGAR</span>
                    </button>
                </div>
                <div className="col-span-4 row-span-5">
                    {juegoTerminado ? (
                        <div className="flex items-center justify-center ">
                            <h2 className="text-3xl font-bold text-red-600">¡Fin del Juego!</h2>
                        </div>
                    ) : (
                        <GrupoTarjetas tiempoRestante={tiempo} puntos={puntos} setPuntos={setPuntos} />
                    )}
                </div>
            </div>
        </div>
    );
}