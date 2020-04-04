import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Content() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const result = await axios("http://www.mocky.io/v2/5c9105cb330000112b649af8");
      // console.log(result.data);
      setData(result.data);
    }

    getData();
  }, [])

  function ProductList(props) {
    if (Object.keys(props.data).length > 0) {
      const items = props.data;
      const listItems = items.products.map((product) =>
        <div className="productCont">
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
                Delivery days : {product.delivery_time} hari
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

  function numberWithCommas(x) {
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  
  return (
    <>
      <header>
        <form>
          <div className="row">
            <div className="col50">
              <div className="filter">
                <input className="search" type="text" name="name" placeholder="Search Furniture" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col50">
              <div className="filter">
                asd
              </div>
            </div>
            <div className="col50">
              <div className="filter">
                asd
              </div>
            </div>
          </div>
        </form>
      </header>

      <div className="content">
        <ProductList data={data} />
      </div>
    </>
  )
}

export default Content;
