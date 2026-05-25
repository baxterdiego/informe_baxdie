import ReactMarkdown from "react-markdown"
import responsabilidades from "../docs/05_responsabilidades_baxdie.md?raw"

function Responsabilidades() {
  return (
    <section className="mb-10">

      <h2 className="text-3xl font-bold mb-4">
        Responsabilidades
      </h2>

      <div className="border rounded p-6">

        <ReactMarkdown>
          {responsabilidades}
        </ReactMarkdown>

      </div>

    </section>
  )
}

export default Responsabilidades