
import React, { useEffect, useState } from 'react';
import { FIREBASE_AUTH } from '../FireBaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

const LoginScreen = ({ navigation, route }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const setHasProfileData = route.params?.setHasProfileData || (() => {});

    useEffect(() => {
        setHasProfileData(false);
      }, []);

    const handleLogin = async () => {
        
        console.log('Username:', username);
        console.log('Password:', password);
        setLoading(true);
        try{
            const response = await signInWithEmailAndPassword(auth, username, password);
            setHasProfileData(true);
            console.log(response);
        } catch (error) {
            console.log(error);
            alert('Login failed: ' + error.message)
        } finally {
            setLoading(false);
        }
    };

    const handleSignUpPress = () => {
        // Navigate to the SignUp screen
        navigation.navigate('SignUpScreen');
    };

    return (

       

        <View style={styles.container}>

       <View>
            <Image source={require('../assets/Nubo-Logo.png')}  style={styles.nuboLogo1}
        
        />
        </View> 
        
            <Text style={styles.loginLabel}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email address"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />

            {loading ? (<ActivityIndicator size ="large" color="0000ff"/>)
            : (<TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Get Started</Text>
            </TouchableOpacity>) }


            <Text style={styles.forgotPassword}>Forgot password?</Text>

            <Text style={styles.orText}>OR</Text>

            <TouchableOpacity style={styles.buttonGoogle}>
           <Image source={require('../assets/google-icon.png')}  style={styles.googleicon}  
             /> 
                 <Text>Sign in with Google</Text>
         </TouchableOpacity>

         <View style={styles.signUpContainer}>

        <Text>Don't Have An Account? </Text>
        <TouchableOpacity onPress={handleSignUpPress}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>

        <Text style={styles.footerText}>By continuing, you agree to our </Text>

        <TouchableOpacity onPress={() => console.log('Terms of Service')}>
          <Text style={styles.linkText}>Terms of Service</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}> and </Text>

        <TouchableOpacity onPress={() => console.log('Privacy Policy')}>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>

      </View>
    


      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    loginLabel: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        textAlign: 'left', // Align the text within itself to the left
        alignSelf: 'flex-start',
        marginLeft: 10,
      },
    input: {
        width: '95%',
        height: 40,
        marginBottom: 16,
        paddingLeft: 8,
        borderRadius: 20,
        backgroundColor: '#E5E5E5',
    },
    nuboLogo1: {
        height: 100,
        width: 100,
        alignItems: "center" ,
        flexDirection: 'column' ,
        
    },
    loginButton: {
        backgroundColor: '#66B440',
        padding: 10,
        borderRadius: 20,
        width: '95%',
        height: 50,
        justifyContent: 'center',
        marginTop: 10,
    },
    loginButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        textAlignVertical: 'center',
    },
    forgotPassword: {
        color: '#4CAF50',
        marginBottom: 10,
        padding: 10,
    },
    orText: {
        marginVertical: 10,
    },
    buttonGoogle: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        width: '95%',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    googleicon: {
        height: 25,
        width: 25,
        marginRight: '5%',

    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    signUpText: {
        color: '#4CAF50',
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
      },
      footerText: {
        color: '#666',
      },
      linkText: {
        color: '#4CAF50',
        textDecorationLine: 'underline',
      },
    
});

export default LoginScreen;