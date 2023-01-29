import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import * as MediaLibrary from "expo-media-library";

export const ResultScreen = ({ photo, retakePhoto }: any) => {

  const [permissionResponse, requestPermission] = useState(false);

  const usePhoto = async () => {
    const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
    requestPermission(mediaLibraryPermission.status === "granted");
    await MediaLibrary.saveToLibraryAsync(photo.uri);
  };

  
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.photoContainer}>
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={styles.photo}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={retakePhoto} style={styles.button}>
          <Feather name="arrow-left" size={20} color="#dc6464" />
          <Text style={styles.text}>Retake</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={usePhoto} style={styles.button}>
          <Feather name="check" size={20} color="#41cc78" />
          <Text style={styles.text}>Use photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    backgroundColor: "transparent",
    width: "100%",
    height: "65%",
    marginTop: "25%",
  },
  photo: {
    flex: 1,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    marginLeft: 15,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 8,
  },
});
