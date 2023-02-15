import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/welcome/WelcomeScreen";
import RegionsScreen from "../screens/region/index";
import EditScreen from "../screens/customer/EditScreen";
import ListScreen from "../screens/customer/ListScreen";
import NewScreen from "../screens/customer/NewScreen";
import { useListCustomers } from "../features/components/customer/hooks";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    useListCustomers();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Welcome"}>
                <Stack.Screen
                    name="Welcome"
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name="Regions"
                    component={RegionsScreen}
                />
                <Stack.Screen
                    name="Add Customer"
                    component={NewScreen}
                />
                <Stack.Screen
                    name="Edit Customer"
                    component={EditScreen}
                />
                <Stack.Screen
                    name="Customers"
                    component={ListScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
