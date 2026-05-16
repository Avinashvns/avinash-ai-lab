import Link from "next/link";

export default function Sidebar({ type }) {

  return (

    <div className="sidebar">

      {/* ================================================= */}
      {/* MACHINE LEARNING */}
      {/* ================================================= */}

      {
        type === "ml" && (

          <>

            <h2 className="sidebar-title">
              🤖 Machine Learning
            </h2>

            <div className="nav-links">

              <Link href="#">
                📈 Linear Regression
              </Link>

              <Link href="#">
                📊 Logistic Regression
              </Link>

              <Link href="#">
                📍 KNN
              </Link>

              <Link href="#">
                🎯 K-Means
              </Link>

              <Link href="#">
                🌳 Decision Tree
              </Link>

              <Link href="#">
                🌲 Random Forest
              </Link>

            </div>

          </>
        )
      }

      {/* ================================================= */}
      {/* DEEP LEARNING */}
      {/* ================================================= */}

      {
        type === "dl" && (

          <>

            <h2 className="sidebar-title">
              🧠 Deep Learning
            </h2>

            <div className="nav-links">

              <Link href="#">
                ⚡ Perceptron
              </Link>

              <Link href="#">
                🧠 Neural Networks
              </Link>

              <Link href="#">
                🔄 Backpropagation
              </Link>

              <Link href="#">
                🖼 CNN
              </Link>

              <Link href="#">
                🔁 RNN
              </Link>

            </div>

          </>
        )
      }

      {/* ================================================= */}
      {/* NLP */}
      {/* ================================================= */}

      {
        type === "nlp" && (

          <>

            <h2 className="sidebar-title">
              💬 NLP
            </h2>

            <div className="nav-links">

              <Link href="#">
                ✂ Tokenization
              </Link>

              <Link href="#">
                📚 TF-IDF
              </Link>

              <Link href="#">
                🧠 Word2Vec
              </Link>

              <Link href="#">
                🤖 BERT
              </Link>

            </div>

          </>
        )
      }

      {/* ================================================= */}
      {/* GENERATIVE AI */}
      {/* ================================================= */}

      {
        type === "genai" && (

          <>

            <h2 className="sidebar-title">
              🚀 Generative AI
            </h2>

            <div className="nav-links">

              <Link href="#">
                ✍ Prompt Engineering
              </Link>

              <Link href="#">
                🤖 LLM
              </Link>

              <Link href="#">
                🔍 RAG
              </Link>

              <Link href="#">
                🔗 LangChain
              </Link>

              <Link href="#">
                🧠 AI Agents
              </Link>

            </div>

          </>
        )
      }

      {/* ================================================= */}
      {/* DSA */}
      {/* ================================================= */}

      {
        type === "dsa" && (

          <>

            <h2 className="sidebar-title">
              💻 DSA
            </h2>

            <div className="nav-links">

              <Link href="#">
                📦 Arrays
              </Link>

              <Link href="#">
                🔗 Linked List
              </Link>

              <Link href="#">
                📚 Stack
              </Link>

              <Link href="#">
                🌲 Trees
              </Link>

              <Link href="#">
                🕸 Graph
              </Link>

            </div>

          </>
        )
      }

    </div>
  );
}