import React from "react";
import productsArray from "./ProductsArray";
import ProductListItem from "./ProductListItem";
import "./ProductList.css";

type ProductListProps = {
    currency: number
}

const ProductList = ({currency} : ProductListProps) => {
  console.log(productsArray);
  return (
    <div className="product-list">
      <div className="wrapper flexbox">
        {productsArray.map((elem) => (
          <ProductListItem key={elem.id} productId={elem.id} currency = {currency} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
