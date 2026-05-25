import ReactMarkdown from "react-markdown"
import datos from "../docs/06_datos_baxdie.md?raw"

function Datos() {
  return (
    <section className="mb-10">

      <h2 className="text-3xl font-bold mb-4">
        Datos Personales
      </h2>

      <div className="border rounded p-6">

        <ReactMarkdown>
          {datos}
        </ReactMarkdown>

      </div>

    </section>
  )
}

export default Datos