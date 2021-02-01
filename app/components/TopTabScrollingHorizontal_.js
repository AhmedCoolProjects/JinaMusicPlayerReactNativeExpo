import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import CardCategory_ from './CardCategory_'

export default function TopTabScrollingHorizontal_() {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CardCategory_/>
            <CardCategory_/>
            <CardCategory_/>
            <CardCategory_/>
        </ScrollView>
    )
}
