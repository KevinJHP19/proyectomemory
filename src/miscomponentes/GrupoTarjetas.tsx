import { Tarjeta } from "./Tarjeta";
import { pokemonAleatorios } from "@/lib/pokemon";
import { useState } from "react";

interface GrupoTarjetasProps {
    tiempoRestante: number; // Tiempo restante pasado desde el componente padre
    puntos: number;
    setPuntos: (puntos: number ) => void;

}

export default function GrupoTarjetas({ tiempoRestante,puntos, setPuntos }: GrupoTarjetasProps ) {
    const [seleccionadas, setSeleccionadas] = useState<number[]>([]); // IDs de las tarjetas seleccionadas
    const [emparejadas, setEmparejadas] = useState<number[]>([]); // IDs de las tarjetas emparejadas
    const pokemons = pokemonAleatorios();
    

    function manejarSeleccion(id: number) {
        if (tiempoRestante > 0 && seleccionadas.length < 2 && !seleccionadas.includes(id)) {
            const nuevasSeleccionadas = [...seleccionadas, id];
            setSeleccionadas(nuevasSeleccionadas);

            if (nuevasSeleccionadas.length === 2) {
                verificarEmparejamiento(nuevasSeleccionadas);
            }
        }
    }

    function verificarEmparejamiento(tarjetasSeleccionadas: number[]) {
        const [primeraId, segundaId] = tarjetasSeleccionadas;

        // Verifica si ambas tarjetas tienen el mismo nombre
        const primeraTarjeta = pokemons.find((tarjeta) => tarjeta.id === primeraId);
        const segundaTarjeta = pokemons.find((tarjeta) => tarjeta.id === segundaId);

        if (primeraTarjeta?.nombre === segundaTarjeta?.nombre) {
            // Si coinciden, añadirlas a las emparejadas
            setEmparejadas((prev) => [...prev, primeraId, segundaId]);
            setPuntos(puntos + 10); // Incrementa los puntos            
        }

        // Limpiar selección después de un breve tiempo
        setTimeout(() => {
            setSeleccionadas([]); // Oculta las tarjetas si no coinciden
        }, 1000);
    }

    return (
        <div className="flex flex-wrap justify-center gap-5  ">
            {pokemons.map((tarjeta) => (
                <Tarjeta
                    key={tarjeta.id}
                    id={tarjeta.id}
                    nombre={tarjeta.nombre}
                    imagen={tarjeta.imagen}
                    emparejada={emparejadas.includes(tarjeta.id)} // Verifica si está emparejada
                    revelada={seleccionadas.includes(tarjeta.id)} // Verifica si está temporalmente revelada
                    onSeleccionar={manejarSeleccion} // Maneja la selección
                />
            ))}
        </div>
    );
}