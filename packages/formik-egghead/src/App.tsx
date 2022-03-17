import React from 'react';

type State = {
  items: string[];
  value: string;
};

const INITIAL_STATE: State = {
  items: [],
  value: '',
};

const FIELD_ID = 'value-field';

export function App() {
  const [state, setState] = React.useState(INITIAL_STATE);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState((prevState) => ({
      items: [...prevState.items, state.value],
      value: '',
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, value: event.target.value }));
  };

  return (
    <div>
      <h2>Regular Maintenance</h2>

      {state.items.length > 0 ? (
        <ul>
          {state.items.map((item, i) => (
            <li key={`${item}-${i}`}>{item}</li>
          ))}
        </ul>
      ) : (
        <div>No items</div>
      )}

      <form onSubmit={handleSubmit}>
        <label htmlFor={FIELD_ID}>New item</label>
        <input id={FIELD_ID} type="text" name="item" value={state.value} onChange={handleChange} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}
