// FUNCTION FILTER FURNITURE STYLE
function queryFilterStyle(searchFurniture, queryFilterStyle) {
  const dataFurniture = searchFurniture.filter((product, index, arr) => {

    // USING FIND INDEX SO IF FIND ONE FROM ARRAY THE RECURSIVE WILL STOP
    const prodStyle = product.furniture_style.findIndex(pStyle => {

      // USING FIND INDEX SO IF FIND ONE FROM ARRAY THE RECURSIVE WILL STOP
      if (queryFilterStyle) { // BEHAVIOR TIDAK KONSISTEN, MENCEGAH RETURN NULL
        if (queryFilterStyle.length > 0) { // BEHAVIOR TIDAK KONSISTEN, MENCEGAH RETURN EMPTY ARRAY
          const dataFStyle = queryFilterStyle.findIndex(fStyle => {
            if (pStyle === fStyle.value) {
              return true;
            }

            return false;
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

export default queryFilterStyle;
