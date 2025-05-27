'use client'

import { useState} from "react"
type Usuario = {
  id: number
  nombre: string
  email: string
  password: string
}
export default function Register() {
  

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmarPassword, setConfirmarPassword] = useState('')
  const [error, setError] = useState('')
  const role = 'user' // Asignar un rol por defecto

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    const data = { name, email, role, password, password_confirmation: confirmarPassword }
    try {
      const respuesta = await fetch("https://m7-daw2huamanpinto-fpllefiacodespaces-laravel-production-6c3c.up.railway.app/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "aplicaction/json"
        },
        body: JSON.stringify(data)
    })
    const respuestJson  = await respuesta.json()
    console.log("Respuesta del registro:", respuestJson)
    if(respuestJson.message === "The email has already been taken."){
      setError("El correo electrónico ya está en uso. Por favor, utiliza otro.")

      
    }else {
      alert("Usuario registrado correctamente")
      window.location.href = "/login" // Redirigir a la página de inicio de sesión
    }
    
  }

    catch (error) {
      setError("Error al registrar el usuario. Inténtalo de nuevo.")
    }
  }

  return (
    <div className="flex items-center justify-center mt-[30px] bg-gray-100 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-2" htmlFor="nombre">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div className="mb-4">
          <label className="block text-base font-medium text-gray-700 mb-2" htmlFor="confirmar-password">
            Confirmar Contraseña:
          </label>
          <input
            type="password"
            id="confirmar-password"
            name="confirmar-password"
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
            value={confirmarPassword}
            onChange={(e) => setConfirmarPassword(e.target.value)}
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
