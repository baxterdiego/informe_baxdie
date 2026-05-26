import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import responsabilidades from "../docs/05_responsabilidades_baxdie.md?raw"

function Responsabilidades() {
  return (
    <section>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Responsabilidades
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {responsabilidades}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Responsabilidades