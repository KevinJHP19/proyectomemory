import {
    Card,
    CardContent,
    
    CardHeader,
    CardTitle,

} from "@/components/ui/card"
 
// Define the props interface
interface TarjetaProps {
    nombre: string;
    imagen: string;
}

export const Tarjeta = ({nombre, imagen}: TarjetaProps) =>{
    return (
        <Card className="bg-[#F2EBCB]">
        <CardHeader>
            <CardTitle>{nombre}</CardTitle>
            
        </CardHeader>
        <CardContent>
            <img src={imagen} alt={nombre}  className="w-[150px] h-[150px]"/>
        </CardContent>
        
        </Card>

    );
}