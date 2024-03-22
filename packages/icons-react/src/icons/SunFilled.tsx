// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import SunFilledSvg from '@ant-design/icons-svg/lib/asn/SunFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const SunFilled = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={SunFilledSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(SunFilled);

if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'SunFilled';
}

export default RefIcon;