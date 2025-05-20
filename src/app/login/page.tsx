'use client'
import { datos_usuarios } from "@/miscomponentes/localStorage"
import { useState, useEffect } from "react"

type Usuario = {
  id: number
  nombre: string
  email: string
  password: string
}


export default function Login(){

    const [usuarios, setusuario] = useState<Usuario[]>([])
    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() =>{
        const datosguardados = localStorage.getItem('datos_usuarios')
        if(!datosguardados){
            localStorage.setItem("datos_usuarios", JSON.stringify(datos_usuarios))
        }else {
            setusuario(JSON.parse(datosguardados))
        }
    }, [])

    const confirmarlogin = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const usuarioValido = usuarios.find(
            (u) => u.email === email && u.password === password
            
        )
        if(usuarioValido){
            localStorage.setItem("usuario", JSON.stringify(usuarioValido));
            window.alert(`Bienvenido, ${usuarioValido.nombre}`)
            
        }
    }


    console.log('Login cargador')
    return(
        <div className="flex items-center justify-center mt-[30px] bg-gray-100">
            <div className="w-full max-w-lg p-12 bg-white rounded-xl shadow-2xl">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Iniciar sesión</h1>
            <form action="" onSubmit={confirmarlogin} className="space-y-7">
            <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2 text-bold">
                Email:
            </label>
            <input
                id="email"
                type="email"
                className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                placeholder="Ingresa tu email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-2 text-bold">
                Contraseña:
            </label>
            <input
                id="password"
                type="password"
                className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <button
            type="submit"
            className="w-full py-3 px-5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            Iniciar sesión
          </button>
            </form>
            </div>
        </div>

    )

}