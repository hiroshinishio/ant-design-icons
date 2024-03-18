// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import BgColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/BgColorsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BgColorsOutlined = (
  props: AntdIconProps,
  ref: React.MutableRefObject<HTMLSpanElement>,
) => <AntdIcon {...props} ref={ref} icon={BgColorsOutlinedSvg} />;

const RefIcon: React.ForwardRefExoticComponent<
  Omit<AntdIconProps, 'ref'> & React.RefAttributes<HTMLSpanElement>
> = React.forwardRef<HTMLSpanElement, AntdIconProps>(BgColorsOutlined);
if (process.env.NODE_ENV !== 'production') {
  RefIcon.displayName = 'BgColorsOutlined';
}
export default RefIcon;