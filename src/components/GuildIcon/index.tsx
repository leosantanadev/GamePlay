import React from 'react'
import { Image, View } from 'react-native'

import { styles } from './styles'
import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type GuildIIconProps = {
    guildId: string;
    iconId: string | null;
    isInGuild? : boolean
}

export function GuildIcon({ guildId, iconId, isInGuild } : GuildIIconProps) {
    const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

    return (
        <View style={[styles.container, { marginRight: isInGuild ? 20 : 0 }]}>
        {
        iconId 
        ? 
            <Image 
                source={{ uri }}
                style={styles.image}
                resizeMode='cover'
            />
        :
            <DiscordSvg 
                width={36}
                height={36}
            />
        }
        </View>
    )
}
