import { createEffect } from 'effector';

const loadPostsFx = createEffect(async (id: number = 1) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(url);
  return response.json();
});

loadPostsFx.done.watch(({ result }) => {
  console.log(JSON.stringify(result, null, 2));
});

loadPostsFx(2);
