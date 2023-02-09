import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import List from "../../../features/customer/components/List";
import styles from "./styles";

const ListByRegion = () => (
  <SafeAreaView style={styles.view}>
    <ScrollView>
      <List />
    </ScrollView>
  </SafeAreaView>
);

export default ListByRegion;
