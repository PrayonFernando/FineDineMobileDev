import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FineDineLogo from '../../assets/FineDineLogo.png';

const Welcome = () => {
  const dotAnimation = new Animated.Value(0);
  const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
  const diagonalLength = Math.sqrt(
    Math.pow(screenWidth, 2) + Math.pow(screenHeight, 2),
  );
  const [initialRoute, setInitialRoute] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    Animated.timing(dotAnimation, {
      toValue: 2,
      duration: 2000,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      navigation.navigate('HomeScreen');
    });
  }, []);

  const dotSize = dotAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [10, diagonalLength],
  });

  return (
    <SafeAreaView style={WelcomeStyle.container}>
      <View style={WelcomeStyle.dotContainer}>
        <Animated.View
          style={[WelcomeStyle.dot, {width: dotSize, height: dotSize}]}
        />
      </View>
      <View style={WelcomeStyle.Image}>
        <Image source={FineDineLogo} style={WelcomeStyle.Image} />
      </View>
    </SafeAreaView>
  );
};

const WelcomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dotContainer: {
    position: 'absolute',
    transform: [{translateX: -5}, {translateY: -5}],
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 360,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'PlayfairDisplay-Bold',
  },
  ImageContainer: {
    width: 150,
    height: 100,
    alignItems: 'center',
  },
  Image: {
    height: 10,
  },
});

export default Welcome;
