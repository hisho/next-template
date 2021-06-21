import { VFC, HTMLAttributes } from 'react';

type BrPropsType = Omit<HTMLAttributes<HTMLBRElement>, 'aria-hidden'>;

export const Br: VFC<BrPropsType> = (props) => {
  return <br {...props} aria-hidden={true} data-Br="" />;
};
