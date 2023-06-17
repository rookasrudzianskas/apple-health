import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect} from "react";
import Value from "./src/components/Value";
import RingProgress from "./src/components/RingProgress";
import AppleHealthKit, {HealthKitPermissions} from "react-native-health"

const permissions: HealthKitPermissions = {
  permissions: {
    read: [],
    write: [],
  }
}

export default function App() {

  useEffect(() => {
    AppleHealthKit.initHealthKit({

    })
  }, [])

  return (
    <View style={styles.container}>
      <RingProgress
        progress={0.60}
        radius={150}
        strokeWidth={50}
      />
      <View style={styles.values}>
        <Value label={'Steps'} value={'43243'} />
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
