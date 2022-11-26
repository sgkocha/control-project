import React from "react";
import { Currencies } from "../components/Product/Currency";
import ProductList from "../components/Product/ProductList";
import "./TaskSecond.css";

const TaskSecond = () => {
  const [currency, setCurrency] = React.useState<number>(1);

  const changeCurrency = (newCurrency: number) => {
    setCurrency(newCurrency);
  };
  return (
    <>
      <div className="title">Task 2. Products List</div>
      <div className="currency-btns">
        <button
          onClick={() => changeCurrency(Currencies.DOLLAR)}
          className={currency === Currencies.DOLLAR ? "btn-active" : ""}
        >
          USD
        </button>
        <button onClick={() => changeCurrency(Currencies.EURO)}>EUR</button>
        <button onClick={() => changeCurrency(Currencies.UAH)}>UAH</button>
        <button onClick={() => changeCurrency(Currencies.PLN)}>PLN</button>
      </div>

      <ProductList currency={currency} />
    </>
  );
};

export default TaskSecond;
