import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import New from "../../features/components/customer/New";


const NewScreen = (props) => (
  <SafeAreaView>
    <ScrollView>
      <New region={props.route.params}/>
    </ScrollView>
  </SafeAreaView>
);

export default NewScreen;
