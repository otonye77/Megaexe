import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Data } from "../../data/data";

const MedicalDevice = () => {
  const filteredData = Data.filter((item, index) => index < 3);
  return (
    <View style={{ flexDirection: "row", paddingTop: 20 }}>
      {filteredData.map((drug) => {
        return (
          <View style={{ paddingLeft: 5 }} key={drug.id}>
            <Image source={drug.image} />
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Axiforma",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                {drug.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Axiforma",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                {drug.price}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const MedicalDrugs = () => {
  const filteredData = Data.filter((item, index) => index > 2);
  return (
    <View style={{ flexDirection: "row", paddingTop: 20 }}>
      {filteredData.map((drug) => {
        return (
          <View style={{ paddingLeft: 5 }} key={drug.id}>
            <Image source={drug.image} />
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Axiforma",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                {drug.title}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Axiforma",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                {drug.price}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

const Shop = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#F7F8FA" }}>
      <ScrollView>
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: 60,
            paddingHorizontal: 10,
            paddingTop: 30,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Axiforma",
              fontWeight: 600,
              color: "black",
            }}
          >
            Shop For Medical Device
          </Text>
          {MedicalDevice()}
          <Text
            style={{
              paddingTop: 20,
              fontSize: 20,
              fontFamily: "Axiforma",
              fontWeight: 600,
              color: "black",
            }}
          >
            Shop For Medicines
          </Text>
          {MedicalDrugs()}
          <View style={{ paddingHorizontal: 5, paddingTop: 20 }}>
            <View
              style={{
                backgroundColor: "#3E64FF",
                borderRadius: 15,
                padding: 30,
              }}
            >
              <View style={{ paddingLeft: 10, flexDirection: "row" }}>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Axiforma",
                      fontWeight: 400,
                      color: "white",
                    }}
                  >
                    Amartem
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Axiforma",
                      fontWeight: 400,
                      color: "white",
                    }}
                  >
                    2201
                  </Text>
                  <Text
                    style={{
                      fontSize: 14,
                      fontFamily: "Axiforma",
                      fontWeight: 400,
                      color: "white",
                    }}
                  >
                    For Malaria and Fever made for both
                  </Text>
                </View>
                <View style={{paddingLeft: 5}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: "Axiforma",
                      fontWeight: 600,
                      color: "white",
                    }}
                  >
                    #2000
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Axiforma",
                      fontWeight: 400,
                      color: "white",
                    }}
                  >
                    #12000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingTop: 20,

                  alignItems: "center",
                }}
              >
                <Image source={require("../../assets/drugs.png")} />
              </View>
            </View>
          </View>
          <View
            style={{
              paddingTop: 20,

              alignItems: "center",
            }}
          >
            <Image source={require("../../assets/package.png")} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
export default Shop;
