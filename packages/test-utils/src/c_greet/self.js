export const Greet = ({ name }) => {
  if (name) {
    return <h2>Hello, {name}</h2>;
  }

  return <p>Hey, stranger</p>;
};
