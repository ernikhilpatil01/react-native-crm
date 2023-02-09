import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import { clear } from "../../utils/asyncStorage";

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Welcome to Customer Manager Plus!</Text>
      <Button
        onPress={() => navigation.navigate("List of Regions")}
        text="Get Started"
      />

      <Button onPress={() => clear()} text="Clear Data" />
    </View>
  );
};

export default Welcome;
