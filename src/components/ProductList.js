import React from 'react';

function numberWithCommas(x) {
  const y = x.toFixed(0);
  return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// RENDER PRODUCT LIST 
function ProductList(props) {
  if (Object.keys(props.data).length > 0) {
    const items = props.data;
    const listItems = items.map((product, key) =>
      <div key={key} className="productCont">
        <div className="productBox">
          <div className="product">
            <div className="prodHead">
              <div className="prodName">
                {product.name}
              </div>
              <div className="prodPrice">
                Rp{numberWithCommas(product.price)}
              </div>
            </div>

            <div className="prodDesc">
              {product.description.substr(0, 114)}...
            </div>

            <div className="prodFstyle">
              {product.furniture_style.join(', ')}
            </div>

            <div className="prodDelivery">
              Delivery time : {product.delivery_time} hari
            </div>
          </div>
        </div>
      </div>
    );

    return (listItems);
  }
  else // FIRST RENDER THE DATA IS EMPTY SO GIVE THIS RETURN SO NO ERROR
    return true;
}

export default ProductList;
