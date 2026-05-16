import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DSAPage() {

  return (

    <>

      <Header />

      <div className="main-container">

        <Sidebar type="dsa" />

        <div className="content">

          <h1 className="page-title">
            💻 DSA
          </h1>

        </div>

      </div>

    </>
  );
}