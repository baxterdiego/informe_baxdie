import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import { ShieldAlert } from "lucide-react"

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

      <div className="min-h-screen bg-slate-100 p-8">

        <div className="max-w-6xl mx-auto">

          <header className="bg-white rounded-2xl shadow-lg p-10 mb-8 text-center">

            <div className="flex justify-center mb-4">

              <ShieldAlert
                size={60}
                className="text-blue-700"
              />

            </div>

            <h1 className="text-5xl font-bold text-blue-800 mb-4">
              Caso Equifax
            </h1>

            <p className="text-gray-600 text-lg">
              Análisis Legal, Delitos Informáticos,
              Protección de Datos y Normativa Chilena
            </p>

          </header>

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

      </div>

    </BrowserRouter>
  )
}

export default App