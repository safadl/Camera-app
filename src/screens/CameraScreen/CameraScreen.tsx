import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Camera } from "expo-camera";
import { ResultScreen } from "../ResultScreen";
import * as MediaLibrary from "expo-media-library";

export function CameraScreen() {
  let camera: Camera | null;
  const [showResult, setResultVisible] = useState(false);
  const [resultImage, setResultImage] = useState<any>(null);
  const [permissionResponse, requestPermission] = useState(false);

  const capturePicture = async () => {
    if (!camera) return;
    const photoTaken = await camera.takePictureAsync();
    setResultVisible(true);
    setResultImage(photoTaken);
  };

  const retakePhoto = () => {
    setResultImage(null);
    setResultVisible(false);
    capturePicture();
  };

  const usePhoto = async () => {
    const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
    requestPermission(mediaLibraryPermission.status === "granted");
    await MediaLibrary.saveToLibraryAsync(resultImage.uri);
  };

  return (
    <>
      {showResult && resultImage ? (
        <ResultScreen
          photo={resultImage}
          retakePhoto={retakePhoto}
          usePhoto={usePhoto}
        />
      ) : (
        <>
          <Camera
            style={styles.cameraStyle}
            ref={(r) => {
              camera = r;
            }}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <View style={styles.border}>
                <TouchableOpacity
                  onPress={capturePicture}
                  style={{
                    width: 60,
                    height: 60,
                    bottom: 0,
                    borderRadius: 50,
                    backgroundColor: "#fff",
                  }}
                />
              </View>
            </View>
          </View>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  text: {},
  camera: {
    flex: 1,
    width: "100%",
  },
  button: {
    alignSelf: "center",
    flex: 1,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    flexDirection: "row",
    position: "absolute",
    bottom: 50,
    padding: 20,
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
  },
  border: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50,
    padding: 4,
  },
  cameraStyle: {
    height: "65%",
    marginTop: "25%",
  },
});
