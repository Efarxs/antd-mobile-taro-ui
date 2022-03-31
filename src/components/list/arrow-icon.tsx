import React, { memo } from 'react';
import { Image } from '@tarojs/components';
import { NativeProps, withNativeProps } from '../utils/native-props';
import arrow from './assets/arrow.png';

export const ArrowIcon = memo<NativeProps>(props => {
  return withNativeProps(
    props,
    <Image
      src={arrow}
      style={{ width: '17px', height: '17px', objectFit: 'cover' }}
    />,
  );
});
