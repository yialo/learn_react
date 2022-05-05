function ProductList({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product}>{product}</li>
      ))}
    </ul>
  );
}

export default ProductList;
