import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const ThemedCard = ({ style, ...props}) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

    return (
        <View 
            style = {[{ backgroundColor: theme.uiBackground}, design.card, style]}
            {...props}
        />
    )
}

export default ThemedCard

const design = StyleSheet.create({
    card: {
        borderRadius: 5,
        padding: 20
    }
})