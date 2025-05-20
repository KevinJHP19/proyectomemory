export default function login(){

    console.log('Login cargador')
    return(
        <div className="flex items-center justify-center mt-[30px] bg-gray-100">
            <div className="w-full max-w-lg p-12 bg-white rounded-xl shadow-2xl">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Iniciar sesión</h1>
            <form action="" className="space-y-7">
            <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                Email:
            </label>
            <input
                id="email"
                type="email"
                className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                placeholder="Ingresa tu email"
            />
            </div>
            <div>
            <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-2">
                Contraseña:
            </label>
            <input
                id="password"
                type="password"
                className="w-full px-5 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
                placeholder="Ingresa tu contraseña"
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