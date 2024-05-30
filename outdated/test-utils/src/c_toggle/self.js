import * as React from 'react';

export function Toggle(props) {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <button
      onClick={() => {
        setIsOn((previousState) => !previousState);
        props.onChange(!isOn);
      }}
      data-testid="toggle"
    >
      {isOn ? 'Turn on' : 'Turn off'}
    </button>
  );
}
