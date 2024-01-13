import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronRight,
  faSearch,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const weightLogs = [
  { id: "1", date: "07/23", time: "08:00 AM", weight: "142 lbs" },
  { id: "2", date: "07/22", time: "08:00 AM", weight: "139 lbs" },
  { id: "3", date: "07/21", time: "08:00 AM", weight: "137 lbs" },
  // ... more entries
];

const WeightLogScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemTextContainer}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
        <Text style={styles.weightText}>{item.weight}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} size={16} color="grey" />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#000" />
        <Text style={styles.headerText}>Hi, Chaya Sokol</Text>
        <Image
          source={{ uri: "your_image_uri_here" }} // replace with your actual image uri
          style={styles.profilePic}
        />
        <FontAwesomeIcon icon={faSearch} size={20} color="#000" />
      </View>
      <Text style={styles.dateText}>Friday 29 July</Text>
      <View style={styles.logHeader}>
        <Text style={styles.title}>Weight Tracker</Text>
        <TouchableOpacity>
          <Text style={styles.editLogText}>Edit Log</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={weightLogs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
  dateText: {
    fontSize: 16,
    color: "grey",
    padding: 16,
  },
  logHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  editLogText: {
    fontSize: 16,
    color: "#4CAF50",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
  },
  itemTextContainer: {
    flex: 1,
  },
  dateText: {
    fontSize: 16,
    color: "black",
  },
  timeText: {
    fontSize: 16,
    color: "grey",
  },
  weightText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  // ... Add any additional styling you may need
});

export default WeightLogScreen;
