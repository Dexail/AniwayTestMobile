import {TouchableOpacity, Text, ScrollView} from "react-native";
import React, {CSSProperties, PropsWithChildren, useEffect} from "react";
import {Box, HStack, VStack} from "@react-native-material/core";

//Styles
import tabsStyles from "assets/styles/tabsStyles";

//Components
import HScrollBox from "./h-scroll-box";

export interface ITabsProps {
    style?: any;
    activeTab: number;
    duration?: number;
    contentHeight: number | string;
    contentStyles?: CSSProperties,
    changeTab?: (tabIndex: number) => void;
    tabs: string[];
}

export default function Tabs(props: PropsWithChildren<ITabsProps>) {
    const {style, activeTab, duration, tabs, changeTab, contentHeight, contentStyles = {}} = props;
    const scrollBoxRef = React.createRef<ScrollView>();
    ;
    const containerStyle = {...tabsStyles.container, ...(style || {})};
    useEffect(() => {
        scrollBoxRef.current?.scrollTo({x: 0, y: 0, animated: false});
        setTimeout(() => {
        }, (duration || 200) + 100);
    }, [activeTab, scrollBoxRef]);
    return (
        <VStack style={containerStyle}>
            <ScrollView style={tabsStyles.scrollView} horizontal={tabs.length > 6}>
                <HStack style={tabsStyles.tabsContainer}>
                    {tabs.map((tab, i) => (
                        <Box
                            key={`tc-item-${tab}`}
                            style={[tabsStyles.tabItem, i === activeTab ? tabsStyles.activeTab : null]}
                        >
                            <TouchableOpacity
                                activeOpacity={0.9}
                                onPress={() => changeTab && changeTab(i)}
                            >
                                <Text
                                    style={i === activeTab ? tabsStyles.activeTabText : tabsStyles.tabText}
                                >
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        </Box>
                    ))}
                </HStack>
            </ScrollView>
            <Box style={{...tabsStyles.tabContent, height: contentHeight, ...contentStyles}}>
                <ScrollView ref={scrollBoxRef} style={{maxHeight: contentHeight}}
                            contentContainerStyle={{flexGrow: 1, justifyContent: "flex-start"}}>
                    <Box>
                        <HScrollBox viewIndex={activeTab} duration={duration || 200}>
                            {props.children}
                        </HScrollBox></Box>
                </ScrollView>
            </Box>
        </VStack>
    );
}
