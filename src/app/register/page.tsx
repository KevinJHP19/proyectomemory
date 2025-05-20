'use client'
import { datos_usuarios } from "@/miscomponentes/localStorage"
import { useState, useEffect } from "react"

export default function Register() {
  const [usuarios, setUsuarios] = useState([])

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const datosGuardados = localStorage.getItem('datos_usuarios')
    if (!datosGuardados) {
      localStorage.setItem("datos_usuarios", JSON.stringify(datos_usuarios))
      setUsuarios(datos_usuarios)
    } else {
      setUsuarios(JSON.parse(datosGuardados))
    }
  }, [])

  const confirmarRegistro = (e) => {
    e.preventDefault()

    const emailExistente = usuarios.find(u => u.email === email)
    if (emailExistente) {
      alert("Este correo ya está registrado.")
      return
    }

    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      email,
      password
    }

    const nuevosUsuarios = [...usuarios, nuevoUsuario]
    localStorage.setItem("datos_usuarios", JSON.stringify(nuevosUsuarios))
    setUsuarios(nuevosUsuarios);

    //crea un local storage para el usuario logeado
    

    alert("Usuario registrado correctamente.")
    setNombre("")
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex items-center justify-center mt-[30px] bg-gray-100 ">
      <form
        onSubmit={confirmarRegistro}
        className="bg-white p-10 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-2" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-2" htmlFor="correo">
            Correo:
          </label>
          <input
            type="email"
            id="correo"
            name="correo"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-2" htmlFor="password">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Registrarse
        </button>
      </form>
    </div>
  )
}
