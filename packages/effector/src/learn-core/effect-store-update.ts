import { createEffect, createStore } from 'effector';

const loadPostsFx = createEffect(async () => {
  const url = `https://jsonplaceholder.typicode.com/posts`;
  const response = await fetch(url);
  return response.json();
});

const posts$ = createStore<any[]>([]).on(loadPostsFx.doneData, (_prevState, posts) => posts);

posts$.watch((posts) => {
  console.log(`Posts amount: ${posts.length}`);
});

loadPostsFx();
