import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import welcomeStyles from './styles';
import Button from '../../components/Button';
import { clear } from '../../utils/asyncStorage';

const Welcome = () => {
    const [initialFlag, setinitialFlag] = useState(true);
    const styles = StyleSheet.create(welcomeStyles());
    const { navigate } = useNavigation();
    return (
        <View style={styles.container}>
          <Text style={styles.text}>{'Customer Relationship Manager Plus'}</Text>
          {
          
          initialFlag &&
          <Button
            onPress={() => setinitialFlag(flag => !flag)} 
            text='Get Started' 
            disabled={false} 
          />
          }
          {
            !initialFlag &&
          <View>
          <Button
            onPress={() => navigate('Regions')} 
            text='View Regions' 
            disabled={false} 
          />

          <Button
            onPress={() => navigate('Add Customer')} 
            text='Add a Customer' 
            disabled={false} 
          />
          
          </View>
          }
            
          <Button
            onPress={() => clear()}
            text="Clear Local Storage"
            disabled={false} 
          />

        </View>
    )
}

export default Welcome