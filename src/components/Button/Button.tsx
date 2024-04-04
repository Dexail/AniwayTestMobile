import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import {
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Text from 'components/Text';
import variables from 'assets/styles/variables';
import styles from './styles';
import IconComponent from 'components/Icon';
import commonStyles from 'assets/styles/commonStyles';
import { Box, HStack } from '@react-native-material/core';

type ButtonType = {
  type?: 'primary' | 'danger' | 'link' | 'gray' | 'disabled';
  title?: string | null;
  icon?: string;
  iconSize?: number;
  disabled?: boolean;
  iconCustom? : string;
  style?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
  background?: string[],
  fullWidth?: boolean;
  onClick?: () => void;
};

const Button: React.FC<ButtonType> = ({
  type = 'primary',
  title,
  icon,
  iconSize = 28,
  disabled,
  style,
  fullWidth,
  wrapperStyle,
  iconCustom,
  textStyle,
  background,
  iconStyle,
  onClick,
}) => {
  const titleStyle = [
    type === 'link' && styles.linkText,
    type === 'danger' && styles.dangerText,
    type === 'primary' && styles.primaryText,
    type === 'disabled' && styles.disabledText,
    textStyle,
  ];

  const Wrapper = ({ children, background }: { children: React.ReactNode, background?: string[] }) => {
    switch (type) {
    case 'primary':
      return (
        <LinearGradient
          colors={[variables.deepCerulean, variables.deepCerulean]}
          style={[
            styles.default,
            !title && [styles.iconOnly, iconStyle],
            wrapperStyle,
          ]}>
          {fullWidth ? <HStack style={styles.disabledB}>
            {children}
          </HStack> : children}</LinearGradient>
      );
    case 'gray':
      return (
        <LinearGradient
          colors={[variables.gallery, variables.gallery]}
          style={[
            styles.default,
            !title && [styles.iconOnly, iconStyle],
            wrapperStyle,
          ]}>{children}</LinearGradient>
      );
    case 'disabled':
      return (
        <LinearGradient
          colors={[variables.silverChalice, variables.silverChalice]}
          style={[
            styles.default,
            !title && [styles.iconOnly, iconStyle],
            wrapperStyle,
          ]}>
          {fullWidth ? <HStack style={styles.disabledB}>
            {children}
          </HStack> : children}

        </LinearGradient>
      );
    case 'danger':

      return (
        <LinearGradient
          colors={background ? background : [variables.athensGray, variables.athensGray]}
          style={[
            {...styles.default, ...styles.dangerButton},
            !title && [styles.iconOnly, iconStyle],
            wrapperStyle,
          ]}>{children}</LinearGradient>
      );
    default:
      return <>{children}</>;
    }
  };

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onClick}
      style={[
        disabled && styles.disabled,
        type === 'link' && styles.link,
        type === 'link' && !!icon && styles.linkWithIcon,
        style,
      ]}
    >
      <Wrapper background={background}>
        {!!iconCustom &&
          // @ts-ignore
          <IconComponent style={commonStyles.IconAuthCod} name={iconCustom} isSvg={true} />
        }
        {!!title && (
          <Text style={titleStyle}>
            {title}
          </Text>
        )}
        {!!icon && !title && (
          <Icon
            name={icon}
            size={iconSize}
            style={[titleStyle, !!title && styles.icon]}
          />
        )}
        {!!icon && !!title && (
          <LinearGradient colors={variables.mainButton} style={styles.linkIcon}>
            <Icon
              name={icon}
              size={iconSize}
              style={styles.icon}
            />
          </LinearGradient>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};

export default Button;
