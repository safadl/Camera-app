import React, { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import { CameraScreen } from "./src/screens/CameraScreen";

export default function App() {
  const [openCamera, setOpenCamera] = useState(false);

  const launchCamera = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if (status === "granted") {
      setOpenCamera(true);
    } else {
      Alert.alert("Permission to open camera denied");
    }
  };

  return (
    <View style={styles.container}>
      {openCamera ? (
        <CameraScreen />
      ) : (
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={launchCamera} style={styles.button}>
            <Text style={styles.text}>Launch Camera</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  button: {
    width: 130,
    borderRadius: 4,
    backgroundColor: "#02cfb0",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
