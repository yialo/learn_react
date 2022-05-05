import { useState, useTransition, useDeferredValue } from 'react';

import { generateProducts } from './data';
import ProductList from './components/ProductList';

const dummyProducts = generateProducts();

function filterProducts(filterTerm) {
  if (!filterTerm) {
    return dummyProducts;
  }
  return dummyProducts.filter((product) => product.includes(filterTerm));
}

function App() {
  const [isPending, startTransition] = useTransition();

  const [query, setQuery] = useState('');
  const [filterTerm, setFilterTerm] = useState(query);

  const filteredProducts = filterProducts(filterTerm);

  function handleInputChange(event) {
    const { value } = event.target;
    setQuery(value);
    startTransition(() => {
      setFilterTerm(value);
    });
  }

  return (
    <div id="app">
      <input type="text" value={query} onChange={handleInputChange} />
      <ProductList products={filteredProducts} />
      {isPending && <div className="loader">Updating...</div>}
    </div>
  );
}

export default App;
