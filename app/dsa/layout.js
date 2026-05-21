import "./dsa.css";
import Sidebar from "@/components/Sidebar";

export default function DSALayout({ children }) {
  return (
    <div className="main-container">
      <Sidebar type="dsa" />
      <div className="content">{children}</div>
    </div>
  );
}
