import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import comparacion from "../docs/04_comparacion_baxdie.md?raw"

function Comparacion() {
  return (
    <section>

      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Comparación de Marcos Regulatorios
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {comparacion}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Comparacion