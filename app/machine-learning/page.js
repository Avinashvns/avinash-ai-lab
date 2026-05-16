import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function MachineLearningPage() {

  return (

    <>

      <Header />

      <div className="main-container">

        <Sidebar type="ml" />

        <div className="content">

          <h1 className="page-title">
            🤖 Machine Learning
          </h1>

        </div>

      </div>

    </>
  );
}