import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "@react-native-community/datetimepicker";

const WeightEntryScreen = ({ route, navigation }) => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  // Get the selected date from the navigation parameters
  const selectedDate = route.params.selectedDate;

  //Handel the date change
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  // Handles the time change
  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(false);
    setTime(currentTime);
  };

  const addWeightEntry = () => {
    // Validate the weight entry
    if (!currentWeight.trim()) {
      Alert.alert("Error", "Please enter your weight.");
      return;
    }

    // Combine date and time
    const entryDateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      time.getHours(),
      time.getMinutes()
    );

    // Save the weight entry here (local state, AsyncStorage, or backend)
    console.log("Weight Entry:", currentWeight, "DateTime:", entryDateTime);

    // Navigate back to WeightTrackerScreen and pass the new log (you may need to adjust based on your state management)
    navigation.navigate("WeightTracker", {
      newWeightLog: { currentWeight, entryDateTime },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}
        >
          <FontAwesomeIcon icon={faChevronLeft} size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hi, Chaya Sokol</Text>
        <Image
          source={require("../assets/sampleUser.png")} // Needs to replace with the actual user profile image
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
          {/* ...   <Text style={styles.datePickerText}>{date.toLocaleDateString()}</Text>  */}
          <Text style={styles.dateText}>
            Date: {selectedDate.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DatePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}

        <TouchableOpacity
          style={styles.timePickerButton}
          onPress={() => setShowTimePicker(true)}
        >
          <Text style={styles.timePickerText}>{time.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {showTimePicker && (
          <DatePicker
            value={time}
            mode="time"
            display="default"
            onChange={onChangeTime}
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
  timePickerButton: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
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
