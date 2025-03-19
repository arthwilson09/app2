import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LocationScreen from "./screens/product";
// import LocationScreen from "./screens/LocationScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Define Stack Navigator
export type RootStackParamList = {
  Location: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
