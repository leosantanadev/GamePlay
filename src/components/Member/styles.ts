import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },

    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 18
    },

    statusContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    bulletStatus: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 9
    },

    status: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.highlight,
        fontSize: 13
    }
})