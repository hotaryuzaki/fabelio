// FUNCTION FILTER SEARCH
function querySearch(searchData, searchQuery) {
  const dataSearch = searchData.filter((product, index, arr) => {
    let ret;
    const name = product.name.toLowerCase();
    if (name.includes(searchQuery)) {
      ret = product;
    }

    return ret;
  });

  return dataSearch;
}

export default querySearch;
