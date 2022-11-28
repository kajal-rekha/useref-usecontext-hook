import logo from "./logo.svg";
import "./App.css";
//import BrazilVsArgentina from "./components/BrazilVsAergentina";
import CosmeticsStore from "./components/CosmeticsStore";
import { createContext } from "react";

export const CosmeticsContext = createContext();

function App() {
  const cosmetics = {
    numOfSale: 100,
    bestSelling: "Lipstick",
  };

  return (
    <div className="App">
      {/* <BrazilVsArgentina /> */}
      <CosmeticsContext.Provider value={cosmetics}>
        <CosmeticsStore />
      </CosmeticsContext.Provider>
    </div>
  );
}

export default App;
