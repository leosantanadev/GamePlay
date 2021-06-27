import { StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 234,
    },

    bannerContent: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 24.5,
        marginBottom: 25,
    },

    title: {
        fontSize: 28,
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        marginBottom: 5
    },

    subtitle: {
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        color: theme.colors.heading,
        maxWidth: '80%'
    },

    members: {
        marginLeft: 24,
        marginTop: 27
    },

    footer: {
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginBottom: getBottomSpace()
    }
})