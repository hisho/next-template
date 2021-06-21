import { VFC } from 'react';
import { rem } from '@hisho/utilities';

type SpacerPropsType = {
  size: number;
  axis?: 'vertical' | 'horizontal';
};

export const Spacer: VFC<SpacerPropsType> = ({ size, axis = 'vertical' }) => {
  const width = axis === 'vertical' ? rem(1) : rem(size);
  const height = axis === 'horizontal' ? rem(1) : rem(size);
  return (
    <span
      aria-hidden="true"
      data-Spacer=""
      style={{
        flexShrink: 0,
        pointerEvents: 'none',
        display: 'block',
        width: width,
        minWidth: width,
        height: height,
        minHeight: height,
      }}
    />
  );
};
