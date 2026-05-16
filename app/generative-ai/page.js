import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function GenerativeAIPage() {

  return (

    <>

      <Header />

      <div className="main-container">

        <Sidebar type="genai" />

        <div className="content">

          <h1 className="page-title">
            🚀 Generative AI
          </h1>

        </div>

      </div>

    </>
  );
}