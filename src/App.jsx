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
    <div className="p-8 space-y-12">

      <h1 className="text-4xl font-bold">
        Caso Equifax – Análisis Legal y Ciberseguridad
      </h1>

      <Resumen />

      <Marco />

      <Delitos />

      <Comparacion />

      <Responsabilidades />

      <Datos />

      <Conclusiones />

      <Prompts />

    </div>
  )
}

export default App