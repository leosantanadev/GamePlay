import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: 60,
        height: 60,
        marginLeft: 1,
        borderRadius: 50,
        backgroundColor: theme.colors.discord,
        alignItems: 'center',
        justifyContent: 'center'
    },

    image: {
        width: 60,
        height: 60,
        marginLeft: 1,
        borderRadius: 50,
    }
})