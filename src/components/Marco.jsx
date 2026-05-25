import ReactMarkdown from "react-markdown"
import marco from "../docs/02_marco_baxdie.md?raw"

function Marco() {
  return (
    <section className="mb-10">

      <h2 className="text-3xl font-bold mb-4">
        Marco Normativo
      </h2>

      <div className="border rounded p-6">

        <ReactMarkdown>
          {marco}
        </ReactMarkdown>

      </div>

    </section>
  )
}

export default Marco