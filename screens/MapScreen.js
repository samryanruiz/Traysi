import { StyleSheet, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import { useDispatch, useSelector } from "react-redux";
import { selectOrigin, setDestination, setOrigin } from "../slices/navSlice";

const MapScreen = () => {
  const dispatch = useDispatch();
  const origin = useSelector(selectOrigin);

  // You can dispatch actions to set origin and destination as needed
  // Example:
  // dispatch(setOrigin({ location: { lat: 12.34, lng: 56.78 } }));
  // dispatch(setDestination({ location: { lat: 23.45, lng: 67.89 } }));

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-3/4`}>
        <Map />
      </View>

      {/* Additional UI components or actions related to navigation can be added here */}
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
