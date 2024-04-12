import {useNavigation} from '@react-navigation/native';
import {
  Text,
  View,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import HomeScreenStyle from './homeScreen.Style';
import SearchBar from '../../components/searchBar';

const HomeScreen = () => {
  const navigation = useNavigation();

  const buttonTitles = [
    'American',
    'French',
    'Chinese',
    'Japanese',
    'Spanish',
    'Mexican',
    'Indian',
    'Thai',
    'Italian',
  ];
  const renderButton = title => (
    <TouchableOpacity
      key={title}
      style={HomeScreenStyle.button}
      onPress={() => navigation.navigate('ResultsScreen', {cuisine: title})} // Pass selected cuisine as a parameter
    >
      <Text style={HomeScreenStyle.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: '#FFFAEE', alignContent: 'center'}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1, // Ensures ScrollView fills the height of SafeAreaView
          justifyContent: 'center', // Vertically centers the content
          alignItems: 'center',
          marginTop: -80, // Horizontally centers the content
        }}>
        <Text style={HomeScreenStyle.header}>Welcome to{'\n'}Fine-Dine</Text>
        <Text style={HomeScreenStyle.txt}>
          Choose your preferred cuisine to get{'\n'}the best restaurants
          recommended for {'\n'}you !!
        </Text>
        <View style={HomeScreenStyle.gridContainer}>
          {Array.from({length: 3}, (_, rowIndex) => (
            <View key={rowIndex} style={HomeScreenStyle.buttonContainer}>
              {buttonTitles
                .slice(rowIndex * 3, (rowIndex + 1) * 3)
                .map(renderButton)}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
