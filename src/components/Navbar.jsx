import { Link } from "react-router-dom"

import {
  FileText,
  Scale,
  Shield,
  Table,
  Users,
  Database,
  CheckCircle,
  Bot
} from "lucide-react"

function Navbar() {
  return (

    <nav className="bg-white rounded-2xl shadow-lg p-5 mb-8">

      <div className="flex flex-wrap gap-3 justify-center">

        <Link
          to="/"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <FileText size={18}/>
          Resumen
        </Link>

        <Link
          to="/marco"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Scale size={18}/>
          Marco
        </Link>

        <Link
          to="/delitos"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Shield size={18}/>
          Delitos
        </Link>

        <Link
          to="/comparacion"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Table size={18}/>
          Comparación
        </Link>

        <Link
          to="/responsabilidades"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Users size={18}/>
          Responsabilidades
        </Link>

        <Link
          to="/datos"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Database size={18}/>
          Datos
        </Link>

        <Link
          to="/conclusiones"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <CheckCircle size={18}/>
          Conclusiones
        </Link>

        <Link
          to="/prompts"
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Bot size={18}/>
          Prompts
        </Link>

      </div>

    </nav>

  )
}

export default Navbar