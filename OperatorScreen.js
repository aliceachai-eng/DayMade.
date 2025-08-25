import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function OperatorScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>OperatorScreen Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20 }
});
