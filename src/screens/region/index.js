import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native";
import regionsStyles from "./styles";
import Button from "../../components/Button";
import { REGIONS } from "../../utils/helpers";

const RegionsScreen = () => {
    const styles = StyleSheet.create(regionsStyles());
    const { navigate } = useNavigation();
    const customers = useSelector(state => state.customer.list.customers)
    console.log("Regions.customers:", customers);

    return (
        <View style={styles.container}>
          <Text style={styles.text}>{"Select a Region"}</Text>

          {REGIONS.map( (region) => 
            <Button
              key={region.id}
              onPress={() => navigate("Customers", region)} 
              text={`${region.title} (${customers.filter( (c) => c.region === region.id).length} Customers)`}
              disabled={false} 
            />
          )}

          <Button
            onPress={() => navigate("Add Customer")} 
            text="Add a Customer" 
            disabled={false} 
          />

        </View>
    );
};

export default RegionsScreen;