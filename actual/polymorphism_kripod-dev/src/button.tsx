import { clsx } from 'clsx/lite'; // Joins CSS class names

interface MyButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string; // Redundant but kept for explicitness
}

export function MyButton({ className, ...props }: MyButtonProps) {
  return <button className={clsx(className, 'my-button')} {...props} />;
}
