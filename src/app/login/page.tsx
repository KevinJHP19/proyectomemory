'use client'
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        const data = { email, password }

        try {
            // Login: obtener token
            const respuesta = await fetch("https://m7-daw2huamanpinto-fpllefiacodespaces-laravel-production-6c3c.up.railway.app/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const respuestaJson = await respuesta.json()
            console.log("Respuesta del login:", respuestaJson)
            if ( respuestaJson.token) {
                localStorage.setItem("token", respuestaJson.token)

                // Segunda consulta: obtener datos del usuario con el token
                const respuestame = await fetch("https://m7-daw2huamanpinto-fpllefiacodespaces-laravel-production-6c3c.up.railway.app/api/me", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${respuestaJson.token}`
                    }
                });

                const datosUsuario = await respuestame.json()
                console.log("Datos del usuario:", datosUsuario)
                if (respuestame.ok) {
                    localStorage.setItem("usuario", JSON.stringify(datosUsuario.data))
                    alert("Bienvenido, " + (datosUsuario.data.name || ""))
                    window.location.href = "/"; // Redirigir a la página de inicio
                } else {
                    setError(datosUsuario.message || "No se pudo obtener el usuario")
                }
            } else {
                setError(respuestaJson.message || "Credenciales incorrectas")
            }
        } catch (err) {
            setError("Error de conexión con el servidor")
        }
    }

    return (
        <div className="flex items-center justify-center mt-[30px] bg-gray-100 ">
            <div className=" max-w-xl p-12 bg-white rounded-xl shadow-2xl">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Iniciar sesión</h1>
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-7">
                    <div>
                        <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2 text-bold">
                            Email:
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                            placeholder="Ingresa tu email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-2 text-bold">
                            Contraseña:
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                            placeholder="Ingresa tu contraseña"
                            required
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