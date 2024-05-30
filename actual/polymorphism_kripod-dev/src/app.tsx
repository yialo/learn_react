import { MyButton } from './button';

export function App() {
  return (
    <div className="wrapper">
      <MyButton>Button</MyButton>
      <MyButton as="a" href="https://www.google.com/">
        To Google
      </MyButton>
    </div>
  );
}
