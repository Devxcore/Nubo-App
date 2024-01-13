import ProfileSettingsScreen from "./screens/settings";
import FoodDiaryScreen from "./screens/foodDairyMain";
import LunchLogScreen from "./screens/lunchLog";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/login";
import { UserFireBase, onAuthStateChanged } from "firebase/auth";
import SignUpScreen from "./screens/signUp";
// import ResetPasswordScreen from './screens/reset';
import CreateProfileScreen from "./screens/createProfile";
import DashboardScreen from "./screens/dashboard";
import WeightTracker from "./screens/wightTracker";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "./FireBaseConfig";

const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState(null);
  const [hasProfileData, setHasProfileData] = useState(false);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log("user is: ", user);
      setUser(user);
    });
    // setHasProfileData(false);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user && hasProfileData ? (
          <>
            <Stack.Screen
              name="DashboardScreen"
              component={DashboardScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WeightTracker"
              component={WeightTracker}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={ProfileSettingsScreen}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ headerShown: false }}
              initialParams={{ setHasProfileData }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateProfileScreen"
              component={CreateProfileScreen}
              options={{ headerShown: false }}
              initialParams={{ setHasProfileData }}
            />
          </>
        )}
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
