import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPlus,
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faSearch,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { format } from "date-fns";

const FoodDiaryScreen = ({ navigation }) => {
  const [notes, setNotes] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [breakfastItems, setBreakfastItems] = useState([]);
  const [lunchItems, setLunchItems] = useState([]);
  const [dinnerItems, setDinnerItems] = useState([]);
  const navigateToLunchLog = () => {
    navigation.navigate("LunchLogScreen"); // Replace 'LunchLogScreen' with the actual name of your screen
  };
  useEffect(() => {
    // Set the current date
    const today = new Date();
    const formattedDate = format(today, "EEEE do MMMM");
    setCurrentDate(formattedDate);
  }, []);

  const renderMealItem = (item, mealType) => (
    <View style={styles.itemContainer}>
      <Image
        source={require("../assets/salad.jpeg")} // Replace with your image URI
        style={styles.foodImage}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.foodName}>{item.name}</Text>
        <Text style={styles.foodDescription}>{item.description}</Text>
        <Text style={styles.calories}>{item.calories} kcal</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.topheader}>
      <View style={styles.myHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={15} color="green" />
        </TouchableOpacity>
        <Text style={styles.topheaderTitle}>Food Diary</Text>
        <TouchableOpacity onPress={navigateToLunchLog}>
          <FontAwesomeIcon icon={faSearch} size={20} color="green" />
        </TouchableOpacity>
      </View>

      <View style={styles.dateSelector}>
        <FontAwesomeIcon icon={faChevronLeft} size={12} />
        <Text style={styles.dateText}>This Week</Text>
        <FontAwesomeIcon icon={faChevronRight} size={12} />
      </View>

      <View style={styles.selDateSelector}>
        <Text style={styles.selDateText}>{currentDate}</Text>
      </View>

      {/*BreakFast Container */}

      <View style={styles.breakfast}>
        <Text style={styles.header}>Breakfast</Text>
        {breakfastItems.map((item) => renderMealItem(item, "breakfast"))}
        <View style={styles.addPlus}>
          <Text style={styles.addB}>Add</Text>
          <FontAwesomeIcon icon={faPlus} size={16} color="green" />
        </View>
      </View>

      <View style={styles.container}>
        {/* <View style={styles.mealSection}>
          <Text style={styles.header}>Breakfast</Text>
          {breakfastItems.map((item) => renderMealItem(item, "breakfast"))}
        </View>

        <View style={styles.mealSection}>
          <Text style={styles.header}>Lunch</Text>
          {lunchItems.map((item) => renderMealItem(item, "lunch"))}
        </View>

        <View style={styles.mealSection}>
          <Text style={styles.header}>Dinner</Text>
          {dinnerItems.map((item) => renderMealItem(item, "dinner"))}
        </View> */}

        <View style={styles.itemContainer}>
          <Image
            source={require("../assets/bread.png")} // Replace with your image URI
            style={styles.foodImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.foodName}>Ezekiel Bread</Text>
            <Text style={styles.foodDescription}>2 Slices, Gluten-Free</Text>
          </View>
          <Text style={styles.calories}>70 kcal</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Date</Text>
            <Text style={styles.infoValue}>07/12/23</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Time</Text>
            <Text style={styles.infoValue}>08:30 AM</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Calories</Text>
            <Text style={styles.infoValue}>70 kcal</Text>
          </View>
        </View>

        <TextInput
          style={styles.notesInput}
          onChangeText={setNotes}
          value={notes}
          placeholder="Notes:"
          multiline={true}
          numberOfLines={4}
        />
      </View>

      {/*LUNCH Container */}

      <View style={styles.breakfast}>
        <Text style={styles.header}>Lunch</Text>
        {breakfastItems.map((item) => renderMealItem(item, "breakfast"))}
        <View style={styles.addPlus}>
          <Text style={styles.addB}>Add</Text>
          <FontAwesomeIcon icon={faPlus} size={16} color="green" />
        </View>
      </View>

      <View style={styles.container}>
        {/* <View style={styles.mealSection}>
          <Text style={styles.header}>Breakfast</Text>
          {breakfastItems.map((item) => renderMealItem(item, "breakfast"))}
        </View>

        <View style={styles.mealSection}>
          <Text style={styles.header}>Lunch</Text>
          {lunchItems.map((item) => renderMealItem(item, "lunch"))}
        </View>

        <View style={styles.mealSection}>
          <Text style={styles.header}>Dinner</Text>
          {dinnerItems.map((item) => renderMealItem(item, "dinner"))}
        </View> */}

        <View style={styles.itemContainer}>
          <Image
            source={require("../assets/salad.jpeg")} // Replace with your image URI
            style={styles.foodImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.foodName}>Romain Lettuce</Text>
            <Text style={styles.foodDescription}>2 Slices, Gluten-Free</Text>
          </View>
          <Text style={styles.calories}>10 kcal</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Date</Text>
            <Text style={styles.infoValue}>07/12/23</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Time</Text>
            <Text style={styles.infoValue}>02:00 PM</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Calories</Text>
            <Text style={styles.infoValue}>10 kcal</Text>
          </View>
        </View>

        <TextInput
          style={styles.notesInput}
          onChangeText={setNotes}
          value={notes}
          placeholder="Notes:"
          multiline={true}
          numberOfLines={4}
        />
      </View>

      {/*DINNER Container */}

      <View style={styles.breakfast}>
        <Text style={styles.header}>Dinner</Text>
        {breakfastItems.map((item) => renderMealItem(item, "breakfast"))}
        <View style={styles.addPlus}>
          <Text style={styles.addB}>Add</Text>
          <FontAwesomeIcon icon={faPlus} size={16} color="green" />
        </View>
      </View>

      <View style={styles.container}>
        {/* <View style={styles.mealSection}>
          <Text style={styles.header}>Breakfast</Text>
          {breakfastItems.map((item) => renderMealItem(item, "breakfast"))}
        </View>

        <View style={styles.mealSection}>
          <Text style={styles.header}>Lunch</Text>
          {lunchItems.map((item) => renderMealItem(item, "lunch"))}
        </View>

        <View style={styles.mealSection}>
          <Text style={styles.header}>Dinner</Text>
          {dinnerItems.map((item) => renderMealItem(item, "dinner"))}
        </View> */}

        <View style={styles.itemContainer}>
          <Image
            source={require("../assets/BeefKabob.png")} // Replace with your image URI
            style={styles.foodImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.foodName}>Beef Kabob </Text>
            <Text style={styles.foodDescription}>1 Piece, Protein</Text>
          </View>
          <Text style={styles.calories}>300 kcal</Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Date</Text>
            <Text style={styles.infoValue}>07/12/23</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Time</Text>
            <Text style={styles.infoValue}>09:30 PM</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Calories</Text>
            <Text style={styles.infoValue}>300 kcal</Text>
          </View>
        </View>

        <TextInput
          style={styles.notesInput}
          onChangeText={setNotes}
          value={notes}
          placeholder="Notes:"
          multiline={true}
          numberOfLines={4}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topheader: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    marginTop: 0,
  },
  myHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 65,
    backgroundColor: "#fff",
  },
  dateSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 3,
  },
  dateText: {
    fontSize: 16,
  },
  topheaderTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  selDateSelector: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 15,
    backgroundColor: "green",
  },
  selDateText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  container: {
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 0,
    padding: 20,
  },
  breakfast: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
  },
  addPlus: {
    flexDirection: "row",
    padding: 4,
    alignSelf: "center",
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 6,
  },
  header: {
    fontSize: 21,
    fontWeight: "bold",
    padding: 8,
    color: "green",
  },
  addB: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
    marginRight: 8,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  foodImage: {
    width: 60,
    height: 60,
    marginRight: 20,
    borderRadius: 30,
  },
  detailsContainer: {
    flex: 1,
  },
  foodName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  foodDescription: {
    fontSize: 14,
    color: "#2A6C2B",
  },
  calories: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 10,
    borderTopColor: "#FFD885",
    borderTopWidth: 1,
  },
  infoItem: {
    alignItems: "center",
  },
  infoLabel: {
    color: "#2A6C2B",
  },
  infoValue: {
    fontWeight: "bold",
  },
  notesInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    textAlignVertical: "top", // Aligns text to the top on Android
  },
});

export default FoodDiaryScreen;
