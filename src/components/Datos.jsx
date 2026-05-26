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

        <div className="prose max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {datos}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Datos