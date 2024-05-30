import { clsx } from 'clsx/lite';

interface MyButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}

export function MyButton({ className, ...props }: MyButtonProps) {
  return <button className={clsx(className, 'my-button')} {...props} />;
}
