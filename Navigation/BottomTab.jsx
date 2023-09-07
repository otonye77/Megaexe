import { StyleSheet, Text, View , Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home/Home";

const BottomTab = () => {
  const Tabs = createBottomTabNavigator();
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
            source={require("../assets/HomeImage.png")}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Calendar"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
            source={require("../assets/calendartwo.png")}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="People"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
            source={require("../assets/people.png")}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Shop"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
            source={require("../assets/shop.png")}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
            source={require("../assets/profile2.png")}
              style={{ width: size, height: size }}
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTab;
