import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Content() {
  const [data, setData] = useState({});
  const [furnitures, setFurnitures] = useState({});
  const [products, setProducts] = useState({});
  const [search, setSearch] = useState('');
  const [filterStyle, setFilterStyle] = useState('');
  const [filterDelivery, setFilterDelivery] = useState(0);

  useEffect(() => {
    async function getData() {
      const result = await axios("http://www.mocky.io/v2/5c9105cb330000112b649af8");
      setData(result.data); // FOR MASTER DATA
      setFurnitures(result.data.furniture_styles); // FOR SEARCH & FILTER DATA
      setProducts(result.data.products); // FOR SEARCH & FILTER DATA
    }

    getData();
  }, [])

  // HANDLER SEARCH INPUT
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const dataSearch = data.products.filter((product, index, arr) => {
        const name = product.name.toLowerCase();
        if (name.includes(search)) {
          return product;
        }
      });

      setProducts(dataSearch); // FOR SEARCH & FILTER DATA
    }
  }, [search])

  // HANDLER FILTER FURNITURE STYLE
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      const dataSearch = data.products.filter((product, index, arr) => {
        // USING FIND INDEX SO IF FIND ONE FROM ARRAY THE RECURSIVE WILL STOP
        const fStyle = product.furniture_style.findIndex(style => {
          const fstyle = style.toLowerCase();
          if (fstyle.includes(filterStyle)) {
            return true;
          }
        });

        const ret = fStyle !== -1 ? product : '';
        return ret;
      });

      setProducts(dataSearch); // FOR SEARCH & FILTER DATA
    }
  }, [filterStyle])

  // HANDLER FILTER DELIVERY
  useEffect(() => {
    if (Object.keys(data).length > 0) {
      let fromDay = 0;
      let toDay = 0;

      switch(parseInt(filterDelivery)) {
        case 1:
          fromDay = 1;
          toDay = 7;
          break;
        case 2:
          fromDay = 8;
          toDay = 14;
          break;
        case 3:
          fromDay = 22;
          toDay = 30;
          break;
        case 4:
          fromDay = 31;
          toDay = 365;
          break;
        default:
          fromDay = 1;
          toDay = 365;
      }

      // console.log(filterDelivery, fromDay, toDay);

      const dataSearch = data.products.filter((product, index, arr) => {
        const delivery = parseInt(product.delivery_time);

        if (delivery >= fromDay && delivery <= toDay) {
          return product;
        }
      });
          console.log(dataSearch);

      setProducts(dataSearch); // FOR SEARCH & FILTER DATA
    }
  }, [filterDelivery])

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

  
  return (
    <>
      <header>
        <form>
          <div className="row">
            <div className="col50">
              <div className="filter">
                <input className="search" type="text" placeholder="Search Furniture" value={search} onChange={event => setSearch(event.target.value.toLowerCase())} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col50">
              <div className="filter">
                
                <input className="search" type="text" placeholder="Search Furniture" value={filterStyle} onChange={event => setFilterStyle(event.target.value.toLowerCase())} />
              </div>
            </div>
            <div className="col50">
              <div className="filter">
                <input className="search" type="text" placeholder="Search Delivery" value={filterDelivery} onChange={event => setFilterDelivery(event.target.value)} />
              </div>
            </div>
          </div>
        </form>
      </header>

      <div className="content">
        <ProductList data={products} />
      </div>
    </>
  )
}

export default Content;
