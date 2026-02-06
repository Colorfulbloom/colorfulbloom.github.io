import React from 'react';

export interface SocialLink {
  /** Font Awesome icon class */
  icon: string;
  /** Link URL */
  href: string;
  /** Accessible label */
  label: string;
}

export interface FooterProps {
  /** Navigation link labels */
  navItems?: string[];
  /** Social media links */
  socials?: SocialLink[];
  /** Email address */
  email?: string;
  /** Name for copyright line */
  name?: string;
  /** Built-with text (e.g. "React & Storybook") */
  builtWith?: string;
}

/** Site-wide footer with nav links, social icons, and copyright. */
export const Footer = ({
  navItems = ['Home', 'Blog', 'Portfolio', 'Contact'],
  socials = [],
  email,
  name = 'Jorge Calderon',
  builtWith,
}: FooterProps) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <nav>
            <ul className="footer__nav">
              {navItems.map((item) => (
                <li key={item}>
                  <a className="footer__nav-link" href={`#${item.toLowerCase()}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__socials">
            {email && (
              <a
                className="footer__social-link"
                href={`mailto:${email}`}
                aria-label="Email"
              >
                <i className="fa-solid fa-envelope" />
              </a>
            )}
            {socials.map((social) => (
              <a
                key={social.label}
                className="footer__social-link"
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <i className={social.icon} />
              </a>
            ))}
          </div>
        </div>
        <hr className="footer__divider" />
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} {name}. All rights reserved.
          </p>
          {builtWith && (
            <p className="footer__built-with">
              Built with {builtWith}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
};
