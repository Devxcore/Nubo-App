import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faSearch,
  faChevronLeft,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgress } from "react-native-circular-progress-indicator";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const datesOfWeek = [10, 11, 12, 13, 14, 15, 16]; // this would be dynamically generated based on the current week

const WeightTrackerSection = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay()); // Assuming today is Friday and is the 5th day of the week (index 4 since it's 0-indexed)
  // Example summary data
  const averageWeight = 142;
  const currentWeight = 137;
  const goalWeight = 130;
  const progress =
    ((currentWeight - goalWeight) / (averageWeight - goalWeight)) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faChevronLeft} size={15} color="#000" />
        <Text style={styles.headerText}>Hi, Chaya Sokol</Text>
        <Image
          source={{ uri: "your_image_uri_here" }} // replace with your actual uri
          style={styles.profilePic}
        />
      </View>
      <Text style={styles.dateText}>Friday 29 July</Text>
      <Text style={styles.sectionTitle}>Weight Tracker</Text>
      <Text style={styles.subTitle}>Your Schedule</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.dayPicker}
      >
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayItem,
              selectedDay === index && styles.selectedDayItem,
            ]}
            onPress={() => setSelectedDay(index)}
          >
            <Text style={styles.dayText}>{day}</Text>
            <Text style={styles.dateText}>{datesOfWeek[index]}</Text>
            {selectedDay === index && (
              <FontAwesomeIcon icon={faPlusCircle} size={24} color="#4CAF50" />
            )}
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
        <CircularProgress
          value={progress}
          radius={40}
          duration={1000}
          valueSuffix={"%"}
          title={"left"}
          titleStyle={styles.progressTitle}
          activeStrokeColor={"#4CAF50"}
          inActiveStrokeColor={"#e3e3e3"}
          inActiveStrokeOpacity={0.5}
        />
      </View>
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
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 1,
    paddingBottom: 30,
    color: "#66B440",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 16,
  },
  subTitle: {
    fontSize: 18,
    paddingLeft: 16,
    paddingTop: 8,
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
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#E8F5E9",
    borderRadius: 10,
    marginVertical: 16,
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
  },
  progressTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4CAF50",
  },

  // Add more styles as needed
});

export default WeightTrackerSection;
