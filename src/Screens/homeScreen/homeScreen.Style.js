import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PixelRatio} from 'react-native';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const HomeScreenStyle = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'Playflair-Display',
    textAlign: 'center',
    color: '#18423B',
  },
  txt: {
    fontSize: 20,
    fontFamily: 'Playflair-Display',
    textAlign: 'center',
    marginTop: 20,
    color: '#18423B',
  },
  button: {
    margin: 10, // Adds space around each button
    padding: 5, // Internal padding within the button
    backgroundColor: '#C0DC9B', // Button background color
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, // Each button will fill an equal portion of their container
    minHeight: 50, // Minimum button height for touchability
    borderRadius: 25,
    borderColor: '#000000',
    borderWidth: 1,
  },
  buttonText: {
    color: '#000000', // Text color within the button
    // Add any other text styling as needed
  },
  buttonContainer: {
    flexDirection: 'row', // Aligns child buttons in a row
    justifyContent: 'space-evenly', // Evenly spaces the buttons within the container
    width: '95%',
  },
  gridContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default HomeScreenStyle;
