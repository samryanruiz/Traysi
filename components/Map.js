import { StyleSheet, View, PermissionsAndroid, Text } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const [hasLocationPermission, setHasLocationPermission] = useState(null);

  useEffect(() => {
    // Check and request location permission if needed
    const requestLocationPermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
        setHasLocationPermission(
          granted === PermissionsAndroid.RESULTS.GRANTED
        );
      } catch (err) {
        console.warn(err);
      }
    };

    requestLocationPermission();
  }, []);

  if (hasLocationPermission === null) {
    // Permission request is still pending
    return (
      <View style={styles.container}>
        <Text>Requesting location permission...</Text>
      </View>
    );
  }

  if (!hasLocationPermission) {
    // Handle the case where location permission is not granted
    return (
      <View style={styles.container}>
        <Text>Location permission is required to show the map.</Text>
      </View>
    );
  }

  // Set the bounds for Metro Manila
  const metroManilaBounds = {
    northEast: { latitude: 14.757, longitude: 121.056 },
    southWest: { latitude: 14.396, longitude: 120.878 },
  };

  // Use the origin location if available, otherwise use the default location
  const initialRegion = {
    latitude: origin?.location?.lat || 13.41,
    longitude: origin?.location?.lng || 122.56,
    latitudeDelta:
      metroManilaBounds.northEast.latitude -
      metroManilaBounds.southWest.latitude,
    longitudeDelta:
      metroManilaBounds.northEast.longitude -
      metroManilaBounds.southWest.longitude,
  };

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={initialRegion}
    >
      {/* Add any markers or other map components here */}
    </MapView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Map;
