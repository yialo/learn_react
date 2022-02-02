import * as React from 'react';

export function SubThing() {
  return <p className="sub">Sub</p>;
}

export function Thing() {
  return (
    <div>
      <SubThing key="cool" foo="bar" />
      <p className="my">Hello</p>
    </div>
  );
}
