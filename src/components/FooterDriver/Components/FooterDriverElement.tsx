import {Text, TouchableOpacity, View} from "react-native";
import {Box} from "@react-native-material/core";
import React, {useEffect, useState} from "react";
import Routes from "app-enums/routes";

//Images
import Icon from "react-native-vector-icons/Ionicons";

//Styles
import driverFooterStyles from "assets/styles/driverFooterStyles";

interface IFooterNavigationElementProps {
    title: string;
    icon: string;
    namePage: string;
    currentPage: string;
    disabled?: boolean
    onClick: (name: string) => void;
}

export default function FooterDriverElement({icon, title, currentPage, namePage, disabled = false, onClick}: IFooterNavigationElementProps) {
    const [selected, setSelected] = useState(false);
    useEffect(() => {
        setSelected(currentPage === namePage);
    }, [currentPage]);

    return <View>
        {/* @ts-ignore */}
        <TouchableOpacity disabled={disabled} onPress={() => onClick(Routes[namePage])}>
            <Box style={driverFooterStyles.navElement}>
                <Icon name={icon} style={[
                    driverFooterStyles.navElementIcon,
                    selected ? driverFooterStyles.navElementSelected : {},
                    disabled ? driverFooterStyles.disableLink : {}
                ]}/>
                <Text style={[
                    driverFooterStyles.navElementTitle,
                    selected ? driverFooterStyles.navElementSelected : {},
                    disabled ? driverFooterStyles.disableLink : {}
                ]}>{title}</Text>
            </Box>
        </TouchableOpacity>
    </View>
}
