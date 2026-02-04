import React from 'react';
import { Button } from './Button';
import type { CardProps } from './Card';
import { Card } from './Card';

export interface JumbotronProps {
  /** Main heading text */
  heading: string;
  /** Subheading/description text */
  subheading?: string;
  /** Primary button text */
  primaryButtonText?: string;
  /** Secondary button text */
  secondaryButtonText?: string;
  /** When provided, renders a Card in the right column of the hero */
  featuredCard?: CardProps;
}

export const Jumbotron = ({
  heading,
  subheading,
  primaryButtonText,
  secondaryButtonText,
  featuredCard,
}: JumbotronProps) => {
  // When a card is present the left column shrinks to make room on the right
  const leftCol = featuredCard ? 'col-12 col-md-7 col-lg-6' : 'col-12 col-md-8 col-lg-6';

  return (
    <section className="jumbotron bg-dark text-light py-5">
      <div className="container">
        <div className="row align-items-start align-items-md-stretch">
          <div className={`${leftCol} d-flex flex-column justify-content-center`}>
            <h1 className="display-4 font-questrial mb-3">
              {heading}
            </h1>
            {subheading && (
              <p className="lead font-noto text-secondary mb-4">
                {subheading}
              </p>
            )}
            {(primaryButtonText || secondaryButtonText) && (
              <div className="d-flex flex-wrap gap-3">
                {primaryButtonText && (
                  <Button label={primaryButtonText} />
                )}
                {secondaryButtonText && (
                  <Button label={secondaryButtonText} color="quicksilver" />
                )}
              </div>
            )}
          </div>

          {featuredCard && (
            <div className="col-12 col-md-5 col-lg-6 mt-4 mt-md-0">
              <Card {...featuredCard} className="h-100" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
