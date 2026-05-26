import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import delitos from "../docs/03_delitos_baxdie.md?raw"

function Delitos() {
  return (
    <section>

      <div className="bg-white shadow-lg rounded-xl p-8">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Delitos Informáticos
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {delitos}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Delitos