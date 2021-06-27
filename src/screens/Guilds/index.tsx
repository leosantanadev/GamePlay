import React, { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native'
import { Guild, GuildProps } from '../../components/Guild'
import { ListDivider } from '../../components/ListDivider'
import { Load } from '../../components/Loading'
import { api } from '../../services/api'

import { styles } from './styles'

type GuildsComponentProps = {
    handleGuildSelected: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelected } : GuildsComponentProps) {
    const [guilds, setGuilds] = useState<GuildProps[]>([])
    const [loading, setLoading] = useState(true)

    async function fecthGuilds() {
        const response = await api.get('/users/@me/guilds')
    
        setGuilds(response.data)
        setLoading(false)
    }

    useEffect(() => {
        fecthGuilds()
    }, [])

    return (
        <View style={styles.container}>
            {
                loading ? <Load /> : 
                <FlatList 
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild 
                        data={item}
                        isInGuild={true}
                        onPress={() => handleGuildSelected(item)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={() => <ListDivider isCentered={true} />}
                ItemSeparatorComponent={() => <ListDivider isCentered={true} />}
                contentContainerStyle={{ paddingBottom: 69, paddingTop: 60 }}
                style={styles.guild}
            />}
        </View>
    )
}
