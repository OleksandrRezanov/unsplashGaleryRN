import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

export const Error: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../img/error.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: width,
    height: height,
  },
});
