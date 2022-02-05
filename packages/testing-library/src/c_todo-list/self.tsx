import * as React from 'react';

type TodoEntity = {
  id: number;
  title: string;
  isComplete: boolean;
};

type State = {
  todos: TodoEntity[];
  isLoading: boolean;
  error: Error | null;
};

const INITIAL_STATE: State = {
  todos: [],
  isLoading: true,
  error: null,
};

const TODOS: TodoEntity[] = [
  {
    id: 1,
    title: 'Item 1',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Item 2',
    isComplete: false,
  },
  {
    id: 3,
    title: 'Item 3',
    isComplete: false,
  },
];

export const TodoList = () => {
  const [state, setState] = React.useState(INITIAL_STATE);

  React.useEffect(() => {
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        todos: TODOS,
      }));
    }, 500);
  }, []);

  const isLoaded = !state.isLoading && !state.error;
  const hasErorr = !state.isLoading && state.error;

  return (
    <div>
      {state.isLoading && <div>Loading...</div>}

      {hasErorr && <div role="alert">Loading failed</div>}

      {isLoaded &&
        (state.todos.length > 0 ? (
          <>
            <p>My todos:</p>
            <ul>
              {state.todos.map(({ id, isComplete, title }) => {
                const handleClick = () => {
                  setState((prev) => {
                    const targetTodo = prev.todos.find((todo) => todo.id === id);

                    if (!targetTodo) {
                      return prev;
                    }

                    const newTodos = prev.todos.map((todo) => {
                      if (todo !== targetTodo) {
                        return todo;
                      }

                      return {
                        ...todo,
                        isComplete: !todo.isComplete,
                      };
                    });

                    return {
                      ...prev,
                      todos: newTodos,
                    };
                  });
                };

                return (
                  <li key={id}>
                    <div>{title}</div>
                    <div>{`Completed: ${isComplete}`}</div>
                    <button type="button" aria-pressed={isComplete} onClick={handleClick}>
                      Check
                    </button>
                  </li>
                );
              })}
            </ul>
          </>
        ) : (
          <div>No todos</div>
        ))}
    </div>
  );
};
