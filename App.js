import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="ex. Living Room Temperature"
            placeholderTextColor={"gray"}
          />
          <Button style={styles.button} title="Add Sensor" />
        </View>
        <View>
          <Text style={styles.text}>Your Sensors:</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  text: {
    color: "white",
    marginBottom: 10,
    marginTop: 10,
  },
  textInput: {
    color: "white",
    marginTop: 30
  },
  button: {
    margin: 'auto'
  },
  view: {
    borderColor: "green",
    borderWidth: 2,
    padding: 20,
    borderRadius: 40,
    flex: 1,
    margin: 0
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    alignItems: 'center',
  }
});
