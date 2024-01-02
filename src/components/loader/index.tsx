import React from "react";
import { View, Modal, ActivityIndicator } from "react-native";
import { useAppSettings } from "../../store/app";
import { colors } from "../../UI/Color";
import styles from "./loaderStyle";

export default function Loader() {
  const isLoading = useAppSettings().isLoading;

  return (
    <Modal visible={isLoading} transparent={true}>
      <View style={styles.modalContainer}>
        <ActivityIndicator size="large" color={colors.red} />
      </View>
    </Modal>
  );
}
