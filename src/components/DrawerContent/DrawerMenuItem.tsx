import React, {CSSProperties} from 'react';
import { View } from 'react-native';
import { DrawerItem as RNDrawerItem } from '@react-navigation/drawer';
import styles from 'components/DrawerContent/styles';
import Text from 'components/Text';
import variables from 'assets/styles/variables';

interface iProps {
  title?: string;
  icon?: (props: {
    focused: boolean;
    size: number;
    color: string;
  }) => React.ReactNode;
  action: () => void;
  focused?: boolean;
}

const DrawerMenuItem: React.FC<iProps> = ({ title, icon, action, focused = false }) => {
  const color = variables.mineShaft;
  const iconNode = icon ? icon({ size: 28, focused, color }) : null;

  return (<RNDrawerItem
    style={styles.itemContainer}
    label={() => (<View style={styles.item}>
      {iconNode}
      {title && <Text style={styles.itemLabel}>{title}</Text>}
    </View>)}
    onPress={action}
    labelStyle={styles.itemLabel}
    pressColor={variables.main}
  />);
};

export default DrawerMenuItem;
