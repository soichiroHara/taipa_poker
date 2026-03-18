import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className = '', ...props }: Props) {
  return (
    <button
      className={`${styles[variant]} ${className}`}
      {...props}
    />
  );
}
