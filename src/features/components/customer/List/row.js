import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { REGIONS } from '../../../../utils/helpers'

const Row = ({ item }) => {
    const { navigate } = useNavigation()

    return (
        <TouchableOpacity
            style={{width: '100%'}}
            onPress={() => navigate('Edit Customer', { customerID: item.id })}>
            <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
                <Text key={'id'}>ID: {item.id}</Text>
                <Text key={'fn'}>First Name: {item.first_name}</Text>
                <Text key={'ln'}>Last Name: {item.last_name}</Text>
                <Text key={'ac'}>Active: {item.active ? 'Yes' : 'No'}</Text>
                <Text key={'rg'}>Region: {REGIONS.filter((region) => region.id === item.region)[0].title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Row