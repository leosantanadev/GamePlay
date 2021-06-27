import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        width: 104,
        height: 120,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        marginRight: 8
    },

    content : {
        width: 100,
        height: 116,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: 'space-between',
        paddingVertical: 20
    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15,
        marginTop: 15
    },

    check: {
        position: "absolute",
        top: 7,
        right: 7,

        width: 12.3,
        height: 12.3,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary50,
        borderWidth: 2,
        borderRadius: 6,
    },

    checked: {
        position: "absolute",
        top: 9,
        right: 9,

        width: 8.5,
        height: 8.5,
        backgroundColor: theme.colors.primary,
        borderRadius: 6,
    },
})