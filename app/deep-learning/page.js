import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DeepLearningPage() {

  return (

    <>

      <Header />

      <div className="main-container">

        <Sidebar type="dl" />

        <div className="content">

          <h1 className="page-title">
            🧠 Deep Learning
          </h1>

          <div className="algo-card">

            <h2>
              ⚡ Perceptron
            </h2>

            <p>
              Learn Perceptron step by step.
            </p>

          </div>

          <div className="algo-card">

            <h2>
              🧠 Neural Networks
            </h2>

            <p>
              Learn Neural Networks from scratch.
            </p>

          </div>

        </div>

      </div>

    </>
  );
}