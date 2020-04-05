import React from 'react';
import MySelect from './MySelect.js';

// RENDER SELECT DELIVERY
function FilterDelivery(props) {
  return <MySelect
    // className="fFurniture"
    placeholder="Furniture Delivery"
    options={props.options}
    value={props.value}
    onChangeCallback={props.onChangeCallback}
  />
}

export default FilterDelivery;
