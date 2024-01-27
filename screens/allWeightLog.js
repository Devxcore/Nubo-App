import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faChevronRight,
  faSearch,
  faChevronLeft,
  faWeightScale,
} from "@fortawesome/free-solid-svg-icons";
import { FIREBASE_AUTH, FIREBASE_APP } from '../FireBaseConfig';
import { getFirestore, doc, setDoc, updateDoc, arrayUnion, getDoc } from 'firebase/firestore';

const weightLogs = [
  { id: "1", date: "07/23", time: "08:00 AM", weight: "142 lbs" },
  { id: "2", date: "07/22", time: "08:00 AM", weight: "139 lbs" },
  { id: "3", date: "07/21", time: "08:00 AM", weight: "137 lbs" },
  // ... more entries
];
// const [weightLogs, setWeightLogs]  = useState([]);
const auth = FIREBASE_AUTH;
const firestore = getFirestore(FIREBASE_APP);

const WeightLogScreen = ({ navigation, route }) => {
  const [weightLogData, setWeightLogData]  = useState([]);
  const [loading, setLoading] = useState(false);

  const { date } = route.params;
  const currDate = new Date(date);
  console.log("date1",currDate.toLocaleDateString());

  const renderItem = ({ item }) => (
    
    <View style={styles.itemContainer}>
      <FontAwesomeIcon
        icon={faWeightScale}
        size="35"
        style={{ color: "#32762e" }}
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
        <Text style={styles.weightText}>{item.weight}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} size={16} color="grey" />
    </View>
  );

  const handleLogin = () => {
    // Navigate to the SignUp screen
    navigation.goBack();
  };

  const handleClearArray = () => {
    // Clear the array
    setWeightLogData([]);
    console.log('Array cleared:', weightLogData);
  };

  const loadWeightData = async () => {
    handleClearArray();
    setLoading(true);
    try {
      let currUser = auth.currentUser;
      if(currUser) {
        const userDocRef = doc(firestore, 'weight_tracking', currUser.uid, 'records', currDate.toLocaleDateString().replaceAll('/','-'));
        const weightDate = await getDoc(userDocRef);

        if (weightDate.exists && weightDate.data()) {
          const data = weightDate.data();
          console.log('Records for', currDate, ':', data);
          

          const convertedData = Object.entries(weightDate.data()).map(([time, weight]) => ({
            date: currDate.toLocaleDateString(),
            time: time,
            weight: `${weight} lbs`,
          }));
      
          // Update the state with the converted data
          setWeightLogData(convertedData);

        } else {
          console.log('No records found for', currDate);
        }
      } else {
        alert('User not found or Logged out!');
      }
    } catch (error) {
      alert('Error: '+ error.message);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
      loadWeightData();    
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={handleLogin} style={styles.backButton}>
        <FontAwesomeIcon icon={faChevronLeft} size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hi, Chaya Sokol</Text>
        <Image
          source={{ uri: "your_image_uri_here" }} // replace with your actual image uri
          style={styles.profilePic}
        />
      </View>
      <Text style={styles.dateText}>{currDate.toDateString()}</Text>
      <View style={styles.logHeader}>
        <Text style={styles.title}>Weight Tracker</Text>
        <TouchableOpacity>
          <Text style={styles.editLogText}>Edit Log</Text>
        </TouchableOpacity>
      </View>

    
      {loading ? (<ActivityIndicator size ="large" color="0000ff"/>)
            : (   <FlatList
              data={weightLogData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              style={styles.weightLogList}
              // horizontal={false}
              // contentContainerStyle={{ paddingBottom: 20 }}
            />) }
      
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
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#EAEAEA",
    flex: 1,
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: 16,
    paddingVertical: 0,
    paddingBottom: 16,
    color: "#66B440",
    marginLeft: 8,
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
  weightLogList: {
    marginTop: 16,
  },
  // ... Add any additional styling you may need
});

export default WeightLogScreen;
