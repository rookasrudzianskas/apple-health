import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import Value from "./src/components/Value";
import RingProgress from "./src/components/RingProgress";

export default function App() {
  return (
    <View style={styles.container}>
      <RingProgress />
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
