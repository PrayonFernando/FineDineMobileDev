import {useNavigation, useRoute} from '@react-navigation/native';
import {Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import ResultScreenStyle from './resultsScreen.Style';

const API_ENDPOINT = 'https://v1/get_restaurants_by_cusine';

const ResultsScreen = () => {
  const navigation = useNavigation();

  const buttonTitles = ['Food', 'Service', 'Price', 'Ambiance', 'Hygiene'];

  const route = useRoute();
  const [selectedFilter, setSelectedFilter] = useState('overall_avg_score');
  const [sortedRestaurants, setSortedRestaurants] = useState([]);
  const [restaurants, setRestaurants] = useState([
    // Adding some dummy data for testing purposes
    {
      id: '1',
      name: 'food 1',
      image: '', // Image URL left empty
      address: '123 Curry Lane',
      overall_avg_score: 4.5,
      food_quality: 5,
      service: 4,
      price: 4,
      ambiance: 4.5,
      hygiene: 5,
    },
    {
      id: '2',
      name: 'food 2',
      image: '', // Image URL left empty
      address: '456 Spicy Ave',
      overall_avg_score: 4.7,
      food_quality: 4,
      service: 5,
      price: 4,
      ambiance: 4.5,
      hygiene: 5,
    },
    {
      id: '1',
      name: 'food 3',
      image: '', // Image URL left empty
      address: '123 Curry Lane',
      overall_avg_score: 4.5,
      food_quality: 3,
      service: 5,
      price: 4,
      ambiance: 4.5,
      hygiene: 5,
    },
    {
      id: '2',
      name: 'food 4',
      image: '', // Image URL left empty
      address: '456 ',
      overall_avg_score: 4.7,
      food_quality: 2,
      service: 5,
      price: 4,
      ambiance: 4.5,
      hygiene: 5,
    },
    {
      id: '1',
      name: 'food 5',
      image: '', // Image URL left empty
      address: '123 Curry Lane',
      overall_avg_score: 4.5,
      food_quality: 1,
      service: 5,
      price: 4,
      ambiance: 4.5,
      hygiene: 5,
    },
    {
      id: '2',
      name: 'food 6',
      image: '', // Image URL left empty
      address: '456 Spicy Ave',
      overall_avg_score: 4.7,
      food_quality: 4,
      service: 5,
      price: 4,
      ambiance: 4.5,
      hygiene: 5,
    },
  ]);

  // useEffect(() => {
  //   // Retrieve the cuisine from the route params
  //   const cuisine = route.params?.cuisine;

  //   // Define a function to fetch restaurants
  //   const fetchRestaurants = async () => {
  //     try {
  //       const response = await fetch(`${API_ENDPOINT}?cuisine=${cuisine}`);
  //       const jsonResponse = await response.json();

  //       // Set the restaurant data to state
  //       setRestaurants(jsonResponse.data);
  //     } catch (error) {
  //       console.error('Error fetching restaurants:', error);
  //     }
  //   };

  //   // Call the fetch function if the cuisine is defined
  //   if (cuisine) {
  //     fetchRestaurants();
  //   }
  // }, [route.params?.cuisine]);

  useEffect(() => {
    handleFilterPress(selectedFilter);
  }, [restaurants]);

  const handleFilterPress = aspect => {
    setSelectedFilter(aspect);
    const sorted = [...restaurants].sort((a, b) => b[aspect] - a[aspect]);
    setRestaurants(sorted);
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
            {/* <MaterialIcons
              name="star"
              size={18} // Adjust the size as needed
              color="black" // You can change the color to match your design
            /> */}
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
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFFAEE', alignContent: 'center'}}>
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

      <Text style={ResultScreenStyle.txt}>Filter by Aspects :</Text>
      <View style={ResultScreenStyle.btn}>
        {buttonTitles.map((title, index) => (
          <TouchableOpacity
            key={index}
            style={ResultScreenStyle.button}
            onPress={() => console.log(`${title} button pressed`)}>
            <Text style={ResultScreenStyle.buttonText}>{title}</Text>
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
          data={restaurants}
          renderItem={renderItem}
          // Use index as part of the key to ensure uniqueness
          keyExtractor={(item, index) => `restaurant-${index}`}
          numColumns={2} // Display two columns
          contentContainerStyle={{
            justifyContent: 'space-between', // Ensures spacing is applied evenly
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResultsScreen;
