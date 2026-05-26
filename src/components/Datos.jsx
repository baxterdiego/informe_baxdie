import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import datos from "../docs/06_datos_baxdie.md?raw"

function Datos() {
  return (
    <section>

      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Tratamiento de Datos Personales
        </h2>

        <div className="
        prose
        max-w-none
        overflow-x-auto

        prose-table:w-full
        prose-table:table-fixed
        prose-table:border-collapse

        prose-th:border
        prose-th:border-gray-400
        prose-th:bg-blue-100
        prose-th:p-4
        prose-th:text-left
        prose-th:align-top

        prose-td:border
        prose-td:border-gray-300
        prose-td:p-4
        prose-td:align-top

        prose-th:min-w-[180px]
        prose-td:min-w-[180px]

        prose-th:break-words
        prose-td:break-words

        leading-relaxed
        ">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {datos}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Datos