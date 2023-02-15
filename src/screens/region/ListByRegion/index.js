import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import List from "../../../features/customer/components/List";
import styles from "./styles";

const ListByRegion = ({route}) => {
  const {region} = route && route.params;
  
  return(
  <SafeAreaView style={styles.view}>
    <ScrollView>
      <List text={region}/>
    </ScrollView>
  </SafeAreaView>
);
  }

export default ListByRegion;
