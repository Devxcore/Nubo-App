import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, color, } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Make sure to have @expo/vector-icons installed
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {


  // Functions to handle Settings Button Navigation

  
  
  const navigation = useNavigation();

  // Profile Button Navigation:
  const navigateToSettings = () => {
     navigation.navigate('Settings'); // back button navigate to Dashborad page form here
   };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Back button pressed')}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dashboard</Text>
        <TouchableOpacity onPress={() => console.log('Search button pressed')}>
          <Ionicons name="search-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

     <View style={styles.welcomeheader}>
        <Text style={styles.welcomeText}>Welcome to Your Personal Dashboard</Text>
        <Text style={styles.trackerText}>Health Journey Tracker</Text>

     </View>
      

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => handleIconClick('FoodDiary')}>
          <Ionicons name="fast-food-outline" size={24} color="green" />
          <Text style={styles.menuItemText}>Food Diary</Text>
          <Text style={styles.itemCountText}>5 entries</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handleIconClick('MealPlanner')}>
          <Ionicons name="calendar-outline" size={24} color="green" />
          <Text style={styles.menuItemText}>Meal Planner</Text>
          <Text style={styles.itemCountText}>4 entries</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => handleIconClick('WeightTracker')}>
          <Ionicons name="barbell-outline" size={24} color="green" />
          <Text style={styles.menuItemText}>Weight Tracker</Text>
          <Text style={styles.itemCountText}>3 items</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigateToSettings('Settings')}>
          <Ionicons name="person-outline" size={24} color="green" />
          <Text style={styles.menuItemText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    marginTop:50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  welcomeheader:{ 
    flexDirection: 'row',
    justifyContent:"space-around",
    marginTop: 20,

  },
  welcomeText: {
    padding:15,
    fontSize: 12,
    backgroundColor: '#44c850',
    flex:1,
    color: 'white',
    fontWeight: 'bold',
    alignContent: 'center',  
    margin:10,
   
    
  },
  trackerText: {
    fontSize: 12,
    backgroundColor: '#86c840',
    flex:1,
    color: 'white',
    fontWeight: 'bold',
    padding: 15,
    alignContent: 'center',
    margin:10,
  },
  menuContainer: {
    alignItems: 'center',
    marginTop:20,
  },
  menuItem: {
    width: '90%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  menuItemText: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
  },
  itemCountText: {
    fontSize: 14,
    color: 'gray',
  },
});

export default DashboardScreen;
