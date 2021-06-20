import React from 'react';
import { rem } from '@hisho/utilities';
import { CommonPropsType } from '@src/configs';

type SpacerPropsType = Partial<Pick<CommonPropsType, 'className'>> & {
  size?: number | 'auto';
  style?: Omit<React.CSSProperties, 'height'>;
};

export const Spacer: React.VFC<SpacerPropsType> = ({
  className = '',
  style = {},
  size = 'auto',
}) => {
  return (
    <span
      data-spacer=""
      aria-hidden={true}
      className={`block pointer-events-none ${className}`}
      style={{
        ...{
          height: size === 'auto' ? 'auto' : rem(size),
        },
        ...style,
      }}
    />
  );
};
