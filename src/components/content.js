import React, { useState, useEffect} from 'react';
import axios from 'axios';
// MYCOMPONENTS
import ProductList from './ProductList.js';
import FilterFurniture from './FilterFurniture.js';
import FilterDelivery from './FilterDelivery.js';
// MYFUNCTIONS
import querySearch from '../functions/querySearch.js';
import queryFilterStyle from '../functions/queryFilterStyle.js';
import queryFilterDelivery from '../functions/queryFilterDelivery.js';

function Content() {
  const [data, setData] = useState({});
  const [furnitures, setFurnitures] = useState({});
  const [products, setProducts] = useState({});
  const [search, setSearch] = useState('');
  const [filterStyle, setFilterStyle] = useState([]);
  const [filterDelivery, setFilterDelivery] = useState([]);
  const delivery = [
    { value: "1", label: "1 week" },
    { value: "2", label: "2 weeks" },
    { value: "3", label: "1 month" },
    { value: "4", label: "more" },
  ];

  // GET API DATA KETIKA RENDER PERTAMA
  useEffect(() => {
    async function getData() {
      const result = await axios("http://www.mocky.io/v2/5c9105cb330000112b649af8");
      setData(result.data); // FOR MASTER DATA
      setFurnitures(result.data.furniture_styles); // FOR SEARCH & FILTER DATA
      setProducts(result.data.products); // FOR SEARCH & FILTER DATA
    }

    getData();
  }, [])

  // HANDLER SEARCH INPUT & FILTER FURNITURE STYLE & FILTER DELIVERY
  useEffect(() => {
    if (Object.keys(data).length > 0) {

      // FILTER STEP 1 => BY SEARCH
      const dataSearch = querySearch(data.products, search);
      // FILTER STEP 2 => BY FURNITURE STYLE
      const dataFilterFurniture = queryFilterStyle(dataSearch, filterStyle);
      // FILTER STEP 3 => BY DELIVERY TIME
      const dataFilterDelivery = queryFilterDelivery(dataFilterFurniture, filterDelivery);

      setProducts(dataFilterDelivery);
    }
  }, [search, filterStyle, filterDelivery])

  
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
                <FilterFurniture options={furnitures} value={filterStyle} onChangeCallback={response => setFilterStyle(response)} />
              </div>
            </div>

            <div className="col50">
              <div className="filter">
                <FilterDelivery options={delivery} value={filterDelivery} onChangeCallback={response => setFilterDelivery(response)} />
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
