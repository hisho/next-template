import React, { VFC, useReducer } from 'react';
import { Header } from '@src/layouts/Header/Header';
import { Footer } from '@src/layouts/Footer/Footer';
import { CommonPropsType } from '@src/configs';

type LayoutPropsType = Partial<Pick<CommonPropsType, 'className'>> &
  Pick<CommonPropsType, 'children'> &
  Readonly<{
    hero?: React.ReactNode;
  }>;

export const Layout: VFC<LayoutPropsType> = ({
  hero,
  className = '',
  children,
}) => {
  const headerHeight = 'var(--header-height)';

  return (
    <>
      <Header style={{ height: headerHeight }} />
      <div style={{ marginTop: headerHeight }} />
      {hero}
      <main className={`wrapper ${className}`}>{children}</main>
      <Footer />
    </>
  );
};
