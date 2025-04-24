import React from 'react';
import clsx from 'clsx';

export default function GitBookCard({ title, children, className }) {
  return (
    <div className={clsx('card', className)}>
      <div className="card__header">
        <h3>{title}</h3>
      </div>
      <div className="card__body">
        {children}
      </div>
    </div>
  );
}