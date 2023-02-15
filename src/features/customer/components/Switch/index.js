import React, { useState } from "react";
import { View, Switch } from "react-native";
import styles from "./styles";

const SwitchField = ({ setFormField, active }) => {
  const [isEnabled, setIsEnabled] = useState(active);
  const toggleSwitch = (e) => {
    setIsEnabled(e);
    setFormField("active", e);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SwitchField;
