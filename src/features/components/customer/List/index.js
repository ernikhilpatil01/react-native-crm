import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import listStyles from './styles';
import Row from './row'
import Title from '../../../../components/Title'
import Button from '../../../../components/Button'

const List = ( { region }) => {
    const { navigate } = useNavigation()
    const customers = useSelector(state => state.customer.list.customers)
    const title = region.title + ' Customers List';
    const styles = StyleSheet.create(listStyles());

    return (
        <View style={styles.container}>
            <Title text={title} />

            {(customers && customers.filter( (c) => c.region === region.id).length > 0) ? (
                customers
                    .filter( (c) => c.region === region.id)
                    .map((item) => <Row key={item.id} item={item}/>)
            ) : (
                <>
                    <Text>{'No customers yet!'}</Text>
                </>
            )}
            <Button 
                text='Add Customer'
                onPress={() => {navigate('Add Customer', region)}}
                disabled={false}
            />
            <Button 
                text='Regions'
                onPress={() => {navigate('Regions')}}
                disabled={false}
            />
        </View>
    )
}

export default List
