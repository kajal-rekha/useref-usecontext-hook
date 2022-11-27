import { CosmeticsContext } from "../App";

const WareHouse3 = () => {
  return (
    <div>
      <CosmeticsContext.Consumer>
        {({ numOfSale, bestSelling }) => {
          return (
            <h1>
              Number of sales: {numOfSale}, Best selling product: {bestSelling}
            </h1>
          );
        }}
      </CosmeticsContext.Consumer>
    </div>
  );
};

export default WareHouse3;
