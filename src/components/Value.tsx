import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const Value = ({label, value}: {label: string, value: string}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default Value;
// by Rokas with ❤️

const styles = StyleSheet.create({
  value: {
    fontSize: 45,
    color: '#AFB3BE',
    fontWeight: '500',
  },
  label: {
    color: 'white',
    fontSize: 20,
  }
});
