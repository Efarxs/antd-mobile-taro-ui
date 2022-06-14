import { Image } from '@tarojs/components';
import React, { memo } from 'react';
import { NativeProps, withNativeProps } from '../../utils/native-props';
import check from './assets/check-icon.png';

export const CheckIcon = memo<NativeProps>(props => {
  return withNativeProps(props, <Image src={check} />);
});
