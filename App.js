import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/login";
import ProfileSettingsScreen from "./screens/settings";
import FoodDiaryScreen from "./screens/foodDairyMain";
import LunchLogScreen from "./screens/lunchLog";
// import SignUpScreen from './screens/signUp';
// import ResetPasswordScreen from './screens/reset';
// import CreateProfileScreen from './screens/createProfile';
// import DashboardScreen from './screens/dashboard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={ProfileSettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FoodDairyMain"
          component={FoodDiaryScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LunchLog"
          component={LunchLogScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
