import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faSearch,
  faChevronDown,
  faHeart,
  faBell,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const LunchLogScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = "d3c0bd1407164ef3ad9514b48cf4f0d3"; // Replace with your actual API key

  const fetchIngredients = async () => {
    if (searchText.trim() === "") return;

    setLoading(true);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/food/products/search?apiKey=${apiKey}&query=${encodeURIComponent(
          searchText
        )}&addProductInformation=true`
      );
      const data = await response.json();
      setFoodItems(data.products || []);
      console.log(data);
    } catch (error) {
      console.error("Error fetching ingredients:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderFoodItem = ({ item }) => (
    <View style={styles.foodItemContainer}>
      <Image source={{ uri: item.image }} style={styles.foodImage} />
      <View>
        <Text style={styles.foodName}>{item.title}</Text>
        {item.nutrition && (
          <Text style={styles.foodDetails}>
            {Math.round(item.nutrition.calories)} Calories
            {item.nutrition.nutrients.unit}
          </Text>
        )}
      </View>
      <FontAwesomeIcon
        icon={faHeart}
        size={18}
        color="green"
        style={styles.likeIcon}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("LunchNotes", { item })}
      >
        <FontAwesomeIcon
          icon={faPlus}
          size={18}
          color="green"
          style={styles.plusIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.notification}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} color="green" />
        <FontAwesomeIcon icon={faBell} size={20} color="green" />
      </View>

      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Ingredient"
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={fetchIngredients}
          returnKeyType="search"
        />
        <TouchableOpacity onPress={fetchIngredients}>
          <FontAwesomeIcon icon={faSearch} size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Lunch</Text>
        <FontAwesomeIcon icon={faChevronDown} size={16} />
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabButton}>
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text>My Meals</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text>My Foods</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <FlatList
          data={foodItems}
          renderItem={renderFoodItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  // ... styles as you defined earlier
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  notification: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    margin: 15,
    backgroundColor: "#F4F4F4",
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    padding: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#F2FBEC",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tabButton: {
    borderBottomWidth: 2,
    borderBottomColor: "green",
    padding: 10,
  },
  foodItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    marginBottom: 5,
  },
  foodImage: {
    width: 70,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  foodName: {
    fontWeight: "500",
    maxWidth: "80%",
  },
  foodDetails: {
    color: "grey",
    marginTop: 10,
    color: "#97Ce99",
    fontWeight: "700",
    flexDirection: "row",
  },
  likeIcon: {
    marginLeft: "auto",
  },
  plusIcon: {
    margin: 10,
  },
});

export default LunchLogScreen;
