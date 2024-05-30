import * as React from 'react';

const CHOICES = Array.from({ length: 4 }).map((_, i) => i + 1);
const DELAY = 5000;

export const TimerCard = ({ onSelect }) => {
  const ref_lastOnSelect = React.useRef(onSelect);

  React.useEffect(() => {
    ref_lastOnSelect.current = onSelect;
  }, [onSelect]);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      ref_lastOnSelect.current(null);
    }, DELAY);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return CHOICES.map((choice) => {
    return (
      <button
        key={choice}
        data-testid={choice}
        onClick={() => {
          onSelect(choice);
        }}
      >
        {choice}
      </button>
    );
  });
};
