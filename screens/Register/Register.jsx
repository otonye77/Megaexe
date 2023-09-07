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
import { CheckBox } from "react-native-elements";
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

const Register = () => {
  const navigation = useNavigation();
  const SignInScreen = () => {
    navigation.navigate("Signin")
  }
  const HomeScreen = () => {
    navigation.navigate("Home")
  }
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    checked: false,
  });
  const toggleCheckBox = () => {
    setState({ ...state, checked: !state.checked });
  };
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
              Register Account
            </Text>
          </View>
          <View style={{ paddingTop: 20 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Axiforma",
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
            placeholder="First Name"
            onChangeText={(text) => setState({ ...state, firstName: text })}
            value={state.firstName}
            iconSource={require("../../assets/Vector.png")}
          />
          <CustomInput
            placeholder="Last Name"
            onChangeText={(text) => setState({ ...state, lastName: text })}
            value={state.lastName}
            iconSource={require("../../assets/Vector.png")}
          />
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
          <CheckBox
            title="I accept all the terms & conditions"
            checked={state.checked}
            onPress={toggleCheckBox}
            containerStyle={{ backgroundColor: "#F7F8FA", borderWidth: 0 }}
            checkedColor="#643FDB" 
            checkedIcon="check"
          />
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <CustomButton
            onPress={HomeScreen}
            label="Register"
            color="#4425F5"
            width="100%"
            height={50}
           disabled={!state.checked}
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
        <TouchableOpacity style={{ paddingTop: 20 }}>
          <Image source={require("../../assets/Button.png")} />
        </TouchableOpacity>
        <View style={{ paddingTop: 20, alignItems: "center" }}>
          <Text>
            Already have an account?{" "}
            <TouchableOpacity onPress={SignInScreen}>
              <Text
                style={{ color: "#4425F5", textDecorationLine: "underline" }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Register;
