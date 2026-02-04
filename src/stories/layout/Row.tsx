import React from 'react';

export interface RowProps {
  /** Gutter size */
  gutter?: 'g-0' | 'g-1' | 'g-2' | 'g-3' | 'g-4' | 'g-5';
  /** Number of columns to display */
  columns?: 2 | 3 | 4 | 6 | 12;
  /** Children content */
  children?: React.ReactNode;
}

export const Row = ({
  gutter = 'g-3',
  columns = 3,
  children
}: RowProps) => {
  const colClass = `col-12 col-md-${12 / columns}`;

  return (
    <div className="container py-4">
      <div className={`row ${gutter}`}>
        {children || (
          [...Array(columns)].map((_, i) => (
            <div key={i} className={colClass}>
              <div className="row-demo__column">
                Column {i + 1}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
