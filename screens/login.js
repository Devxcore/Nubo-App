import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {

        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <View style={styles.container}>
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
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
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
    loginButton: {
        backgroundColor: '#66B440',
        padding: 10,
        borderRadius: 20,
        width: '80%',
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
});

export default LoginScreen;