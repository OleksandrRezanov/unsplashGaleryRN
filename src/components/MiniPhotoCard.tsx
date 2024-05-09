import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { User } from '../types/User';
import { useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../redux/hooks';
import { setSelectedPicture } from '../redux/actions/actions';

interface Props extends Omit<User, 'id'> { }

const MiniPhotoCard: React.FC<Props> = ({ photoUrl, title, author }) => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    dispatch(setSelectedPicture(photoUrl));
    navigation.navigate('PhotoScreen');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <Image source={{ uri: photoUrl }} style={styles.image} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>By: {author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
});

export default MiniPhotoCard;
