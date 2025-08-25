import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MarketplaceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MarketplaceScreen Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  text: { fontSize: 20 }
});
