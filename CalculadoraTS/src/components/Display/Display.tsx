import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  value: string;
}

export default ({value }: Props) => {
  return (
    <>
    <View style={styles.container}>
  <Text style={styles.displayValue} >{value}</Text>
    </View>

    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    alignItems: 'flex-end',

  },
  displayValue: {
    fontSize: 60,
    color: 'black',
  },
});
