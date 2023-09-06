import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ width, height, label, color, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width,
          height,
          backgroundColor: color,
        },
        style,
      ]}
      onPress={onPress}
    >
      <Text style={{color: 'white'}}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
});

export default CustomButton;
