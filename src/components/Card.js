import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({name, address, rating, imageUri}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: imageUri}} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardAddress}>{address}</Text>
      <View style={styles.ratingContainer}>
        <Text>{rating}</Text>
        <Ionicons name="star" size={14} color="gold" />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: '45%', // approximately for 2 columns
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // for Android shadow
  },
  cardImage: {
    width: '100%', // take up all available width
    aspectRatio: 1, // assuming square images
    borderRadius: 8,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 8,
  },
  cardAddress: {
    fontSize: 14,
    color: 'grey',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  // ... other styles you might need
});
