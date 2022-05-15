function filterCategories(products, tipe) {
  if(products === null) return null;
  if(tipe === 'Todos') return products;
  return products.filter(product => {    
    return product.category.title === tipe;
  });
}

export default filterCategories;