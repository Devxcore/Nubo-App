import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DatePicker from "@react-native-community/datetimepicker"; // Make sure to install this package
import FoodDiaryScreen from "./foodDairyMain";

const LunchNotes = ({ route, navigation }) => {
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const item = route.params?.item;

  const saveFoodDiaryEntry = () => {
    // Logic to save the food diary entry
    // Include the item data along with notes and date
    const foodDiaryEntry = {
      item: item,
      notes: notes,
      date: date,
    };

    console.log("Food Diary Entry:", foodDiaryEntry);
    // Save to backend or local storage as per your application logic

    // Navigate back or show confirmation message
    navigation.navigate("FoodDiary");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Food Diary Entry</Text>

      <TouchableOpacity
        style={styles.datePicker}
        onPress={() => showMode("date")}
      >
        <Text>{date.toLocaleDateString()}</Text>
      </TouchableOpacity>

      {show && (
        <DatePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

      <TextInput
        style={styles.notesInput}
        onChangeText={setNotes}
        value={notes}
        placeholder="Add Notes"
        multiline={true}
      />

      <TouchableOpacity style={styles.saveButton} onPress={saveFoodDiaryEntry}>
        <Text style={styles.saveButtonText}>Save to Food Diary</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    marginTop: 60,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  datePicker: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
  },
  notesInput: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 16,
    height: 150,
    textAlignVertical: "top",
    borderRadius: 8,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    padding: 16,
    borderRadius: 25,
  },
  saveButtonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default LunchNotes;
