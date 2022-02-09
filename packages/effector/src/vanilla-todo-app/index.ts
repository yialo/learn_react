export const main = () => {
  const $root = document.getElementById('root');

  if (!$root) {
    return;
  }

  const $container = document.createElement('div');
  $container.innerHTML = `<h1>Todo List</h1>`;
  $root.append($container);
};
