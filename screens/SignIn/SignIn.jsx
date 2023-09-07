import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import CustomInput from "../../components/CustomTextInput/CustomTextInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const Signin = () => {
  const navigation = useNavigation();
  const RegistrationScreen = () => {
    navigation.navigate("Register");
  };
  const HomeScreen = () => {
    navigation.navigate("Home");
  };
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  return (
    <View style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
      <SafeAreaView style={{ flex: 1, marginTop: 60, paddingHorizontal: 5 }}>
        <View style={{ paddingHorizontal: 20 }}>
          <Image source={require("../../assets/BackArrow.png")} />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            alignItems: "center",
            paddingTop: 40,
          }}
        >
          <View>
            <Text
              style={{ fontSize: 38, fontFamily: "Axiforma", fontWeight: 600 }}
            >
              Hello Dr
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Gotham Pro",
                fontWeight: 400,
                textAlign: "center",
              }}
            >
              Fill your details or continue with social media
            </Text>
          </View>
        </View>
        <View style={{ paddingTop: 30, alignItems: "center" }}>
          <CustomInput
            placeholder="example@gmail.com"
            onChangeText={(text) => setState({ ...state, email: text })}
            value={state.email}
            iconSource={require("../../assets/envelope.png")}
          />
          <CustomInput
            placeholder="*********"
            onChangeText={(text) => setState({ ...state, password: text })}
            value={state.password}
            iconSource={require("../../assets/Vector.png")}
          />
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <TouchableOpacity>
            <Text>Forgot Password</Text>
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <CustomButton
            onPress={HomeScreen}
            label="Sign In"
            color="#4425F5"
            width="100%"
            height={50}
          />
        </View>
        <View
          style={{
            paddingTop: 20,
            paddingHorizontal: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }}></View>
          <Text style={{ paddingHorizontal: 10 }}>or sign in with</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "gray" }}></View>
        </View>
        <TouchableOpacity style={{ paddingTop: 20, paddingHorizontal: 30 }}>
          <Image source={require("../../assets/Button.png")} />
        </TouchableOpacity>
        <View style={{ paddingTop: 20, alignItems: "center" }}>
          <Text>
            Don't have an account?{" "}
            <TouchableOpacity onPress={RegistrationScreen}>
              <Text
                style={{ color: "#4425F5", textDecorationLine: "underline" }}
              >
                Register
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Signin;
