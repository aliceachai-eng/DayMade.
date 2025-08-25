import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DayMade</Text>
      <Button title="Membership Plans" onPress={() => navigation.navigate('Memberships')} />
      <Button title="Tasks" onPress={() => navigation.navigate('Tasks')} />
      <Button title="Concierge Chat" onPress={() => navigation.navigate('Chat')} />
      <Button title="Marketplace" onPress={() => navigation.navigate('Marketplace')} />
      <Button title="Operator Panel" onPress={() => navigation.navigate('Operator')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, marginBottom: 20 }
});
