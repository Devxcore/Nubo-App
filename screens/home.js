import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';

const YourScreen = () => {
  const categoriesData = [
    { id: 1, title: 'Category 1', image: require('./images/category1.jpg') },
    { id: 2, title: 'Category 2', image: require('./images/category2.jpg') },
    { id: 3, title: 'Category 3', image: require('./images/category3.jpg') },
    { id: 4, title: 'Category 4', image: require('./images/category4.jpg') },
  ];

  const popularDietData = [
    { id: 1, title: 'Diet 1', image: require('./images/diet1.jpg') },
    { id: 2, title: 'Diet 2', image: require('./images/diet2.jpg') },
    { id: 3, title: 'Diet 3', image: require('./images/diet3.jpg') },
    { id: 4, title: 'Diet 4', image: require('./images/diet4.jpg') },
  ];

  const cuisineDietData = [
    { id: 1, title: 'Cuisine 1', image: require('./images/cuisine1.jpg') },
    { id: 2, title: 'Cuisine 2', image: require('./images/cuisine2.jpg') },
    { id: 3, title: 'Cuisine 3', image: require('./images/cuisine3.jpg') },
    { id: 4, title: 'Cuisine 4', image: require('./images/cuisine4.jpg') },
  ];

  return (
    <View style={styles.container}>
      {/* Title and Subtitle */}
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subtitle}>Find, track and eat healthy food.</Text>

      {/* Search Bar with Image */}
      <View style={styles.searchBarContainer}>
        {/* Your search bar code goes here */}
        {/* Example: <SearchBar /> */}
        <Image source={require('./images/searchIcon.png')} style={styles.searchIcon} />
        {/* ... */}
      </View>

      {/* Image Button */}
      <TouchableOpacity style={styles.imageButtonContainer}>
        {/* Your image button code goes here */}
        {/* Example: <ImageButton /> */}
        <Image source={require('./images/buttonImage.png')} style={styles.buttonImage} />
        {/* ... */}
      </TouchableOpacity>

      {/* Categories */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <TouchableOpacity style={styles.seeAllLink}>
          <Text>See All</Text>
        </TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categoriesData.map((category) => (
            <View key={category.id} style={styles.categoryItem}>
              <Image source={category.image} style={styles.categoryImage} />
              <Text style={styles.categoryItemTitle}>{category.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* More Categories (Vertical Scroll) */}
      {/* Your code for the separate view with vertical scroll bar goes here */}
      {/* Example: <VerticalScrollView /> */}

      {/* Popular Diet */}
      <View style={styles.dietContainer}>
        <Text style={styles.dietTitle}>Popular Diet</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularDietData.map((diet) => (
            <View key={diet.id} style={styles.dietItem}>
              <Image source={diet.image} style={styles.dietImage} />
              <Text style={styles.dietItemTitle}>{diet.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Cuisine Diet */}
      <View style={styles.dietContainer}>
        <Text style={styles.dietTitle}>Cuisine Diet</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {cuisineDietData.map((diet) => (
            <View key={diet.id} style={styles.dietItem}>
              <Image source={diet.image} style={styles.dietImage} />
              <Text style={styles.dietItemTitle}>{diet.title}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 16,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  imageButtonContainer: {
    marginBottom: 16,
  },
  buttonImage: {
    width: 100,
    height: 50,
    resizeMode: 'cover',
  },
  categoryContainer: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  seeAllLink: {
    marginBottom: 8,
    color: 'blue',
  },
  categoryItem: {
    marginRight: 16,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  categoryItemTitle: {
    textAlign: 'center',
  },
  dietContainer: {
    marginBottom: 16,
  },
  dietTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dietItem: {
    marginRight: 16,
  },
  dietImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  dietItemTitle: {
    textAlign: 'center',
  },
});

export default YourScreen;