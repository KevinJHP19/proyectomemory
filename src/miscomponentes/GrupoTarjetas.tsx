import { Tarjeta } from "./Tarjeta";
import { digimons } from "@/lib/digimon";
import { useState } from "react";

export default function GrupoTarjetas() {
    const [seleccionadas, setSeleccionadas] = useState<number[]>([]); // IDs de las tarjetas seleccionadas
    const [emparejadas, setEmparejadas] = useState<number[]>([]); // IDs de las tarjetas emparejadas

    function manejarSeleccion(id: number) {
        if (seleccionadas.length < 2 && !seleccionadas.includes(id)) {
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
        const primeraTarjeta = digimons.find((tarjeta) => tarjeta.id === primeraId);
        const segundaTarjeta = digimons.find((tarjeta) => tarjeta.id === segundaId);

        if (primeraTarjeta?.nombre === segundaTarjeta?.nombre) {
            // Si coinciden, añadirlas a las emparejadas
            setEmparejadas((prev) => [...prev, primeraId, segundaId]);
        }

        // Limpiar selección después de un breve tiempo
        setTimeout(() => {
            setSeleccionadas([]); // Oculta las tarjetas si no coinciden
        }, 1000);
    }

    return (
        <div className="flex flex-wrap justify-center gap-10 mt-5">
            {digimons.map((tarjeta) => (
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