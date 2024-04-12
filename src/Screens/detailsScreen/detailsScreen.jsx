import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, DetailsScreenStyleheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DetailsScreenStyle from './detailsScreen.style';
import {SafeAreaView} from 'react-native-safe-area-context';

const DetailsScreen = ({route}) => {
  const navigation = useNavigation();

  const {restaurant} = route.params;

  // Function to render rating bars
  const renderRatingBar = (label, score) => (
    <View style={DetailsScreenStyle.ratingRow}>
      <Text style={DetailsScreenStyle.ratingLabel}>{label}</Text>
      <View style={DetailsScreenStyle.ratingBarOuter}>
        <View
          style={[
            DetailsScreenStyle.ratingBarInner,
            {width: `${(score / 5) * 100}%`},
          ]}
        />
      </View>
      <Text style={DetailsScreenStyle.ratingScore}>{score} / 5</Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFFAEE', alignContent: 'center'}}>
      <View style={DetailsScreenStyle.container}>
        {/* Restaurant Image - Placeholder for now */}
        {/* <Image
        style={DetailsScreenStyle.image}
        source={require('./path-to-placeholder-image.png')}
      /> */}
        {/* Restaurant Name */}
        <Ionicons
          // style={{marginRight: 50, marginLeft: -50}}
          name="chevron-back"
          size={28}
          color="black"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Text style={DetailsScreenStyle.name}>{restaurant.name}</Text>
        <View style={DetailsScreenStyle.cardImageContainer}>
          {/* Placeholder for image */}
          <View style={DetailsScreenStyle.cardImage} />
        </View>

        {/* Restaurant Address */}
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginTop: 35,
            marginBottom: 15,
          }}>
          <Ionicons
            name="location-outline"
            //   marginLeft={25}
            marginTop={5}
            size={20}
            color="#000"
          />
          <Text style={DetailsScreenStyle.address}>{restaurant.address}</Text>
        </View>

        {/* Overall Rating */}
        <View style={DetailsScreenStyle.overallRating}>
          <Ionicons name="star" size={28} color="#FFD700" />
          <Text style={DetailsScreenStyle.overallRatingText}>
            {restaurant.overall_avg_score} / 5
          </Text>
        </View>

        {/* Ratings Section */}
        <Text style={DetailsScreenStyle.ratingsHeader}>Ratings</Text>
        {renderRatingBar('Food Quality', restaurant.food_quality)}
        {renderRatingBar('Service Quality', restaurant.service)}
        {renderRatingBar('Ambiance', restaurant.ambiance)}
        {renderRatingBar('Price', restaurant.price)}
        {renderRatingBar('Hygiene', restaurant.hygiene)}
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
