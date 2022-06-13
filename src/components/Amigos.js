import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Amigos = () => {
  return (
    <View style={styles.container}>
      <Text>Amigos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Amigos;
