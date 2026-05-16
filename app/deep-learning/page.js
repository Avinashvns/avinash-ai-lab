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

        </div>

      </div>

    </>
  );
}
