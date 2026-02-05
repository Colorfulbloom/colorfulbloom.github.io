import React, { useState } from 'react';
import { Logo } from '../design-specs/Logo';

export interface HeaderProps {
  /** Menu items to display */
  menuItems?: string[];
  /** Active menu item */
  activeItem?: string;
  /** Force mobile view for demo purposes */
  forceMobile?: boolean;
}

export const Header = ({
  menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact'],
  activeItem = 'Home',
  forceMobile = false,
}: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileClass = forceMobile ? 'd-block' : 'd-block d-md-none';
  const desktopClass = forceMobile ? 'd-none' : 'd-none d-md-flex';

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row align-items-center">
            {/* Logo Column */}
            <div className="col-6 col-md-4">
              <a href="" className="text-decoration-none">
                <Logo width={120} />
                <span className="ms-1 text-light font-manrope d-none d-md-inline">jorgecalderon.codes</span>
              </a>
            </div>

            {/* Navigation Column */}
            <div className="col-6 col-md-8 d-flex justify-content-end">
              {/* Desktop Navigation */}
              <nav className={`${desktopClass} flex-wrap justify-content-end align-items-center gap-2`}>
                {menuItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className={`header__menu-item ${item === activeItem ? 'header__menu-item--active' : ''}`}
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Mobile Hamburger Button */}
              <div className={`${mobileClass} header__mobile-nav`}>
                <button
                  className="header__hamburger-button"
                  onClick={() => setIsOpen(true)}
                  aria-expanded={isOpen}
                  aria-label="Open navigation"
                >
                  <i className="bi bi-list"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Overlay */}
      {isOpen && (
        <div className="header__mobile-overlay">
          <div className="container">
            <div className="header__mobile-header">
              <a href="" className="text-decoration-none">
                <Logo width={120} />
                <span className="ms-1 text-light font-manrope d-none d-md-inline">jorgecalderon.codes</span>
              </a>
              <button
                className="header__close-button"
                onClick={() => setIsOpen(false)}
                aria-label="Close navigation"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            <nav className="header__mobile-menu">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`header__mobile-menu-item ${item === activeItem ? 'header__mobile-menu-item--active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
