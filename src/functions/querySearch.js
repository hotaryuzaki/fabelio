// FUNCTION FILTER SEARCH
function querySearch(searchData, searchQuery) {
  const dataSearch = searchData.filter((product, index, arr) => {
    const name = product.name.toLowerCase();
    if (name.includes(searchQuery)) {
      return product;
    }
  });

  return dataSearch;
}

export default querySearch;
