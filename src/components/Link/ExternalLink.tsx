import { FCX, ReactNode } from 'react';

type ExternalLinkType = {
  href: string;
  children: ReactNode;
};

export const ExternalLink: FCX<ExternalLinkType> = ({
  href,
  className = '',
  children,
}) => {
  return (
    // eslint-disable-next-line react/jsx-no-target-blank
    <a href={href} className={className} rel="noopener" target="_blank">
      {children}
    </a>
  );
};
