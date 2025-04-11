import GrupoTarjetas from "@/miscomponentes/GrupoTarjetas";
export default function Game(){
    console.log("Esta es la página de juego.");
    return (
        <div className="flex flex-col items-center justify-center w-full">
      <h1 className="text-2xl font-bold">Página de Juego</h1>
      <p>Contenido de la página de juego.</p>
        <GrupoTarjetas /> {/* Aquí se incluye el componente GrupoTarjetas */}
    </div>
    );
}