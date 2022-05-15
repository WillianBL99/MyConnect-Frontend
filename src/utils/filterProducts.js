export function filterCategories(products, tipe) {
  if(verifyObject(products)) return null;

  if(tipe === 'Todos') return products;
  return products.filter(product => product.category.title === tipe)
}


export function filterTitle(products, title){
  if(verifyObject(products)) return null;
  if(title === '' || title === undefined) return products;

  return products.filter(product => {
    return product.title.toUpperCase().includes(title.toUpperCase());
  })
}

function verifyObject(obj){
  return typeof(obj) !== 'object' || obj === null;
}