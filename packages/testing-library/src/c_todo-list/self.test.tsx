import { render, screen, fireEvent, waitFor } from '@testing-library/react';

import { TodoList } from './self';

test('should load todo items and allow to toggle their completion', async () => {
  render(<TodoList />);

  // shows preloader at start
  expect(screen.getByText('Loading...')).toBeVisible();

  // loads todo list, then shows it and hide preloader
  await waitFor(() => expect(screen.queryByText('Loading...')).toBe(null));
  expect(screen.getByText('My todos:')).toBeVisible();

  // toggles state of todo item on button click
  const firstItemStateDiv = screen.getAllByText('Completed: false')[0];
  const firstItemButton = screen.getAllByRole('button')[0];
  fireEvent.click(firstItemButton);
  expect(firstItemStateDiv).toHaveTextContent('Completed: true');
});
