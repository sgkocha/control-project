import React from "react";
import productsArray from "./ProductsArray";
import { CurrenciesRate } from "./Currency";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";

type ProductListProps = {
  currency: number;
};




const ProductList = ({ currency }: ProductListProps) => {
  
const convertedPrices: number[] = []

const convertPrice = (productId: number, currency: number) => {
  let result = Math.floor( productsArray[productId - 1].price * CurrenciesRate[currency - 1])
  convertedPrices.push(result);
  return result
 
}
const getCurrencySymbol = () => {
  switch (currency) {
    case 1:
      return "$";
    case 2:
      return "€";
    case 3:
      return "₴";

    case 4:
      return "zł";
    default:
      return "$"  
  }
};
  return (
    <div className="product-list">
      <div className="wrapper flexbox">
        {productsArray.map((elem) => (
          <ProductListItem
            key={elem.id}
            image = {elem.image}
            name = {elem.name}
            price = {convertPrice(elem.id, currency)}
            currency={currency}
            currencySymbol = {getCurrencySymbol()}
          />

        ))}
      </div>
      <div className="total">Total:  {convertedPrices.reduce((a, b) => {return a + b}, 0)} {getCurrencySymbol()} </div>
    </div>
  );
};

export default ProductList;
