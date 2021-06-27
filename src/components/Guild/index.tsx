import React from 'react'
import { TouchableOpacity, TouchableOpacityProps, View, Text } from 'react-native'
import { Feather } from '@expo/vector-icons';

import { styles } from './styles'

import { GuildIcon } from '../GuildIcon';
import { theme } from '../../global/styles/theme';

export type GuildProps = {
    id: string;
    name: string;
    icon: string | null;
    owner: boolean;
}

type GuildComponentProps = TouchableOpacityProps & {
    data: GuildProps;
    isInGuild?: boolean
}
export function Guild({data, isInGuild, ...rest } : GuildComponentProps) {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={.7}
            {...rest}
        >
            <GuildIcon guildId={data.id} iconId={data.icon} isInGuild={isInGuild}/>

            <View style={styles.content}>
                <View>
                    <Text style={styles.title}>
                        {data.name}
                    </Text>

                    <Text style={styles.type}>
                        {data.owner ? 'Administrador' : 'Convidado'}
                    </Text>
                </View>
            </View>

            <Feather 
                    name='chevron-right'
                    color={theme.colors.heading}
                    size={24}
                />
        </TouchableOpacity>
    )
}
