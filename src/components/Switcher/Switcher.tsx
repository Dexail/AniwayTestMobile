import React, { useEffect, useState } from 'react';
import IconComponent, { svgIcons } from 'components/Icon';
import { Text, TouchableOpacity, View, Animated } from 'react-native';
import styles from 'assets/styles/switcherStyles';

export interface ISwitcherProps {
  turnOnText: string;
  turnOffText: string;
  turnOnIcon?: keyof typeof svgIcons;
  turnOffIcon?: keyof typeof svgIcons;
  handleOnChange?: (value:boolean) => void,
  value: boolean;
}

export const Switcher = ({ turnOnText, turnOffText, turnOffIcon, turnOnIcon, value, handleOnChange }: ISwitcherProps) => {
  const lineS = -57;
  const [isEnabled, setIsEnabled] = useState(value);
  const [translateX, setTranslateX] = useState(isEnabled ? lineS : -3);

  const handleToggleSwitch = () => {
    setIsEnabled((prev) => !prev);
    setTranslateX(isEnabled ? -4 : lineS);
    if(handleOnChange){
      handleOnChange(!value);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleSwitch}>
        <View style={[styles.containerBox, { backgroundColor: isEnabled ? '#007BB5' : 'red' }]}>
          <Animated.View style={[
            styles.circle,
            { transform: [{ translateX: translateX }], },
          ]}>
            <Text>{isEnabled ?
              <View>
                <IconComponent name={turnOnIcon ? turnOnIcon : 'onSwitcherIcon'} isSvg={true} style={styles.statusIcon}/>
              </View>
              :
              <View>
                <IconComponent name={turnOffIcon ? turnOffIcon : 'offSwitcherIcon'} isSvg={true} style={styles.statusIcon}/>
              </View>
            }</Text>
          </Animated.View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
