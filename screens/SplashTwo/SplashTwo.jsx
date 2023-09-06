import { View, Image, StyleSheet, Text } from "react-native";

const SplashTwo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require("../../assets/Splashtwologo.png")}
      />
      <Text>Consult</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SplashTwo;
