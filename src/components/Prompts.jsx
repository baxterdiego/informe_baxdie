import ReactMarkdown from "react-markdown"
import prompts from "../docs/08_prompts_baxdie.md?raw"

function Prompts() {
  return (
    <section className="mb-10">

      <h2 className="text-3xl font-bold mb-4">
        Bitácora IA
      </h2>

      <div className="border rounded p-6">

        <ReactMarkdown>
          {prompts}
        </ReactMarkdown>

      </div>

    </section>
  )
}

export default Prompts