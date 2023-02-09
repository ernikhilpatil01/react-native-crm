import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ShowCustomer = ({ item }) => {
  const { navigate } = useNavigation();

  console.log("item: ", item);

  return (
    <TouchableOpacity
      onPress={() => navigate("Edit Customer", { customerID: item.id })}
    >
      <View key={item.id} style={{ borderWidth: 1, padding: 10, margin: 10 }}>
        <Text key={"id"}>ID: {item.id}</Text>
        <Text key={"fn"}>First Name: {item.firstName}</Text>
        <Text key={"ln"}>Last Name: {item.lastName}</Text>
        <Text key={"ac"}>Active: {item.active ? "True" : "False"}</Text>
        <Text key={"re"}>Region: {item.region}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ShowCustomer;
