import React,{ useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useUpdateFields } from "../hooks";
import { PENDING, INPROGRESS, REGIONS } from "../../../../utils/helpers";
import Button from "../../../../components/Button";
import formStyles from "./styles";
import Remainder from "../../remainder/remainder";

const Form = ({ handleSubmit, status, customerID, propRegion }) => {
  const styles = formStyles();
  const { navigate } = useNavigation();
  const { fields, setFormField } = useUpdateFields(customerID);

  const {
    first_name,
    last_name,
    active,
    region,
  } = fields

  const onSubmit = () => {
    handleSubmit()
    navigate("Customers", REGIONS[region])
    
  }

  useEffect(() => {
    if (propRegion) {
      setFormField("region", propRegion.id)
    }
  }, [])

  return (
    <View style={styles.container}>

      <TextInput
        key={"first_name"}
        placeholder={first_name || "First Name"}
        value={first_name || ""}
        style={styles.input}
        onChangeText={v => setFormField("first_name", v)}
      />

      <View style={{ height: 15, width: "100%" }}></View>

      <TextInput
        key={"last_name"}
        placeholder={last_name || "Last Name"}
        value={last_name || ""}
        style={styles.input}
        onChangeText={v => setFormField("last_name", v)}
      />
      
      <Text>Active:</Text>
      <Switch
        style={styles.switch}
        key={"active"}
        onValueChange={v => setFormField("active", v)}
        value={active || false}
      />

      <Text>Region:</Text>
      <Picker
        style={styles.picker}
        selectedValue={region || ""}
        onValueChange={(itemValue, itemIndex) => setFormField("region", itemValue)}
      >
        {REGIONS.map( (region) => 
          <Picker.Item
            key={region.id}
            label={region.title}
            value={region.id} />
        )}
      </Picker>
      <View style={styles.viewButton}>
        <Button
          onPress={onSubmit}
          text="Submit"
          disabled={(status !== PENDING && status !== INPROGRESS) || !first_name || !last_name}
        />
        {
          (!first_name || !last_name) &&
            <Text style={styles.error}>Please fill first and last name</Text>
        }
        {
          customerID && <Remainder customer={`${first_name} ${last_name}`} />
        }
      </View>

    </View>
  );
};

export default Form;
