import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";

const Home = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
      <SafeAreaView style={{ flex: 1, marginTop: 60, paddingHorizontal: 10 }}>
        <View
          style={{
            paddingHorizontal: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image source={require("../../assets/Profile.png")} />
          <Image source={require("../../assets/bell.png")} />
          <TouchableOpacity onPress={toggleSidebar}>
            <Image source={require("../../assets/menu.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ paddingHorizontal: 15, paddingTop: 30 }}>
          <View
            style={{
              backgroundColor: "#643FDB",
              borderRadius: 15,
              padding: 30,
              flexDirection: "row",
            }}
          >
            <View>
              <Image source={require("../../assets/date.png")} />
            </View>
            <View style={{ paddingLeft: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Axiforma",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Pending Appointment
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Axiforma",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                Tanvir Ahmed
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Axiforma",
                  fontWeight: 400,
                  color: "white",
                }}
              >
                High Blood Pressure
              </Text>
              <View
                style={{
                  paddingTop: 20,
                  flexDirection: "row",
                  paddingHorizontal: 20,
                  alignItems: "center",
                }}
              >
                <Image source={require("../../assets/time.png")} />
                <View style={{ paddingHorizontal: 12 }}>
                  <Image source={require("../../assets/ViewPatient.png")} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ paddingTop: 20, width: "100%", paddingHorizontal: 20 }}>
          <Image
            style={{ width: "100%" }}
            source={require("../../assets/Available.png")}
          />
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#F4F4F4",
            borderRadius: 15,
            padding: 10,
            flexDirection: "row",
            paddingTop: 20,
            width: "100%",
            paddingHorizontal: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image source={require("../../assets/calendartwo.png")} />
          <Text style={{ marginLeft: 6 }}>Schedule Appointment Calendar</Text>
          <Text style={{ marginLeft: 6 }}>{"->"}</Text>
        </TouchableOpacity>
        <View style={{ paddingTop: 20, width: "100%", paddingHorizontal: 20 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Axiforma",
              fontWeight: 600,
              color: "black",
            }}
          >
            Community Feed
          </Text>
          <Image
            style={{ width: "100%", marginTop: 10 }}
            source={require("../../assets/Rectangle.png")}
          />
        </View>
        <Modal
          visible={isSidebarVisible}
          animationType="slide"
          transparent={true}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.5)",
              justifyContent: "flex-start",
              paddingHorizontal: 0,
            }}
          >
            <View
              style={{
                backgroundColor: "white",
                width: "60%",
                height: "100%",
                paddingTop: 60,
                paddingLeft: 20,
              }}
            >
              <TouchableOpacity onPress={toggleSidebar}>
                <Text>X</Text>
              </TouchableOpacity>
              <View style={{ width: "100%" }}>
                <Image source={require("../../assets/Profile.png")} />
              </View>
              <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../assets/wallet.png")} />
                <View style={{paddingHorizontal: 20}}>
                 <Text>Wallet</Text> 
                </View>
              </View>
              <View style={{ paddingTop:20, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../assets/location.png")} />
                <View style={{paddingHorizontal: 20}}>
                 <Text>Track Orders</Text> 
                </View>
              </View>
              <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../assets/edit.png")} />
                <View style={{paddingHorizontal: 20}}>
                 <Text>My Post</Text> 
                </View>
              </View>
              <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../assets/setting-2.png")} />
                <View style={{paddingHorizontal: 20}}>
                 <Text>Setting</Text> 
                </View>
              </View>
              <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../assets/receipt-edit.png")} />
                <View style={{paddingHorizontal: 20}}>
                 <Text>Live Support</Text> 
                </View>
              </View>
              <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../assets/setting-2.png")} />
                <View style={{paddingHorizontal: 20}}>
                 <Text>Suggest Features</Text> 
                </View>
              </View>
              <View style={{ paddingTop: 20, flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../assets/logout.png")} />
                <View style={{paddingHorizontal: 20}}>
                 <Text>Log Out</Text> 
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </View>
  );
};

export default Home;
