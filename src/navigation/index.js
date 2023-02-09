import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screens/Welcome";
import ListRegions from "../screens/region/ListRegions";
import NewCustomer from "../screens/customer/NewCustomer";
import EditCustomer from "../screens/customer/EditCustomer";

import ListByRegion from "../screens/region/ListByRegion";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Welcome"}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="List of Regions" component={ListRegions} />
        <Stack.Screen name="List by Region" component={ListByRegion} />
        <Stack.Screen name="New Customer" component={NewCustomer} />
        <Stack.Screen name="Edit Customer" component={EditCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
