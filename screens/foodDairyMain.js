import React, { useState } from "react";
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

const FoodDiaryScreen = ({ navigation }) => {
  const [notes, setNotes] = useState("");
  const navigateToLunchLog = () => {
    navigation.navigate("LunchLogScreen"); // Replace 'LunchLogScreen' with the actual name of your screen
  };

  return (
    <ScrollView style={styles.topheader}>
      <View style={styles.myHeader}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} />
        <Text style={styles.topheaderTitle}>Food Diary</Text>
        <TouchableOpacity onPress={navigateToLunchLog}>
          <FontAwesomeIcon icon={faSearch} size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.dateSelector}>
        <FontAwesomeIcon icon={faChevronLeft} size={12} />
        <Text style={styles.dateText}>This Week</Text>
        <FontAwesomeIcon icon={faChevronRight} size={12} />
      </View>

      <View style={styles.selDateSelector}>
        <Text style={styles.selDateText}>Monday 19th July</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.header}>Breakfast</Text>

        <View style={styles.itemContainer}>
          <Image
            source={require("../assets/sampleUser.png")} // Replace with your image URI
            style={styles.foodImage}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.foodName}>Ezekiel Bread</Text>
            <Text style={styles.foodDescription}>2 Slices, Gluten-Free</Text>
            <Text style={styles.calories}>70 kcal</Text>
          </View>
          <FontAwesomeIcon icon={faPlus} size={16} color="green" />
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topheader: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  myHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
  },
  dateSelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#fff",
    marginTop: 20,
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
    marginTop: 4,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    padding: 4,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  foodImage: {
    width: 50,
    height: 50,
    marginRight: 10,
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
    color: "grey",
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
  },
  infoItem: {
    alignItems: "center",
  },
  infoLabel: {
    color: "grey",
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
