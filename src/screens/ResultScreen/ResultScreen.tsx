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
    backgroundColor: "red",
    width: "100%",
    height: "65%",
    marginTop: "25%",
  },
  photo: {
    flex: 1,
  },
});
