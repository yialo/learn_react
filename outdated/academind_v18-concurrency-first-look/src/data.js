export function generateProducts() {
  const products = [];
  for (let i = 0; i < 100000; i++) {
    products.push(`Product ${i + 1}`);
  }
  return products;
}
