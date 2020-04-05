// FUNCTION FILTER DELIVERY DAYS
function queryFilterDelivery(searchDelivery, queryDelivery) {
  let rangeDay = {};

  const dataDelivery = searchDelivery.filter((product, index, arr) => {
    if (queryDelivery) { // BEHAVIOR LIBRARY TIDAK KONSISTEN, MENCEGAH RETURN NULL
      if (queryDelivery.length > 0) { // BEHAVIOR LIBRARY TIDAK KONSISTEN, MENCEGAH RETURN EMPTY ARRAY

        const prodDelivery = queryDelivery.findIndex(option => {
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

          return false;
        });

        return prodDelivery !== -1 ? product : '';
      }
      else // UNTUK RESET FILTER => SHOW ALL DATA
        return product;
    }
    else // UNTUK RESET FILTER => SHOW ALL DATA
      return product;
  });
  
  return dataDelivery;
}

export default queryFilterDelivery;
