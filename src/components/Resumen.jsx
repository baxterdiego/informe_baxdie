import ReactMarkdown from "react-markdown"
import resumen from "../docs/01_resumen_baxdie.md?raw"

function Resumen() {
  return (
    <section className="mb-10">

      <h2 className="text-3xl font-bold mb-4">
        Resumen Ejecutivo
      </h2>

      <div className="border rounded p-6">

        <ReactMarkdown>
          {resumen}
        </ReactMarkdown>

      </div>

    </section>
  )
}

export default Resumen