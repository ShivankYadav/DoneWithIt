import * as Location from "expo-location";
import { useState, useEffect } from "react";

export default useLocation = () => {
  // store location
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };

  // Now the first time this component is rendered, we want to get the user's location
  useEffect(() => {
    // get user's location permission
    // since we can't pass asunc function to effect hook
    getLocation();
  }, []);

  return location;
};
