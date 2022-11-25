import React from "react";
import { CurrenciesRate } from "./Currency";
import productsArray from "./ProductsArray";

type ProductProps = {
  productId: number;
  currency: number;
};

const ProductListItem = ({ productId, currency }: ProductProps) => {
  const convertPrice = () => {
    return Math.floor(
      productsArray[productId - 1].price * CurrenciesRate[currency - 1]
    );
  };

  const currencySymbol = () => {
    switch (currency) {
      case 1:
        return "$";
      case 2:
        return "€";
      case 3:
        return "₴";

      case 4:
        return "zł";
    }
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={productsArray[productId - 1].image} alt="iPhone" />
      </div>
      <div className="product-name">{productsArray[productId - 1].name}</div>
      <div className="product-price">
        {convertPrice()} <span> {currencySymbol()}</span>
      </div>
    </div>
  );
};

export default ProductListItem;
