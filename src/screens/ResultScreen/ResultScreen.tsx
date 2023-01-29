import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

export const ResultScreen = ({ photo }: any) => {
  return (
    <View style={styles.photoContainer}>
      <ImageBackground
        source={{ uri: photo && photo.uri }}
        style={styles.photo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  photoContainer: {
    backgroundColor: "blue",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  photo: {
    flex: 1,
  },
});
