import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSearch,
  faChevronLeft,
  faPlusCircle,
  faWeightScale,
  faCalendarDays,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
// import { CircularProgress } from "react-native-circular-progress-indicator";
import DateTimePickerModal from "react-native-modal-datetime-picker"; // Make sure to install this package

const WeightTrackerSection = ({ navigation }) => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay()); // Assuming today is Friday and is the 5th day of the week (index 4 since it's 0-indexed)
  const weightLogData = [
    { id: "1", date: "07/12/23", time: "08:00 AM", weight: "142 lbs" },
    { id: "2", date: "07/11/23", time: "07:45 AM", weight: "139 lbs" },
    { id: "3", date: "07/10/23", time: "08:15 AM", weight: "137 lbs" },
    // ... more logs
  ];

  //calender to  select date and navigate to wait entry screen

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (date) => {
    hideDatePicker();
    // You can format the date here before setting it
    // Navigate to the WeightEntryScreen with the selected date
    navigation.navigate("WeightEntryScreen", { selectedDate: date });
  };

  // Function to calculate the current week's dates
  const getCurrentWeekDates = () => {
    const today = new Date();
    const first = today.getDate() - today.getDay();
    const last = first + 6;
    const dates = [];
    for (let i = first; i <= last; i++) {
      dates.push(new Date(today.setDate(i)));
    }
    return dates;
  };
  const [currentWeekDates, setCurrentWeekDates] = useState(
    getCurrentWeekDates()
  );

  // Function to get weight logs for a specific date
  const getWeightLogsForDate = (date) => {
    // Filter your weight log data based on the selected date
    // This is a placeholder, you will need to replace it with actual logic
    return weightLogData.filter(
      (log) => new Date(log.date).toDateString() === date.toDateString()
    );
  };

  // Function to handle day selection
  const onDaySelect = (date) => {
    const logs = getWeightLogsForDate(date);
    // Show up to 3 logs for the selected date
    // This is a placeholder, you will need to replace it with actual logic
    if (logs.length) {
      Alert.alert(
        `Logs for ${date.toDateString()}`,
        logs.map((log) => `${log.time} - ${log.weight}`).join("\n")
      );
    } else {
      Alert.alert("No logs for this date");
    }
  };

  // Example summary data
  const averageWeight = 142;
  const currentWeight = 137;
  const goalWeight = 130;
  const progress =
    ((currentWeight - goalWeight) / (averageWeight - goalWeight)) * 100;

  const handleLogin = () => {
    // Navigate to the SignUp screen
    navigation.goBack();
  };

  const renderLogItem = ({ item }) => (
    <View style={styles.logItem}>
      <FontAwesomeIcon
        icon={faWeightScale}
        size="35"
        style={{ color: "#32762e" }}
      />
      <Text style={styles.logDate}>{item.date}</Text>
      <Text style={styles.logTime}>{item.time}</Text>
      <Text style={styles.logWeight}>{item.weight}</Text>
    </View>
  );

  const getWeekDays = () => {
    let curr = new Date(); // get current date
    let weekStart =
      curr.getDate() - curr.getDay() + (curr.getDay() === 0 ? -6 : 1); // adjust when day is sunday
    let days = [];
    for (let i = 0; i < 7; i++) {
      let day = new Date(curr.setDate(weekStart + i));
      days.push({
        name: day.toLocaleString("en-us", { weekday: "short" }),
        date: day.getDay(),
        fullDate: day,
      });
    }
    return days;
  };

  // ... existing code inside the WeightTrackerSection component

  const [weekDays, setWeekDays] = useState(getWeekDays());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to select a day and show up to 3 weight logs
  const selectDay = (day) => {
    setSelectedDate(day.fullDate);
    // Filter the logs for the selected day
    const logsForDay = weightLogData
      .filter((log) => {
        const logDate = new Date(log.date);
        return logDate.toDateString() === day.fullDate.toDateString();
      })
      .slice(0, 3); // Get up to 3 logs
    setFilteredLogs(logsForDay);
  };

  return (
    <View style={styles.container}>
      <View>
        {/* <FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" /> */}
        <TouchableOpacity onPress={handleLogin} style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerText}>Hi, Chaya Sokol</Text>
        <Image
          source={require("../assets/sampleUser.png")} // replace with your actual uri
          style={styles.profilePic}
        />
      </View>

      <View style={styles.dateCal}>
        <Text style={styles.dateText}>Friday 29 July</Text>
      </View>

      <View>
        <Text style={styles.sectionTitle}> Weight Tracker</Text>
      </View>

      <View style={styles.subSec}>
        <Text style={styles.subTitle}>Your Schedule</Text>

        <TouchableOpacity
          onPress={showDatePicker}
          style={styles.datePickerButton}
        >
          {/* <FontAwesomeIcon icon={faCalendarDays} size={24}  />*/}
          {/* Calendar icon to select date and navigate to WeightEntryScreen */}
          <FontAwesomeIcon
            icon={faCalendarDays}
            size={24}
            onPress={showDatePicker}
            color="#4CAF50"
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirmDate}
          onCancel={hideDatePicker}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.dayPicker}
      >
        {weekDays.map((day, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => selectDay(day)}
            style={[
              styles.dayItem,
              selectedDate.toDateString() === day.fullDate.toDateString() &&
                styles.selectedDayItem,
            ]}
          >
            <Text style={styles.dayText}>{day.name.split(',')[0]}</Text>
            <Text style={styles.dateText}>{day.name.split(',')[1].split('/')[1]}</Text>

            <FontAwesomeIcon icon={faEye} size={24} color="#4CAF50" />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.summaryContainer}>
        <View style={styles.summaryDetails}>
          <Text style={styles.summaryTitle}>Summary</Text>
          <Text style={styles.summaryText}>
            Average Weight {averageWeight} Lbs
          </Text>
          <Text style={styles.summaryText}>
            Current Weight {currentWeight} Lbs
          </Text>
          <Text style={styles.summaryText}>Goal HR {goalWeight} Lbs</Text>
        </View>
        {/* <CircularProgress
          value={progress}
          radius={40}
          duration={1000}
          valueSuffix={"%"}
          title={"left"}
          titleStyle={styles.progressTitle}
          activeStrokeColor={"#4CAF50"}
          inActiveStrokeColor={"#e3e3e3"}
          inActiveStrokeOpacity={0.5}
        /> */}
      </View>

      <View>
        <TouchableOpacity
          style={styles.seeAll}
          onPress={() =>
            navigation.navigate("AllWeightLog", { date: selectedDate })
          }
        >
          <Text style={styles.subSubTitle}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={weightLogData}
        renderItem={renderLogItem}
        keyExtractor={(item) => item.id}
        style={styles.weightLogList}
      />

      {/*

      <FlatList
      data={filteredLogs}
      renderItem={renderLogItem}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={<Text>No logs for this day.</Text>}
    />
     */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 50,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 8,
    marginTop: 5,
  },
  dateCal: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 8,
    alignContent: "center",
    marginLeft: 8,
    marginTop: -6,
  },
  dateText: {
    fontSize: 16,
    paddingVertical: 0,
    paddingBottom: 16,
    color: "#66B440",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 4,
  },
  subTitle: {
    fontSize: 18,
    paddingTop: 8,
  },
  subSec: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 10,
  },
  subSubTitle: {
    color: "#66B440",
    fontSize: 18,
    padding: 8,
    alignSelf: "flex-end",
    fontWeight: "600",
    marginRight: 8,
  },
  dayPicker: {
    flexDirection: "row",
    paddingVertical: 16,
  },
  dayItem: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  selectedDayItem: {
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
  },
  dayText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profilePic: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginRight: 9,
    marginTop: 4,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
    marginVertical: 16,
    marginHorizontal: 5,
  },
  summaryDetails: {
    justifyContent: "center",
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  summaryText: {
    fontSize: 16,
    color: "grey",
    padding: 3,
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 18,
  },
  dayPicker: {
    // Styles for your day picker
  },
  weightLogList: {
    marginTop: 16,
  },
  logItem: {
    flexDirection: "row",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    flex: 1,
    justifyContent: "space-between",
  },
  logDetails: {
    marginLeft: 10,
  },
  logWeight: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#205F26",
  },
  logDateTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  logDate: {
    fontSize: 14,
    color: "grey",
    marginRight: 5,
  },
  logTime: {
    fontSize: 14,
    color: "grey",
  },

  // Add more styles as needed
});

export default WeightTrackerSection;
