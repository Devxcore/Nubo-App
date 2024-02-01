import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faSearch, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "@react-native-community/datetimepicker";
import { FIREBASE_AUTH, FIREBASE_APP } from '../FireBaseConfig';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const WeightEntryScreen = ({ route, navigation }) => {
  const [currentWeight, setCurrentWeight] = useState("");
  const [date, setDate] = useState(route.params.selectedDate ?? new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [time, setTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [loading, setLoading] = useState(false);
  // Get the selected date from the navigation parameters
  const selectedDate = route.params.selectedDate;
  const auth = FIREBASE_AUTH;
  const firestore = getFirestore(FIREBASE_APP);

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

  const addWeightEntry = async () => {
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

    console.log("Weight Entry:", date);
    const weightDateDoc = date.toLocaleDateString().split('/')[0] + '-' + date.toLocaleDateString().split('/')[1] + '-' + date.getFullYear();
    const weightEntry = {
      [time.getHours()+':'+time.getMinutes()] : currentWeight
    }

    console.log("Weight Entry:", weightDateDoc);
    console.log("Weight Entry:", weightEntry);
    
    setLoading(true);
    try {
      let currUser = auth.currentUser;
      if(currUser) {

        const userDocRef = doc(firestore, 'weight_tracking', currUser.uid, 'records', weightDateDoc);
        await setDoc(userDocRef, weightEntry, { merge: true });

        console.log('Weight saved successfully!');
      } else {
        alert('User not found or Logged out!');
      }
    } catch (error) {
      alert('Error: '+ error.message);
    }
    finally {
      setLoading(false);
    }

    navigation.goBack();
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
        {/* <TouchableOpacity style={styles.addButton} onPress={addWeightEntry}>
          <Text style={styles.addButtonText}>Add Entry</Text>
        </TouchableOpacity> */}
        {loading ? (<ActivityIndicator size ="large" color="0000ff"/>)
            : (  <TouchableOpacity style={styles.addButton} onPress={addWeightEntry}>
              <Text style={styles.addButtonText}>Add Entry</Text>
            </TouchableOpacity>) }


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
