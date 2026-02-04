import React from 'react';

export interface LayoutProps {
  /** Layout variant to showcase */
  variant?: 'full-width' | 'sidebar-content' | 'three-column' | 'holy-grail';
}

export const Layout = ({ variant = 'full-width' }: LayoutProps) => {
  if (variant === 'full-width') {
    return (
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-12">
            <div className="layout__content">
              <span>Full Width Content</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'sidebar-content') {
    return (
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-12 col-md-3">
            <div className="layout__sidebar">
              <span>Sidebar</span>
            </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="layout__content">
              <span>Main Content</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'three-column') {
    return (
      <div className="container py-4">
        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className="layout__content">
              <span>Column 1</span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="layout__content">
              <span>Column 2</span>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="layout__content">
              <span>Column 3</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'holy-grail') {
    return (
      <div className="container-fluid py-4">
        <div className="row g-3">
          <div className="col-12">
            <div className="layout__header-footer">
              <span>Header</span>
            </div>
          </div>
        </div>
        <div className="row g-3 mt-0">
          <div className="col-12 col-md-2">
            <div className="layout__sidebar">
              <span>Nav</span>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <div className="layout__content">
              <span>Main Content</span>
            </div>
          </div>
          <div className="col-12 col-md-2">
            <div className="layout__sidebar--alt">
              <span>Aside</span>
            </div>
          </div>
        </div>
        <div className="row g-3 mt-0">
          <div className="col-12">
            <div className="layout__header-footer">
              <span>Footer</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
