import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from "react";
import Value from "./src/components/Value";
import RingProgress from "./src/components/RingProgress";
import AppleHealthKit, {HealthInputOptions, HealthKitPermissions} from "react-native-health"

const permissions: HealthKitPermissions = {
  permissions: {
    read: [AppleHealthKit.Constants.Permissions.Steps],
    write: [],
  }
};

const STEPS_GOAL = 10_000;

export default function App() {
  const [hasPermission, setHasPermission] = useState(false);
  const [steps, setSteps] = useState(0)

  useEffect(() => {
    AppleHealthKit.initHealthKit(permissions, (err: any) => {
      if(err) {
        console.log(err)
        return;
      }
      setHasPermission(true);
    })
  }, []);


  useEffect(() => {
    if(!hasPermission) {
      return;
    }

    const options: HealthInputOptions = {
      date: new Date(2023, 5, 15).toISOString(),
      includeManuallyAdded: false
    };

    AppleHealthKit.getStepCount(options, (err, result) => {
      if(err) {
        console.log(err)
        return;
      }
      setSteps(result.value)
    })
  }, [hasPermission])

  return (
    <View style={styles.container}>
      <RingProgress
        progress={0.60}
        radius={150}
        strokeWidth={steps / STEPS_GOAL}
      />
      <View style={styles.values}>
        <Value label={'Steps'} value={steps.toString()} />
        <Value label={'Distance'} value={'1.43km'} />
        <Value label={'Flights Climbed'} value={'2'} />
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
