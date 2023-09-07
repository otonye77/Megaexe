import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Data } from "../../data/data";

const MedicalDevice = () => {
  const filteredData = Data.filter((item, index) => index < 3);
  return (
    <View style={{ flexDirection: "row", paddingTop: 20 }}>
      {filteredData.map((drug) => {
        return (
          <View style={{paddingLeft: 5}} key={drug.id}>
            <Image source={drug.image} />
            <View>
              <Text>{drug.title}</Text>
              <Text>{drug.price}</Text>
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
          <View style={{paddingLeft: 5}} key={drug.id}>
            <Image source={drug.image} />
            <View>
              <Text>{drug.title}</Text>
              <Text>{drug.price}</Text>
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
      <SafeAreaView style={{ flex: 1, marginTop: 60, paddingHorizontal: 10, paddingTop: 30 }}>
        <Text>Shop For Medical Device</Text>
        {MedicalDevice()}
        <Text style={{paddingTop:20}}>Shop For Medicines</Text>
        {MedicalDrugs()}
        <View style={{paddingTop: 20}}>
        <View
            style={{
              backgroundColor: "#3E64FF",
              borderRadius: 15,
              padding: 30,
             
            }}
          >
            <View style={{ paddingLeft: 10 }}>
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
      </SafeAreaView>
    </View>
  );
};
export default Shop;
