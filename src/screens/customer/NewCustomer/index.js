import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Button from "../../../components/Button";
import styles from "./styles";
import {
  useNewCustomer,
  useCreateCustomerStatus,
} from "../../../features/customer/hooks";

import Form from "../../../features/customer/components/Form";

const NewCustomer = () => {
  const style = StyleSheet.create(styles());

  const { onSubmit } = useNewCustomer();
  const status = useCreateCustomerStatus();
  return (
    <SafeAreaView style={style.view}>
      <ScrollView>
        <Text style={style.title}>New Customer</Text>
        <Form handleSubmit={onSubmit} status={status} customerID={null} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewCustomer;
