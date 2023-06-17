import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from "react";
import Value from "./src/components/Value";
import RingProgress from "./src/components/RingProgress";
import AppleHealthKit, {HealthInputOptions, HealthKitPermissions, HealthUnit} from "react-native-health"
import useHealthData from "./src/hooks/useHealthData";

const permissions: HealthKitPermissions = {
  permissions: {
    read: [
      AppleHealthKit.Constants.Permissions.Steps,
      AppleHealthKit.Constants.Permissions.FlightsClimbed,
      AppleHealthKit.Constants.Permissions.DistanceWalkingRunning
    ],
    write: [],
  }
};

const STEPS_GOAL = 10_000;

export default function App() {
  const [date, setDate] = useState(new Date());
  const { steps, flights, distance } = useHealthData(date);

  const changeDate = (numDays: number) => {
    const currentDate = new Date(date);
    currentDate.setDate(currentDate.getDate() + numDays);
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <RingProgress
        progress={0.60}
        radius={150}
        strokeWidth={steps / STEPS_GOAL}
      />
      <View style={styles.values}>
        <Value label={'Steps'} value={steps.toString()} />
        <Value label={'Distance'} value={`${(distance / 1000).toFixed(2)} km`} />
        <Value label={'Flights Climbed'} value={`${flights}`} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    padding: 12,
  },
  values: {
    flexDirection: 'row',
    gap: 25,
    flexWrap: 'wrap',
    marginTop: 80,
  }
});
