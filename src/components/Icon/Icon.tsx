import React from 'react';
import { Image, StyleProp, View } from 'react-native';
import { IconMap, svgIcons } from './IconMap';

interface iSvgIcon {
  isSvg: true;
  name: keyof typeof svgIcons;
  style?: StyleProp<any>;
  height?: number;
  width?: number;
}
interface iImageIcon {
  isSvg: false;
  name: keyof typeof IconMap;
  style?: StyleProp<any>;
  width?: number;
  height?: number;
}

type IconProps = iSvgIcon | iImageIcon;

const IconComponent: React.FC<IconProps> = ({
  name,
  style,
  height,
  width,
  isSvg,
}: IconProps) => {
  return isSvg ? (
    <View style={style}>{svgIcons[name]({})}</View>
  ) : (
    <Image style={[{ height: height ? height : 20, width: width ? width : 20 }, style]} source={IconMap[name]}/>
  );
};
export default IconComponent;
