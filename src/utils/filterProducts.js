export function filterCategories(products, tipe) {
  if(verifyObject(products)) return null;

  if(tipe === 'Todos') return products;
  return products.filter(product => product.category.title === tipe)
}


export function filterTitle(products, title){
  if(verifyObject(products)) return null;

  return products.filter(product => {
    return product.title === title
  })
}

function verifyObject(obj){
  return typeof(obj) !== 'object' || obj === null;
}