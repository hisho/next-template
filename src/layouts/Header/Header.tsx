import React, { VFC } from 'react';
import { CommonPropsType } from '@src/configs';

type HeaderPropsType = Partial<Pick<CommonPropsType, 'style'>>;

export const Header: VFC<HeaderPropsType> = () => {
  return (
    <>
      <header>
        header
      </header>
    </>
  );
};
