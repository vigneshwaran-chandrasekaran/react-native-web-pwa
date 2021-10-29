import React from "react";
import {
  Button,
  Clipboard,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function ReactNativeWeb() {
  const setString = () => {
    const success = Clipboard.setString(
      "This text was copied to the clipboard by React Native"
    );
    console.log(`Clipboard.setString success? ${success}`);
  };

  return (
    <div>
      <SafeAreaView style={styles.container}>
        <div style={{ textAlign: "center" }}>
          <h1>Div tag with p Tag</h1>
          <View style={styles.buttonBox}>
            <Button onPress={setString} title="Copy to clipboard" />
          </View>
          <TextInput
            multiline={true}
            placeholder={"Try pasting here afterwards"}
            style={styles.textInput}
          />
        </div>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.value}>OS = {Platform?.OS}</Text>
          <Text style={styles.value}>OS Version = {Platform?.Version}</Text>
          <Text style={styles.value}>isTV = {Platform?.isTV?.toString()}</Text>
          {Platform.OS === "ios" && (
            <Text style={styles.value}>
              isPad = {Platform?.isPad?.toString()}
            </Text>
          )}
          <Text>Constants</Text>
          <Text style={styles.value}>
            {JSON.stringify(Platform?.constants, null, 2)}
          </Text>
        </ScrollView>
        <View>
          <Text style={styles.title}>
            The title and onPress handler are required. It is recommended to set
            accessibilityLabel to help make your app usable by everyone.
          </Text>
          <Button
            title="Press me"
            onPress={() => alert("Simple Button pressed")}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            Adjust the color in a way that looks standard on each platform. On
            iOS, the color prop controls the color of the text. On Android, the
            color adjusts the background color of the button.
          </Text>
          <Button
            title="Press me"
            color="#f194ff"
            onPress={() => alert("Button with adjusted color pressed")}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            All interaction for the component are disabled.
          </Text>
          <Button
            title="Press me"
            disabled
            onPress={() => alert("Cannot press this one")}
          />
        </View>
        <Separator />
        <View>
          <Text style={styles.title}>
            This layout strategy lets the title define the width of the button.
          </Text>
          <View style={styles.fixToText}>
            <Button
              title="Left button"
              onPress={() => alert("Left button pressed")}
            />
            <Button
              title="Right button"
              onPress={() => alert("Right button pressed")}
            />
          </View>
        </View>
      </SafeAreaView>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
