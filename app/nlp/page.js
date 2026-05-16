import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function NLPPage() {

  return (

    <>

      <Header />

      <div className="main-container">

        <Sidebar type="nlp" />

        <div className="content">

          <h1 className="page-title">
            💬 NLP
          </h1>

        </div>

      </div>

    </>
  );
}