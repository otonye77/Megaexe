import React from "react";
import { View, Text, Image, Button } from "react-native";
import PagerView from "react-native-pager-view";

const Onboarding = () => {
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
          <Text style={{ fontWeight: 500, color: 'white', fontSize: 26, paddingHorizontal: 5 }}>
              <Text>Convenient Telehealth:</Text>
              {'\n'}
              <Text>Virtual Consultations and Follow-up...</Text>
              {'\n'}
              <Text>Anytime, Anywhere</Text>
            </Text>
          </View>
        </View>
      </View>
    </PagerView>
  );
};

export default Onboarding;
