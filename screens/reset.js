import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, Alert } from 'react-native';
// Import navigation if using React Navigation
// import { useNavigation } from '@react-navigation/native';

const ResetPasswordScreen = () => {
  // Uncomment if using React Navigation
  // const navigation = useNavigation();

  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    // Implement your password reset logic here
    // For example, if using Firebase Auth:
    // auth().sendPasswordResetEmail(email)
    //   .then(() => Alert.alert('Check your email', 'A link to reset your password has been sent to your email.'))
    //   .catch((error) => Alert.alert('Error', error.message));
    
    console.log('Password reset requested for:', email);
  };

  
  const goBack = (LoginScreen) => {
    navigation.goBack();
   };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log('Back button pressed')} /* replace with goBack when navigation is set up */ style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>

      <Image source={require('../assets/Nubo-Logo.png')} style={styles.logo} />

      <Text style={styles.title}>Reset Password</Text>

      <TextInput
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity onPress={handlePasswordReset} style={styles.button}>
        <Text style={styles.buttonText}>Request Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 50,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
  },
  logo: {
    height: 80,
    width: 80,
    marginVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;