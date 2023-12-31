import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button } from 'react-native';

const EditProfileScreen = () => {
  const [firstName, setFirstName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [weight, setWeight] = useState('130 lbs');
  const [age, setAge] = useState('38');
  const [phoneNumber, setPhoneNumber] = useState('954-999-9999');
  const [email, setEmail] = useState('csokol@gmail.com');

  const handleSaveChanges = () => {
    // Save changes logic
    console.log('Save Changes');
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => {/* Navigation logic to go back */}}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <Image
          source={require('../assets/sampleUser.png')} // Replace with your image URI
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editPhotoButton}>
          <Text style={styles.editPhotoText}>Edit Photo</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.name}>Chaya Sokol</Text>
      <Text style={styles.program}>Medical Weight Loss Program</Text>
      <Text style={styles.details}>Age: 38  Weight: 130 lbs</Text>

      

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="First name"
          value={firstName}
          onChangeText={setFirstName}
        
        />
    
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Last name"
          value={lastName}
          onChangeText={setFirstName}
          
        />
    
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Weight"
          value={weight}
          onChangeText={setWeight}
          
        />
    
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          
        />
    
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
         
        />
    
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          
        />
    
      </View>
    

      <Button title="Save Changes" onPress={handleSaveChanges} color="#4CAF50" />
    </ScrollView>
  );
};

const InfoItem = ({ label, value, onChangeText }) => (
  <View style={styles.infoItem}>
    <Text style={styles.label}>{label}:</Text>
    <TextInput style={styles.input} value={value} onChangeText={onChangeText} />
    <TouchableOpacity style={styles.editButton}>
      <Text style={styles.editButtonText}>Edit</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 10,
  },
  backButton: {
    marginTop: 10,
    marginLeft: 10,
  },
  backButtonText: {
    fontSize: 18,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editPhotoButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 5,
  },
  editPhotoText: {
    color: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  program: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
  details: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  inputContainer: {
    
    flex: 1,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 20,
    margin: 5,
  },
  inputGroup: {
    margin: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    flex: 1,
  },
  input: {
    borderBottomWidth: 1,
    flex: 2,
    marginRight: 10,
    paddingVertical: 5,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    padding: 5,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
  },
});

export default EditProfileScreen;
