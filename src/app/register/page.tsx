export default function Register() {
    return (
        <div className="flex items-center justify-center mt-[30px]  bg-gray-100">
            <form className="bg-white p-15 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="nombre">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="correo">
                        Correo
                    </label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 mb-2" htmlFor="confirmar">
                        Confirmar Contraseña
                    </label>
                    <input
                        type="password"
                        id="confirmar"
                        name="confirmar"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
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
    );
}