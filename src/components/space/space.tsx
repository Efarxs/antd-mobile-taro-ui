import React, { FC } from 'react';
import classNames from 'classnames';
import { ITouchEvent, View } from '@tarojs/components';
import { NativeProps, withNativeProps } from 'antd-mobile/es/utils/native-props';
import { mergeProps } from 'antd-mobile/es/utils/with-default-props';

const classPrefix = `adm-space`;

export type SpaceProps = {
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'end' | 'center' | 'baseline';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  wrap?: boolean;
  block?: boolean;
  onClick?: (event: ITouchEvent) => void;
  children?: React.ReactNode;
} & NativeProps<'--gap' | '--gap-vertical' | '--gap-horizontal'>;

const defaultProps = {
  direction: 'horizontal',
};

export const Space: FC<SpaceProps> = p => {
  const props = mergeProps(defaultProps, p);
  const { direction, onClick } = props;
  return withNativeProps(
    props,
    <View
      className={classNames(classPrefix, {
        [`${classPrefix}-wrap`]: props.wrap,
        [`${classPrefix}-block`]: props.block,
        [`${classPrefix}-${direction}`]: true,
        [`${classPrefix}-align-${props.align}`]: !!props.align,
        [`${classPrefix}-justify-${props.justify}`]: !!props.justify,
      })}
      onClick={onClick}
    >
      {React.Children.map(props.children, child => {
        return child !== null && child !== undefined && <View className={`${classPrefix}-item`}>{child}</View>;
      })}
    </View>
  );
};
