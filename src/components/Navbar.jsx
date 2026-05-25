import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="border-b mb-8 pb-4">

      <div className="flex flex-wrap gap-4">

        <Link to="/">
          Resumen
        </Link>

        <Link to="/marco">
          Marco
        </Link>

        <Link to="/delitos">
          Delitos
        </Link>

        <Link to="/comparacion">
          Comparación
        </Link>

        <Link to="/responsabilidades">
          Responsabilidades
        </Link>

        <Link to="/datos">
          Datos
        </Link>

        <Link to="/conclusiones">
          Conclusiones
        </Link>

        <Link to="/prompts">
          Prompts
        </Link>

      </div>

    </nav>
  )
}

export default Navbar