import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Ensure you have the @expo/vector-icons library installed
import { useNavigation } from '@react-navigation/native';

const ProfileSettingsScreen = () => {
  
  
  
  // Navigation Funtionality Starts Here **** 

 const navigation = useNavigation();

 // back button navigate to Dashborad Page

 const navigateToDashboard = () => {
    navigation.navigate('Dashboard'); 
  };

  const navigateToEditProfile = () => {
    navigation.navigate('EditProfie'); 
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => navigateToDashboard('Dashborad')} style={styles.backButton}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>

    <View style={styles.proset}>
      <View style={styles.profileSection}>
        <Image source={require('../assets/sampleUser.png')} style={styles.profileImage} />
        <Text style={styles.userName}>Chaya Sokol</Text>
        <Text style={styles.userProgram}>Medical Weight Loss Program</Text>
        <Text style={styles.userDetails}>Age: 38  Weight: 130 lbs</Text>
      </View>

      <View style={styles.menuSection}>
        {MenuItem('Edit Profile', 'user-edit', () => navigateToEditProfile('EditProfile'))}
        {MenuItem('Settings', 'cog', () => navigateToScreen('Settings'))}
        {MenuItem('Track Your Progress', 'chart-line', () => navigateToScreen('TrackProgress'))}
        {MenuItem('Terms & Privacy Policy', 'file-contract', () => navigateToScreen('TermsPrivacy'))}
        {MenuItem('Log Out', 'sign-out-alt', () => navigateToScreen('Logout'))}
      </View>

    </View>
    </ScrollView>
  );
};

const MenuItem = (title, iconName, onPress) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <FontAwesome5 name={iconName} size={20} color="#4CAF50" style={styles.menuIcon} />
    <Text style={styles.menuTitle}>{title}</Text>
    <FontAwesome5 name="chevron-right" size={14} color="grey" style={styles.menuArrow} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    padding: 10,
  },
  backButton: {
    marginLeft: 10,
    marginTop: 10,
  },
  backButtonText: {
    fontSize: 18,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
    
  },
 proset : { 
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 50,
 },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  userProgram: {
    fontSize: 16,
    color: 'grey',
    marginTop: 4,
  },
  userDetails: {
    fontSize: 16,
    marginTop: 4,
  },
  menuSection: {
    width: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  menuIcon: {
    width: 30,
  },
  menuTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },
  menuArrow: {
    marginLeft: 'auto',
  },
});

export default ProfileSettingsScreen;
