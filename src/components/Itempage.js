import React from 'react'
import { View, Text } from 'react-native'

export default function Itempage({itemDetails}) {
    const {data: details} = itemDetails
    const {description} = details
    const {price} = details
    const {qty} = details
    return (
        <View>
            <Text>{description}</Text>
            <Text>{price}</Text>
            <Text>{qty}</Text>
        </View>
    )
}
