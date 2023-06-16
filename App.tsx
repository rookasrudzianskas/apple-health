import { StyleSheet, Text, View } from 'react-native';

const Value = ({label, value}: {label: string, value: string}) => {
  return (
    <View style={styles.valueContainer}>
      <Text style={styles.label}>Steps</Text>
      <Text style={styles.value}>42343</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Value label={'Steps'} value={'43243'} />
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
  value: {
    fontSize: 35,
    color: '#AFB3BE',
    fontWeight: '500'
  },
  valueContainer: {
    marginRight: 50,
    marginVertical: 10
  },
  label: {
    color: 'white',
    fontSize: 20,
  }
});
