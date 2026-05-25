import ReactMarkdown from "react-markdown"
import comparacion from "../docs/04_comparacion_baxdie.md?raw"

function Comparacion() {
  return (
    <section className="mb-10">

      <h2 className="text-3xl font-bold mb-4">
        Comparación
      </h2>

      <div className="border rounded p-6">

        <ReactMarkdown>
          {comparacion}
        </ReactMarkdown>

      </div>

    </section>
  )
}

export default Comparacion