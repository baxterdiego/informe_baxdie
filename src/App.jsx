import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Navbar from "./components/Navbar"

import Resumen from "./components/Resumen"
import Marco from "./components/Marco"
import Delitos from "./components/Delitos"
import Comparacion from "./components/Comparacion"
import Responsabilidades from "./components/Responsabilidades"
import Datos from "./components/Datos"
import Conclusiones from "./components/Conclusiones"
import Prompts from "./components/Prompts"

function App() {
  return (
    <BrowserRouter>

      <div className="p-8">

        <h1 className="text-4xl font-bold mb-6">
          Caso Equifax – Análisis Legal y Ciberseguridad
        </h1>

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Resumen />}
          />

          <Route
            path="/marco"
            element={<Marco />}
          />

          <Route
            path="/delitos"
            element={<Delitos />}
          />

          <Route
            path="/comparacion"
            element={<Comparacion />}
          />

          <Route
            path="/responsabilidades"
            element={<Responsabilidades />}
          />

          <Route
            path="/datos"
            element={<Datos />}
          />

          <Route
            path="/conclusiones"
            element={<Conclusiones />}
          />

          <Route
            path="/prompts"
            element={<Prompts />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  )
}

export default App