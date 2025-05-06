
import { Tarjeta } from "./Tarjeta";
import { digimons } from "@/lib/digimon";
export default function GrupoTarjetas() {

    return (
        <div className="flex flex-wrap justify-center gap-10 mt-5 :">
            {digimons.map((tarjeta, index) => (
                <Tarjeta key={index} nombre={tarjeta.nombre} imagen={tarjeta.imagen} />
            ))}
        </div>
    );



}