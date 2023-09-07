import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Home = () => {
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
          <TouchableOpacity>
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
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={require("../../assets/calendartwo.png")}
          />
          <Text style={{marginLeft: 6}}>Schedule Appointment Calendar</Text>
          <Text style={{marginLeft: 6}}>{'->'}</Text>
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
      </SafeAreaView>
    </View>
  );
};

export default Home;
