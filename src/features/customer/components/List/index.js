import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useListCustomers } from "../../hooks";
import ShowCustomer from "../Show";
import Button from "../../../../components/Button";

const List = () => {
  const { navigate } = useNavigation();
  const customers = useListCustomers();

  return (
    <View>
      <Text>Customers List</Text>

      {customers && customers.length > 0 ? (
        <FlatList
          data={customers || []}
          renderItem={(props) => <ShowCustomer {...props} />}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <>
          <Text>{"No Customers"}</Text>
          <Button
            text="Add Customer"
            onPress={() => {
              navigate("New Customer");
            }}
          />
        </>
      )}
    </View>
  );
};

export default List;
