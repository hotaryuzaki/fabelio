import React from 'react';
import MySelect from './MySelect.js';

// RENDER SELECT FURNITURE STYLE
function FilterFurniture(props) {
  if (Object.keys(props.options).length > 0) {
    let options = [];
    const items = props.options;
    items.map((style) => {
      return options.push({ label: style, value: style});
    });

    return <MySelect
      // className="fFurniture"
      placeholder="Furniture Style"
      options={options}
      value={props.value}
      onChangeCallback={props.onChangeCallback}
    />
  }
  else // FIRST RENDER THE DATA IS EMPTY SO GIVE THIS RETURN SO NO ERROR
    return true;
}

export default FilterFurniture;
