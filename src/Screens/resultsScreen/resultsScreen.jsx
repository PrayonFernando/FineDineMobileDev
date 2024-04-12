import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import ResultScreenStyle from './resultsScreen.Style';

const API_ENDPOINT = 'http://localhost /v1/get_restaurants_by_cusine'; // Use your actual API endpoint

const ResultsScreen = () => {
  const navigation = useNavigation();

  const buttonTitles = ['Food', 'Service', 'Price', 'Ambiance', 'Hygiene'];

  const route = useRoute();
  const [restaurants, setRestaurants] = useState([]);
  const [displayRestaurants, setDisplayRestaurants] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('overall_avg_score');

  useEffect(() => {
    const cuisine = route.params?.cuisine;
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(
          `${API_ENDPOINT}?cuisine=${encodeURIComponent(cuisine)}`,
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`); // This will catch HTTP errors like 404 or 500
        }
        const jsonResponse = await response.json();
        // Process jsonResponse here
      } catch (error) {
        console.error('Error fetching restaurants:', error.message); // Modified to log error.message
      }
    };

    if (cuisine) {
      fetchRestaurants();
    }
  }, [route.params?.cuisine]);

  useEffect(() => {
    const sorted = [...restaurants].sort(
      (a, b) => b[selectedFilter] - a[selectedFilter],
    );
    setDisplayRestaurants(sorted);
  }, [selectedFilter, restaurants]);

  const handleFilterPress = aspect => {
    setSelectedFilter(aspect);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', {restaurant: item})}
      style={ResultScreenStyle.card}>
      <View style={ResultScreenStyle.cardContent}>
        <View style={ResultScreenStyle.cardTextContainer}>
          <View style={ResultScreenStyle.cardImageContainer}>
            {/* Placeholder for image */}
            <View style={ResultScreenStyle.cardImage} />
          </View>
          <Text style={ResultScreenStyle.cardTitle}>{item.name}</Text>
          <Text style={ResultScreenStyle.cardAddress}>{item.address}</Text>
          <View style={ResultScreenStyle.cardRatingContainer}>
            <Text style={ResultScreenStyle.cardRating}>
              {`${item.overall_avg_score} / 5`}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  // const renderItem = ({ item }) => (
  //   <TouchableOpacity
  //     onPress={() => navigation.navigate('DetailsScreen', { restaurant: item })}
  //     style={ResultScreenStyle.card}
  //   >
  //     <View style={ResultScreenStyle.cardImageContainer}>
  //       {/* Placeholder for image */}
  //       <View style={ResultScreenStyle.cardImage} />
  //     </View>
  //     <View style={ResultScreenStyle.cardTextContainer}>
  //       <Text style={ResultScreenStyle.cardTitle}>{item.name}</Text>
  //       <Text style={ResultScreenStyle.cardAddress}>{item.address}</Text>
  //     </View>
  //     <View style={ResultScreenStyle.cardRatingContainer}>
  //       <Ionicons
  //         name="star-sharp"
  //         size={18}
  //         color="black"
  //       />
  //       <Text style={ResultScreenStyle.cardRating}>
  //         {`${item.overall_avg_score} / 5`}
  //       </Text>
  //     </View>
  //   </TouchableOpacity>
  // );

  return (
    <View style={{flex: 1, backgroundColor: '#FFFAEE', alignContent: 'center'}}>
      {/* <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          marginTop: 30,
        }}> */}
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center', // This ensures the icon and text are aligned vertically
          justifyContent: 'space-between', // This spreads out the child components
        }}>
        <Ionicons
          name="chevron-back"
          size={28}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text
          style={[ResultScreenStyle.header, {flex: 1, textAlign: 'center'}]}>
          Your results are :
        </Text>
        <View style={{width: 28}} />
      </View>

      <Text style={ResultScreenStyle.txt}>Filter by Aspects : </Text>
      <View style={ResultScreenStyle.btn}>
        {['food', 'service', 'price', 'ambiance', 'hygiene'].map(aspect => (
          <TouchableOpacity
            key={aspect}
            style={
              selectedFilter === aspect
                ? ResultScreenStyle.selectedButton
                : ResultScreenStyle.button
            }
            onPress={() =>
              handleFilterPress(aspect.replace(/\s+/g, '_').toLowerCase())
            }>
            <Text style={ResultScreenStyle.buttonText}>
              {aspect
                .split('_')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* <View style={ResultScreenStyle.buttonContainer}>
          {[
            'overall_avg_score',
            'food_quality',
            'service',
            'price',
            'ambiance',
            'hygiene',
          ].map(aspect => (
            <TouchableOpacity
              key={aspect}
              style={
                selectedFilter === aspect
                  ? ResultScreenStyle.selectedButton
                  : ResultScreenStyle.button
              }
              onPress={() => handleFilterPress(aspect)}>
              <Text style={ResultScreenStyle.buttonText}>
                {aspect
                  .replace('_', ' ')
                  .replace(/\b\w/g, l => l.toUpperCase())}
              </Text>
            </TouchableOpacity>
          ))}
        </View> */}

      <View>
        <FlatList
          data={displayRestaurants}
          renderItem={renderItem}
          keyExtractor={(item, index) => `restaurant-${index}`}
          numColumns={2}
          contentContainerStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </View>
  );
};

export default ResultsScreen;
