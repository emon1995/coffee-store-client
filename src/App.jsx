import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <div className="min-h-[100vh-628px]">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
