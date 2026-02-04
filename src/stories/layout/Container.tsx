import React from 'react';

export interface ContainerProps {
  /** Container type */
  type?: 'container' | 'container-fluid' | 'container-sm' | 'container-md' | 'container-lg' | 'container-xl' | 'container-xxl';
  /** Children content */
  children?: React.ReactNode;
}

export const Container = ({
  type = 'container',
  children
}: ContainerProps) => (
  <div className={type}>
    {children || (
      <div className="py-4">
        <div className="row">
          <div className="col">
            <div className="container-demo__box">
              <h4 className="container-demo__title">
                {type}
              </h4>
              <p className="mb-0 small">
                {type === 'container' && 'Max-width at each breakpoint'}
                {type === 'container-fluid' && '100% width at all breakpoints'}
                {type === 'container-sm' && '100% until sm breakpoint (≥576px)'}
                {type === 'container-md' && '100% until md breakpoint (≥768px)'}
                {type === 'container-lg' && '100% until lg breakpoint (≥992px)'}
                {type === 'container-xl' && '100% until xl breakpoint (≥1200px)'}
                {type === 'container-xxl' && '100% until xxl breakpoint (≥1400px)'}
              </p>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
