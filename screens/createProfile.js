import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_APP } from '../FireBaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

import { err } from 'react-native-svg';

const CreateProfileScreen = ({ route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [loading, setLoading] = useState(false);
  const setHasProfileData = route.params?.setHasProfileData || (() => {});
  const auth = FIREBASE_AUTH;
  const firebaseApp = FIREBASE_APP;

  const handleContinue = async () => {
    // Implement your logic to handle the continue action
    console.log('Profile details:', { firstName, lastName, mobileNumber, age, weight });
    const userProfile = {
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      age: age,
      weight: weight,
    };
    setLoading(true);
    try {
      let currUser = auth.currentUser;
      if(currUser) {
        const firestore = getFirestore(firebaseApp);
        const userDocRef = doc(firestore, 'user_profile', currUser.uid);
        await setDoc(userDocRef, userProfile);

        setHasProfileData(true);
      } else {
        alert('User not found!');
      }
    } catch (error) {
      alert('Error: '+ error.message);
    }
    finally {
      setLoading(false);
    }

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/Nubo-Logo.png')} style={styles.logo} />

      <TouchableOpacity style={styles.photoUploadButton}>
        <Image source={require('../assets/sampleUser.png')} style={styles.userPhoto} />
        <Text style={styles.photoUploadText}>Upload Photo</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First name"
          value={firstName}
          onChangeText={setFirstName}
          style={styles.input}
        />
    
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Last name"
          value={lastName}
          onChangeText={setLastName}
          style={styles.input}
        />
      
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Mobile number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          style={styles.input}
          keyboardType="phone-pad"
        />
       
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          style={styles.input}
          keyboardType="numeric"
        />
       
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Weight"
          value={weight}
          onChangeText={setWeight}
          style={styles.input}
          keyboardType="numeric"
        />
        
      </View>

      {loading ? (<ActivityIndicator size ="large" color="0000ff"/>)
            : ( <TouchableOpacity onPress={handleContinue} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>) }

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    marginTop: 30,
  },
  logo: {
    height: 80,
    width: 80,
    marginVertical: 20,
  },
  userPhoto: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 30,
  },
  photoUploadButton: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photoUploadText: {
    color: '#4CAF50',
    marginTop: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginRight: 10,
  },
  editButton: {
    padding: 8,
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  continueButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  continueButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CreateProfileScreen;
