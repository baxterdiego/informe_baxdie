import ReactMarkdown from "react-markdown"
import delitos from "../docs/03_delitos_baxdie.md?raw"

function Delitos() {
  return (
    <section className="mb-10">

      <h2 className="text-3xl font-bold mb-4">
        Delitos Informáticos
      </h2>

      <div className="border rounded p-6">

        <ReactMarkdown>
          {delitos}
        </ReactMarkdown>

      </div>

    </section>
  )
}

export default Delitos