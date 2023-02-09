import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, View, Text, FlatList } from "react-native";
import Button from "../../../components/Button";
import { regions } from "../../../utils/helpers";
import styles from "./styles";

const ListRegions = () => {
  const navigation = useNavigation();
  console.log(regions);

  const renderRegions = ({ item }) => (
    <View>
      <Button
        onPress={() => navigation.navigate("List by Region")}
        text={item.label}
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.view}>
      <Button
        onPress={() => navigation.navigate("New Customer")}
        text="Create Customer"
      />
      <Text style={styles.title}>List of Regions:</Text>
      <FlatList
        data={regions}
        renderItem={renderRegions}
        keyExtractor={(item) => item.value}
      />
    </SafeAreaView>
  );
};

export default ListRegions;
