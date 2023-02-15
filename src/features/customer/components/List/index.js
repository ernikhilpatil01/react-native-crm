import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useListCustomers } from "../../hooks";
import ShowCustomer from "../Show";
import Button from "../../../../components/Button";

const List = ({text}) => {
  const { navigate } = useNavigation();
  const customers = useListCustomers();
  let custByRegions = [];
  
  text !==null && customers !== null ? custByRegions = customers.filter((cust)=> cust.region == text) : customers;
  
  return (
    <View>
      <Text>Customers List</Text>

      {custByRegions && custByRegions.length > 0 ? (
        <FlatList
          data={custByRegions || []}
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
