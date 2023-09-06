import { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
        navigation.replace("SplashTwo")
    }, 3000)
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require("../../assets/Hospytalogo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Splash;
