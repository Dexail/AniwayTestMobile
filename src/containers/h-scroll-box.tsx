import { Animated, Dimensions, View } from "react-native";
import hScrollBoxStyles from "assets/styles/h-scrool-boxStyles";
import React, {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Flex, HStack } from "@react-native-material/core";

const windowWidth = Dimensions.get("window").width;

export interface IHScrollBoxProps {
  style?: any;
  viewIndex: number;
  duration?: number;
}

export default function HScrollBox(props: PropsWithChildren<IHScrollBoxProps>) {
  const { style, viewIndex, duration } = props;
  const offsetPos = useRef(new Animated.Value(0)).current;
  const [curentDisplayIndex, setCurentDisplayIndex] = useState(0);

  useEffect(() => {
    let newOffset = 0;
    if(viewIndex > curentDisplayIndex) {
      newOffset = -windowWidth;
    } else {
      offsetPos.setValue(-windowWidth);
      newOffset = 0;
    }
    Animated.timing(offsetPos, {
      toValue: newOffset,
      duration: duration || 200,
      useNativeDriver: false,
    }).start();
    setTimeout(() => {
      setCurentDisplayIndex(viewIndex);
      offsetPos.setValue(0);
    }, duration || 200);
  }, [viewIndex]);

  const containerStyle = { ...hScrollBoxStyles.container, ...(style || {}) };
  return (
    <Box style={containerStyle}>
      <Animated.View style={{
              ...hScrollBoxStyles.animationBox,
              marginLeft: offsetPos,
               }}>
        <HStack style={hScrollBoxStyles.itemsContainer}>
          {React.Children.toArray(props.children).map((item, index) => {
            const displayState = index === viewIndex || index === curentDisplayIndex
            ? "flex"
            : "none";
            return <Box
            key={`key-slide-${index}`}
            style={{
              ...hScrollBoxStyles.item,
              display: displayState,
            }}
          >
            {item}
          </Box>
          }

          )}
        </HStack>
      </Animated.View>
    </Box>
  );
}
