import React from "react";


type ProductProps = {
  currency: number
  image: string
  name: string
  price: number
  currencySymbol: string
};

const ProductListItem = ({currency, image, name, price, currencySymbol }: ProductProps) => {
 

  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt="iPhone" />
      </div>
      <div className="product-name">{name}</div>
      <div className="product-price">
        {price} <span> {currencySymbol}</span>
      </div>
    </div>
  );
};

export default ProductListItem;
