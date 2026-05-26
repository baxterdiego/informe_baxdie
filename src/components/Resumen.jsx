import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import resumen from "../docs/01_resumen_baxdie.md?raw"

function Resumen() {
  return (
    <section>

      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Resumen Ejecutivo
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {resumen}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Resumen