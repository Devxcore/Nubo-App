import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronLeft,
  faSearch,
  faChevronRight,
  faCalendarAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

// Dummy data for meal items
const mealData = [
  {
    id: "1",
    title: "Veggie Garlic Noodles",
    details: "2 Cups",
    image: "path-to-your-image", // Replace with your image path
    calories: "240 kcal",
  },
  // Add other meal items here...
];

const MealPlannerScreenSection = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    hideDatePicker();
    setSelectedDate(date);
    // Refresh the content for the selected date
  };

  const renderMealItem = ({ item }) => {
    return (
      <View style={styles.mealItemContainer}>
        <Image
          source={require("../assets/salad.jpeg")} // Replace with the correct image path
          style={styles.mealImage}
        />
        <View style={styles.mealInfo}>
          <Text style={styles.mealTitle}>{item.title}</Text>
          <View style={styles.mealInfoDetail}>
            <Text style={styles.mealDetails}>{item.details}</Text>
            <Text style={styles.mealCalories}>{item.calories}</Text>
          </View>
        </View>

        <FontAwesomeIcon icon={faPlus} size={20} color="#4CAF50" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="#4CAF50" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Meal Planner</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
          <FontAwesomeIcon icon={faSearch} size={20} color="#4CAF50" />
        </TouchableOpacity>
      </View>
      <View style={styles.dateSelector}>
        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.calendarButton}
        >
          <FontAwesomeIcon icon={faCalendarAlt} size={24} color="#4CAF50" />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.selectedDateContainer}>
        <Text style={styles.selectedDateText}>
          {selectedDate.toLocaleDateString()}
        </Text>
      </View>

      <FlatList
        data={mealData}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        style={styles.mealList}
      />

      {/* <View style={styles.selectedDateContainer}>
        <Text style={styles.selectedDateText}>{selectedDate}</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 50,
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  dateSelector: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingVertical: 10,
    marginRight: 8,
  },
  thisWeekText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  selectedDateContainer: {
    backgroundColor: "green",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedDateText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  mealList: {
    padding: 10,
  },
  mealItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 10,
  },
  mealImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  mealInfo: {
    flex: 1,
    padding: 0,
  },
  mealInfoDetail: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderTopWidth: 1,
    borderTopColor: "#FFD885",
    padding: 5,
    marginEnd: 20,
    marginStart: 20,
  },

  mealTitle: {
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: 10,
  },
  mealDetails: {
    fontSize: 14,
    color: "grey",
  },
  mealCalories: {
    fontSize: 14,
    color: "green",
  },
});

export default MealPlannerScreenSection;
