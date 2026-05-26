import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import marco from "../docs/02_marco_baxdie.md?raw"

function Marco() {
  return (
    <section>

      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Marco Normativo
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {marco}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Marco