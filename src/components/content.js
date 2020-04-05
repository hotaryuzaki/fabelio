import React, { useState, useEffect} from 'react';
import axios from 'axios';
import MySelect from './MySelect.js';

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
      const dataSearch = querySearch(data.products);
      // FILTER STEP 2 => BY FURNITURE STYLE
      const dataFilterFurniture = queryFilterStyle(dataSearch);
      // FILTER STEP 3 => BY DELIVERY TIME
      const dataFilterDelivery = queryFilterDelivery(dataFilterFurniture);

      setProducts(dataFilterDelivery);
    }
  }, [search, filterStyle, filterDelivery])

  // HANDLER FILTER FURNITURE STYLE
  // useEffect(() => {
  //   if (Object.keys(data).length > 0) {

  //     // FILTER STEP 1 => BY SEARCH
  //     const dataSearch = querySearch(data.products);
  //     // FILTER STEP 2 => BY FURNITURE STYLE
  //     const dataFilterFurniture = queryFilterStyle(dataSearch);
  //     // FILTER STEP 3 => BY DELIVERY TIME
  //     // const dataFilterDelivery = queryFilterDelivery(dataFilterFurniture);

  //     setProducts(dataFilterFurniture);
  //   }
  // }, [filterStyle])

  // HANDLER FILTER DELIVERY
  // useEffect(() => {
  //   if (Object.keys(data).length > 0) {

  //     // FILTER STEP 1 => BY SEARCH
  //     const dataSearch = querySearch(data.products);
  //     // FILTER STEP 2 => BY FURNITURE STYLE
  //     const dataFilterFurniture = queryFilterStyle(dataSearch);
  //     // FILTER STEP 3 => BY DELIVERY TIME
  //     const dataFilterDelivery = queryFilterDelivery(dataFilterFurniture);

  //     setProducts(dataFilterDelivery);
  //   }
  // }, [filterDelivery])

  function numberWithCommas(x) {
    const y = x.toFixed(0);
    return y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function querySearch(searchData) {
    const dataSearch = searchData.filter((product, index, arr) => {
      const name = product.name.toLowerCase();
      if (name.includes(search)) {
        return product;
      }
    });

    return dataSearch;
  }

  function queryFilterStyle(searchFurniture) {
    const dataFurniture = searchFurniture.filter((product, index, arr) => {

      // USING FIND INDEX SO IF FIND ONE FROM ARRAY THE RECURSIVE WILL STOP
      const prodStyle = product.furniture_style.findIndex(pStyle => {

        // USING FIND INDEX SO IF FIND ONE FROM ARRAY THE RECURSIVE WILL STOP
        if (filterStyle) { // BEHAVIOR TIDAK KONSISTEN, MENCEGAH RETURN NULL
          if (filterStyle.length > 0) { // BEHAVIOR TIDAK KONSISTEN, MENCEGAH RETURN EMPTY ARRAY
            const dataFStyle = filterStyle.findIndex(fStyle => {
              if (pStyle === fStyle.value) {
                return true;
              }
            });

            return dataFStyle !== -1 ? true : false;
          }
          else // UNTUK RESET FILTER => SHOW ALL DATA
            return true;
        }
        else // UNTUK RESET FILTER => SHOW ALL DATA
          return true;
      });

      const ret = prodStyle !== -1 ? product : '';
      return ret;
    });

    return dataFurniture;
  }

  function queryFilterDelivery(searchDelivery) {
    let rangeDay = {};

    const dataDelivery = searchDelivery.filter((product, index, arr) => {
      if (filterDelivery) { // BEHAVIOR TIDAK KONSISTEN, MENCEGAH RETURN NULL
        if (filterDelivery.length > 0) { // BEHAVIOR TIDAK KONSISTEN, MENCEGAH RETURN EMPTY ARRAY

          const prodDelivery = filterDelivery.map(option => {
            switch(parseInt(option.value)) {
              case 1:
                rangeDay = {'fromDay': 1, 'toDay': 7};
                break;
              case 2:
                rangeDay = {'fromDay': 8, 'toDay': 14};
                break;
              case 3:
                rangeDay = {'fromDay': 22, 'toDay': 30};
                break;
              case 4:
                rangeDay = {'fromDay': 31, 'toDay': 365};
                break;
              default:
                rangeDay = {'fromDay': 1, 'toDay': 365};
            }

            const delivery = parseInt(product.delivery_time);
            if (delivery >= rangeDay.fromDay && delivery <= rangeDay.toDay) {
              return true;
            }
          });

          const ret = prodDelivery[0] ? product : '';
          return ret;
        }
        else // UNTUK RESET FILTER => SHOW ALL DATA
          return product;
      }
      else // UNTUK RESET FILTER => SHOW ALL DATA
        return product;
    });
    
    return dataDelivery;
  }

  // RENDER SELECT FURNITURE STYLE
  function FilterFurniture(props) {
    if (Object.keys(props.data).length > 0) {
      let options = [];
      const items = props.data;
      items.map((style) => {
        return options.push({ label: style, value: style});
      });

      return <MySelect
        // className="fFurniture"
        placeholder="Furniture Style"
        options={options}
        value={filterStyle}
        onChangeCallback={response => setFilterStyle(response)}
      />
    }
    else // FIRST RENDER THE DATA IS EMPTY SO GIVE THIS RETURN SO NO ERROR
      return true;
  }

  // RENDER SELECT DELIVERY
  function FilterDelivery() {
    return <MySelect
      // className="fFurniture"
      placeholder="Furniture Delivery"
      options={delivery}
      value={filterDelivery}
      onChangeCallback={response => setFilterDelivery(response)}
    />
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
                <FilterFurniture data={furnitures} />
              </div>
            </div>

            <div className="col50">
              <div className="filter">
                <FilterDelivery />
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
