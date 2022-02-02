import * as React from 'react';

export const User = ({ id }) => {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`/${id}`);
      setUser(await response.json());
    };

    fetchUser();
  }, [id]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <details>
      <summary>{user.name}</summary>
      <p>
        {'Age: '}
        <strong>{user.age}</strong>
        {' years old'}
      </p>
      <p>{`Lives in ${user.address}`}</p>
    </details>
  );
};
