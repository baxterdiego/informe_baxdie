import ReactMarkdown from "react-markdown"
import datos from "../docs/06_datos_baxdie.md?raw"

function Datos() {
  return (
    <section>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Tratamiento de Datos Personales
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown>
            {datos}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Datos