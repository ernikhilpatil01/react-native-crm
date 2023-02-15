import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import WelcomeScreen from '../screens/welcome'
import RegionsScreen from '../screens/regions'
import EditCustomer from '../screens/customer/Edit'
import CustomersList from '../screens/customer/List'
import AddCustomer from '../screens/customer/New'
import { useListCustomers } from '../features/components/customer/hooks'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    useListCustomers()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Welcome'}>
                <Stack.Screen
                    name='Welcome'
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name='Regions'
                    component={RegionsScreen}
                />
                <Stack.Screen
                    name='Add Customer'
                    component={AddCustomer}
                />
                <Stack.Screen
                    name='Edit Customer'
                    component={EditCustomer}
                />
                <Stack.Screen
                    name='Customers'
                    component={CustomersList}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation