import "./App.css";
import PortfolioContainer from "./PortfolioContainer/PortfolioContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToHome from "./PortfolioContainer/ScrollToHome/ScrollToHome";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <PortfolioContainer />
      <ScrollToHome />
    </div>
  );
}

export default App;
