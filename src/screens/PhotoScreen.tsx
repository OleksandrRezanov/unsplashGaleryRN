import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import {useAppSelector} from '../redux/hooks';

export const PhotoScreen: React.FC = () => {
  const photoURL = useAppSelector(state => state.selectedPhoto);
  return (
    <View style={styles.container}>
      <Image source={{uri: photoURL}} style={styles.image} resizeMode="cover" />
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    width: width,
    height: height,
  },
});
