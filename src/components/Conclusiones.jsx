import ReactMarkdown from "react-markdown"
import conclusiones from "../docs/07_conclusiones_baxdie.md?raw"

function Conclusiones() {
  return (
    <section className="mb-10">

      <h2 className="text-3xl font-bold mb-4">
        Conclusiones
      </h2>

      <div className="border rounded p-6">

        <ReactMarkdown>
          {conclusiones}
        </ReactMarkdown>

      </div>

    </section>
  )
}

export default Conclusiones