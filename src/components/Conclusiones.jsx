import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import conclusiones from "../docs/07_conclusiones_baxdie.md?raw"

function Conclusiones() {
  return (
    <section>

      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Conclusiones y Recomendaciones
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {conclusiones}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Conclusiones