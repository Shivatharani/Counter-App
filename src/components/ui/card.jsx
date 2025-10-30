import * as React from 'react';
import { clsx } from 'clsx';

export function Card({ className, ...props }) {
  return (
    <div
      className={clsx(
        'rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900',
        className
      )}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={clsx('p-6 border-b dark:border-slate-800', className)} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return <h3 className={clsx('text-xl font-semibold leading-none tracking-tight', className)} {...props} />;
}

export function CardDescription({ className, ...props }) {
  return <p className={clsx('text-sm text-slate-500 dark:text-slate-400', className)} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={clsx('p-6', className)} {...props} />;
}
