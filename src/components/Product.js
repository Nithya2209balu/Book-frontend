import React from 'react';

const Product = ({ product, addToCart }) => {
const { _id, name, image, price } = product;

return (
<div className="product">
<img src={image} alt={name} />
<div className="product-details">
<h3>{name}</h3>
<p>${price}</p>
<button onClick={() => addToCart(product)}>Add to Cart</button>
</div>
</div>
);
};

export default Product;
