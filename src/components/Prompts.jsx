import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import prompts from "../docs/08_prompts_baxdie.md?raw"

function Prompts() {
  return (
    <section>

      <div className="bg-white rounded-2xl shadow-xl p-10 border border-gray-200">

        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Bitácora de Uso de IA
        </h2>

        <div className="prose max-w-none">

          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {prompts}
          </ReactMarkdown>

        </div>

      </div>

    </section>
  )
}

export default Prompts