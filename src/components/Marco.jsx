import ReactMarkdown from "react-markdown"
import marco from "../docs/02_marco_baxdie.md?raw"

function Marco() {
  return (
    <section>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Marco Normativo
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown>
            {marco}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Marco