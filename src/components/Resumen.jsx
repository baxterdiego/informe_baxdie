import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import resumen from "../docs/01_resumen_baxdie.md?raw"

function Resumen() {
  return (
    <section>

      <div className="bg-white shadow-lg rounded-xl p-8">

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