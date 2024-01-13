import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "@react-native-community/datetimepicker"; // Make sure to install this package

const WeightEntryScreen = () => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const addWeightEntry = () => {
    // Logic to handle adding the weight entry
    console.log("Weight Entry:", currentWeight, "Date:", date);
    // You would typically handle the date and weight data here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#000" />
        <Text style={styles.headerText}>Hi, Chaya Sokol</Text>
        <Image
          source={{ uri: "your_image_uri_here" }} // replace with your actual image uri
          style={styles.profilePic}
        />
      </View>
      <View style={styles.entrySection}>
        <Text style={styles.title}>Weight Tracker Entry</Text>
        <View style={styles.weightProgress}>
          <Text style={styles.currentWeight}>
            {"142 lbs" /* This should be dynamic */}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.datePickerButton}
          onPress={() => setShowDatePicker(true)}
        >
          <Text style={styles.datePickerText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DatePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
        <TextInput
          style={styles.weightInput}
          value={currentWeight}
          onChangeText={setCurrentWeight}
          placeholder="Current Weight"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.addButton} onPress={addWeightEntry}>
          <Text style={styles.addButtonText}>Add Entry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  entrySection: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  weightProgress: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  currentWeight: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  datePickerButton: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  datePickerText: {
    fontSize: 16,
  },
  weightInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  // Add any additional styling you may need
});

export default WeightEntryScreen;
