import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from '@react-navigation/native';

const Onboarding = () => {
  const navigation = useNavigation();
  const RegistrationScreen = () => {
    navigation.navigate("Register")
  }
  const SignInScreen = () => {
    navigation.navigate("Signin")
  }
  return (
    <PagerView style={{ flex: 1 }}>
      <View style={{ flex: 1, width: "100%", position: "relative" }} key="1">
        <View>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/onboardingone.png")}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            backgroundImage: "linear-gradient(#2B2B2B, #000000)",
            opacity: 0.8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 500,
                color: "white",
                fontSize: 26,
                paddingHorizontal: 5,
              }}
            >
              <Text>Convenient Telehealth:</Text>
              {"\n"}
              <Text>Virtual Consultations and Follow-up...</Text>
              {"\n"}
              <Text>Anytime, Anywhere</Text>
              {"\n"}
              <Text style={{ color: "#942A48", fontSize: 15 }}>
                With Hospyta
              </Text>
            </Text>
          </View>
        </View>
      </View>
      {/* two */}
      <View style={{ flex: 1, width: "100%", position: "relative" }} key="2">
        <View>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/onboardtwo.png")}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            backgroundImage: "linear-gradient(#2B2B2B, #000000)",
            opacity: 0.7,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 500,
                color: "white",
                fontSize: 26,
                paddingHorizontal: 5,
              }}
            >
              <Text>Prescription Plus...</Text>
              {"\n"}
              <Text>Your One-Stop Shop.</Text>
              {"\n"}
              <Text>For Medicines,</Text>
              {"\n"}
              <Text>Equipment And More</Text>
              {"\n"}
              <Text style={{ color: "#942A48", fontSize: 15 }}>
                With Hospyta
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* three */}
      <View style={{ flex: 1, width: "100%", position: "relative" }} key="3">
        <View>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/onboardingthree.png")}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            backgroundImage: "linear-gradient(#2B2B2B, #000000)",
            opacity: 0.7,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 500,
                color: "white",
                fontSize: 26,
                paddingHorizontal: 5,
              }}
            >
              <Text>Logisitics</Text>
              {"\n"}
              <Text>...And We'll Deliver It All</Text>
              {"\n"}
              <Text>Too, In Record Time</Text>
              {"\n"}
              <Text style={{ color: "#942A48", fontSize: 15 }}>
                With Hospyta
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* four */}
      <View style={{ flex: 1, width: "100%", position: "relative" }} key="4">
        <View>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={require("../../assets/onboardingfour.png")}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            backgroundImage: "linear-gradient(#2B2B2B, #000000)",
            opacity: 0.8,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Text
              style={{
                fontWeight: 500,
                color: "white",
                fontSize: 26,
                paddingHorizontal: 5,
              }}
            >
              <Text>Inspire Your Medical</Text>
              {"\n"}
              <Text>Practice Through The</Text>
              {"\n"}
              <Text>Power Of Collabration</Text>
              {"\n"}
              <Text>And Knowledge</Text>
              {"\n"}
              <Text>Sharing.</Text>
              {"\n"}
              <Text style={{ color: "#942A48", fontSize: 15 }}>
                With Hospyta
              </Text>
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton
              onPress={SignInScreen}
              label="Sign In"
              color="#4425F5"
              width="80%"
              height={50}
            />
            <CustomButton
              onPress={RegistrationScreen}
              style={{ borderColor: "white", borderWidth: 1 }}
              label="Sign Up"
              color="#2E2F31"
              width="80%"
              height={50}
            />
          </View>
        </View>
      </View>
    </PagerView>
  );
};

export default Onboarding;
