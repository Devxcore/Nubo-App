import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/login'; 
import { UserFireBase, onAuthStateChanged } from 'firebase/auth';
// import SignUpScreen from './screens/signUp';
// import ResetPasswordScreen from './screens/reset';
// import CreateProfileScreen from './screens/createProfile';
import DashboardScreen from './screens/dashboard';
import { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from './FireBaseConfig';
 
const Stack = createStackNavigator();


const App = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user is: ', user);
      setUser(user);
    });
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator>

        {user ? (<Stack.Screen
          name="DashboardScreen"
          component={DashboardScreen}
          options={{ headerShown: false }} 
        />)  
        : (<Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }} 
        />)}

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
