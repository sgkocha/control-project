import React from "react";
import { Currencies } from "../components/Product/Currency";
import ProductList from "../components/Product/ProductList";

const TaskSecond = () => {
  const [currency, setCurrency] = React.useState<number>(1) 

 const changeCurrency = (newCurrency: number) => {
   setCurrency(newCurrency)
 }
  return (
    <>
      <div className="title">Task 2. Products List</div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => changeCurrency(Currencies.DOLLAR)}
          style={{
            marginRight: "10px",
            backgroundColor: "lightgrey",
            padding: "5px",
            border: "1px solid lightgrey",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          USD
        </button>
        <button
           onClick={() => changeCurrency(Currencies.EURO)}
          style={{
            marginRight: "10px",
            backgroundColor: "lightgrey",
            padding: "5px",
            border: "1px solid lightgrey",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          EUR
        </button>
        <button
           onClick={() => changeCurrency(Currencies.UAH)}
          style={{
            marginRight: "10px",
            backgroundColor: "lightgrey",
            padding: "5px",
            border: "1px solid lightgrey",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          UAH
        </button>
        <button
           onClick={() => changeCurrency(Currencies.PLN)}
          style={{
            marginRight: "10px",
            backgroundColor: "lightgrey",
            padding: "5px",
            border: "1px solid lightgrey",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          PLN
        </button>
      </div>

      <ProductList currency = {currency} />
    </>
  );
};

export default TaskSecond;
