import { useContext } from "react";
import { CosmeticsContext } from "../App";
import WareHouse3 from "./WareHouse3";

const WareHouse2 = () => {
  const { numOfSale, bestSelling } = useContext(CosmeticsContext);

  return (
    <div>
      <h1>Number: {numOfSale}</h1>
      <h1>Best: {bestSelling}</h1>
      <WareHouse3 />
    </div>
  );
};

export default WareHouse2;
