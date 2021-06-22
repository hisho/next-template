import { VFC, HTMLAttributes, CSSProperties } from 'react';
import { percentage } from '@hisho/utilities';
import { CommonPropsType } from '@src/configs';

type AspectRatioPropsType = Partial<Pick<CommonPropsType, 'children'>> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'style' | 'aria-hidden'> & {
    style?: Omit<CSSProperties, 'paddingTop' | 'paddingBottom' | 'padding'>;
    width: number;
    height: number;
  };

export const AspectRatio: VFC<AspectRatioPropsType> = ({
  children,
  width,
  height,
  style = {},
  ...attributes
}) => {
  return (
    <span
      data-AspectRatio=""
      aria-hidden={true}
      style={{
        paddingTop: percentage(height / width),
        display: 'block',
        ...style,
      }}
      {...attributes}
    >
      {children}
    </span>
  );
};
