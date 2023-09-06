import React from "react";
import { View, TextInput, Dimensions, Image } from "react-native";

const { width } = Dimensions.get("window");

const CustomInput = ({ placeholder, onChangeText, value, iconSource }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: width * 0.8,
          height: 40,
          borderColor: "#FFFFFF",
          borderWidth: 1,
          backgroundColor: "white", 
          marginBottom: 20,
        }}
      >
        <Image
          source={iconSource}
          style={{ marginLeft: 10, marginRight: 10 }}
        />
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
          placeholderTextColor="black"
          style={{
            flex: 1,
            padding: 10,
            color: "black",
            backgroundColor: "white",
          }}
        />
      </View>
    </View>
  );
};

export default CustomInput;
