import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faSearch, faChevronDown, faHeart, faBell, faPlus } from '@fortawesome/free-solid-svg-icons';

const LunchLogScreen = () => {
  const foodItems = [
    { key: '1', name: 'Yogurt', details: '80 cal  1 cup Nonfat Yogurt' },
    { key: '2', name: 'Non-Fat Yogurt', details: '100 cal  6 oz Major Yogurt' },
    // Add more food items here
  ];

  const renderFoodItem = ({ item }) => (
    <View style={styles.foodItemContainer}>
      <View >
        <Text style={styles.foodName} >{item.name}</Text> 
       
      <Text style={styles.foodDetails}>{item.details}  </Text> 
      </View>

      <FontAwesomeIcon icon={faHeart} size={18} color="green" style={styles.likeIcon} />
      <FontAwesomeIcon icon={faPlus} size={18} color="green" style={styles.plusIcon} />
    </View>
  );

  return (
    <View style={styles.container}>
        
      <View style={styles.notification}>
      <FontAwesomeIcon icon={faChevronLeft} size={20} color="green" />
      <FontAwesomeIcon icon={faBell} size={20} color="green"/>
      </View>

        <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Ingreadient"
        />
        <FontAwesomeIcon icon={faSearch} size={20} />
        
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Lunch</Text>
        <FontAwesomeIcon icon={faChevronDown} size={16} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}><Text>All</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Text>My Meals</Text></TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}><Text>My Foods</Text></TouchableOpacity>
      </View>

      <FlatList
        data={foodItems}
        renderItem={renderFoodItem}
        keyExtractor={item => item.key}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  notification: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    margin: 15,
    backgroundColor: '#F4F4F4' ,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 1,
    
    
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#F2FBEC',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  tabButton: {
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    padding: 10,
  },
  foodItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#f2f2f2',
  },
  foodName: {
    fontWeight: 'bold',
  },
  foodDetails: {
    color: 'grey',
    marginTop: 10,
  },
  likeIcon: {
    marginLeft: 'auto',
  },
  plusIcon: {
    margin: 10,
  },
});

export default LunchLogScreen;