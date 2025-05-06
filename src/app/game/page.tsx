import GrupoTarjetas from "@/miscomponentes/GrupoTarjetas";
export default function Game(){
    console.log("Esta es la página de juego.");
    return (
        <div className="flex flex-col items-center justify-center w-full">

      <h1 className="text-2xl font-bold">Página de Juego</h1>
      <p>Contenido de la página de juego.</p>
      
<div className="grid grid-cols-5 grid-rows-5 gap-4 border-2 border-neutral-950 ">
    <div className="col-span-1 bg-sky-300 border-2 border-sky-500 rounded-lg flex flex-col justify-center items-center gap-4 pt-[250px] pb-[250px]">
        <h1 className="font-bold">MEMORY</h1>

        <div className="flex flex-col items-center gap-2">
            <span>Tiempo:</span>
            <div id="tiempo" className=" flex justify-center items-center bg-cyan-900 text-white rounded-lg p-2 border-2 border-red-700">
                <span>0</span>
            </div>
        </div>

        <div className="flex flex-col items-center gap-2">
            <span>Puntos:</span>
            <div id="puntos" className="flex justify-center items-center bg-cyan-900 text-white rounded-lg p-2 border-2 border-red-700">
                <span>0</span>
            </div>
        </div>

        <button className="mt-4">
            <span className="text-white bg-red-900 p-4 rounded-lg">JUGAR</span>
        </button>
    </div>
    <div className="col-span-4 row-span-5"><GrupoTarjetas/></div>
</div>
    
      
      
        
    </div>
    );
}