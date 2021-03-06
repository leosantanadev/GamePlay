import React from 'react'
import { ScrollView } from 'react-native'
import { Category } from '../Category'

import { categories } from '../../utils/categories'
import { styles } from './styles'

type CategorySelectProps = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean
}

export function CategorySelect({categorySelected, setCategory, hasCheckBox = false} : CategorySelectProps) {

    return (
        <ScrollView 
            horizontal
            style={styles.container} 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingRight: 40 }}
        >
            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                        onPress={() => 
                            //console.log(categoria.id)
                            setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
        </ScrollView>
    )
}
