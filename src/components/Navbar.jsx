import { Link } from "react-router-dom"

function Navbar() {
  return (

    <nav className="bg-white rounded-2xl shadow-lg p-5 mb-8">

      <div className="flex flex-wrap gap-3 justify-center">

        <Link
          to="/"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Resumen
        </Link>

        <Link
          to="/marco"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Marco
        </Link>

        <Link
          to="/delitos"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Delitos
        </Link>

        <Link
          to="/comparacion"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Comparación
        </Link>

        <Link
          to="/responsabilidades"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Responsabilidades
        </Link>

        <Link
          to="/datos"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Datos
        </Link>

        <Link
          to="/conclusiones"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Conclusiones
        </Link>

        <Link
          to="/prompts"
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Prompts
        </Link>

      </div>

    </nav>

  )
}

export default Navbar