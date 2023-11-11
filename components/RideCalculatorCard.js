import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

import NavigateCard from "./NavigateCard";

const REGULAR_FARE = 10;
const DISCOUNT_PERCENTAGE = 20;
const PESO_PER_KM = 5;

const RideCalculatorCard = () => {
  const [fare, setFare] = useState(REGULAR_FARE);
  const [distance, setDistance] = useState(0);
  const [isDiscountApplied, setIsDiscountApplied] = useState(false);
  const navigation = useNavigation();

  const calculateFare = (isDiscountApplied, distance) => {
    let fareAmount = REGULAR_FARE;
    if (isDiscountApplied) {
      fareAmount = fareAmount * (1 - DISCOUNT_PERCENTAGE);
    }
    fareAmount += distance * PESO_PER_KM;
    setFare(fareAmount);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("NavigateCard")}
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
      >
        <Icon name="chevron-left" type="fontawesome" />
      </TouchableOpacity>
      <Text style={styles.title}>Fare Calculator</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Distance (km)</Text>
        <TextInput
          style={styles.inputField}
          keyboardType="numeric"
          value={distance}
          onChangeText={(text) => setDistance(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Apply discount?</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={"#f5dd4b"}
          value={isDiscountApplied}
          onValueChange={(value) => calculateFare(value, distance)}
        />
      </View>

      <View style={styles.fareContainer}>
        <Text style={styles.fareLabel}>Total fare:</Text>
        <Text style={styles.fareAmount}>₱{fare}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputField: {
    flex: 1,
    marginLeft: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  fareContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
  fareLabel: {
    fontSize: 16,
    fontWeight: "600",
  },
  fareAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RideCalculatorCard;

// import {
//   SafeAreaView,
//   TouchableOpacity,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import React from "react";
// import tw from "tailwind-react-native-classnames";
// import { Icon } from "react-native-elements";

// const data = [
//   {
//     id: "Student-1",
//     title: "Student",
//     multiplier: 0.2,
//   },
//   {
//     id: "Senior-2",
//     title: "Senior",
//     multiplier: 0.2,
//   },
//   {
//     id: "PWD-3",
//     title: "PWD",
//     multiplier: 0.2,
//   },
// ];

// const RideCalculatorCard = () => {
//   return (
//     <SafeAreaView style={tw`bg-white flex-grow`}>
//       <View>
//         <TouchableOpacity
//           onPress={() => navigation.navigate("NavigateCard")}
//           style={tw`absolute top-3 left-5 p-3 rounded-full`}
//         >
//           <Icon name="chevron-left" type="fontawesome" />
//         </TouchableOpacity>
//         <Text style={tw`text-center py-5 text-xl`}>Ride Calculator</Text>
//       </View>
//     </SafeAreaView>

//   );
// };

// export default RideCalculatorCard;

// const styles = StyleSheet.create({});
