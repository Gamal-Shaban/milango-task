import React from "react";
import { StyleSheet, View } from "react-native";
import { horizontalScale, verticalScale } from "../../../utils/functions";

export const CardItem = ({ item }) => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    minHeight: verticalScale(225),
    marginTop: verticalScale(10),
    backgroundColor: "red",
    borderRadius: verticalScale(8),
    width: horizontalScale(340)
  },
});
