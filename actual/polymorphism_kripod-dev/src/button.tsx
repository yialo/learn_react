import { clsx } from 'clsx/lite';

type DistributiveOmit<T, K extends PropertyKey> = T extends unknown
  ? Omit<T, K>
  : never;
type Merge<T, U> = DistributiveOmit<T, keyof U> & U;

type MyButtonElementType = React.ElementType<any, 'a' | 'button'>;

type MyButtonProps<T extends MyButtonElementType = 'button'> = Merge<
  React.ComponentPropsWithoutRef<T> & { as?: never }, // Prevent overriding `as` prop
  {
    as?: T;
  }
>;

export function MyButton<T extends MyButtonElementType = 'button'>({
  as = 'button' as T,
  className,
  type = 'button',
  ...props
}: MyButtonProps<T>) {
  const Component: MyButtonElementType = as;

  return (
    <Component
      className={clsx(className, 'my-button')}
      type={type}
      {...props}
    />
  );
}
