import ReactMarkdown from "react-markdown"
import comparacion from "../docs/04_comparacion_baxdie.md?raw"

function Comparacion() {
  return (
    <section>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Comparación de Marcos Regulatorios
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown>
            {comparacion}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Comparacion