import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import SearchIcon from '../assets/searchIcon';
import {useNavigation} from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = query => {
    navigation.navigate('SearchScreen');
  };

  return (
    <View style={styles.container}>
      <SearchIcon style={SearchIcon.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search for Jobs, Clients..."
        value={searchQuery}
        onChangeText={handleSearchChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    backgroundColor: '#FFFAEE',
    borderColor: '#18423B',
    borderWidth: 1.2,
    borderRadius: 10,
    marginHorizontal: 15,
    marginTop: 20,
    paddingLeft: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15,
    paddingBottom: 10,
    color: '#000',
  },
  icon: {
    height: 20,
    width: 2,
  },
});

export default SearchBar;
