import { render, screen } from '@testing-library/react';

import { TodoList } from './self';

test('should load todo items and allow to toggle their completion', async () => {
  render(<TodoList />);

  await screen.findByText('Loading...');

  expect(screen.getByText('Loading...')).toBeVisible();
});
