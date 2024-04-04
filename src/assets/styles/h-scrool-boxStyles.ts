import { StyleSheet, Dimensions } from "react-native";
const deviceWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        overflow: "visible",
        width: deviceWidth,
        zIndex: 10,
        alignSelf: "flex-start",
    },
    animationBox: {
        alignSelf: "flex-start",
        width: deviceWidth,
        display: "flex",
        flexGrow: 0,
    },
    itemsContainer: {
        alignSelf: "flex-start",
        flexGrow: 0
    },
    item: {
        flexGrow: 0,
        alignSelf: "flex-start",
        width: deviceWidth,
    }
});
export default styles;
