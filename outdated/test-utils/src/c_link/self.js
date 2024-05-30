import * as React from 'react';

const CLASSNAMES = {
  NORMAL: 'NORMAL',
  HOVERED: 'HOVERED',
};

export const Link = ({ children, href }) => {
  const [className, setClassName] = React.useState(CLASSNAMES.NORMAL);

  return (
    <a
      className={className}
      href={href ?? '#'}
      onMouseEnter={() => {
        setClassName(CLASSNAMES.HOVERED);
      }}
      onMouseLeave={() => {
        setClassName(CLASSNAMES.NORMAL);
      }}
    >
      {children}
    </a>
  );
};
