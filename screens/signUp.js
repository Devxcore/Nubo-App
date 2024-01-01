import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FIREBASE_AUTH } from '../FireBaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const handleSignUp = async () => {
    // Implement your sign-up logic here
    console.log('Sign up with:', email, password);    

    setLoading(true);
    try{
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
        navigation.navigate('CreateProfileScreen');
    } catch (error) {
        console.log(error);
        alert('Sign up failed: ' + error.message)
    } finally {
        setLoading(false);
    }    
  };

  const handleLogin = () => {
    // Navigate to the SignUp screen
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={handleLogin} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'< Back'}</Text>
      </TouchableOpacity>
      
      <Image source={require('../assets/Nubo-Logo.png')} style={styles.logo} />

      <Text style={styles.title}>Join us</Text>
      <Text style={styles.subtitle}>
        Create an account so you can stay up to date with awesome recipes
      </Text>

      <TextInput
        placeholder="Email address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password (8 - 20 characters)"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      <Text style={styles.disclaimer}>
        By joining Nubo Wellness you agree that you are over 18 years of age or older, will receive email updates, promotions and special offers.
      </Text>

      <TouchableOpacity style={styles.buttonGoogle}>
      <Image source={require('../assets/google-icon.png')}  style={styles.googleicon}  
             />
        <Text style={styles.buttonTextGoogle}>Sign up with Google</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity onPress={handleSignUp} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <View style={styles.loginContainer}>
        <Text>Already Have An Account? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  backButtonText: {
    color: '#000',
    fontSize: 16,
  },
  logo: {
    height: 100,
    width: 100,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    borderRadius: 5,
  },
  disclaimer: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonGoogle: {
    backgroundColor: 'offwhite',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '95%',
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonTextGoogle: {
    color: 'black',
    fontWeight: 'bold',
  },
  googleicon: {
    height: 25,
    width: 25,
    marginRight: '5%',

},
  orText: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '95%',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
