import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PixelRatio} from 'react-native';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const ResultsScreenStyle = StyleSheet.create({
  header: {
    fontSize: 30,
    fontFamily: 'Playflair-Display',
    textAlign: 'center',
    color: '#18423B',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 16,
    alignContent: 'flex-start',
    marginTop: 5,
    color: '#18423B',
    marginLeft: -280,
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

  btn: {
    flexDirection: 'row',
    // justifyContent: 'space-around', // This spreads out the buttons evenly
    alignItems: 'center', // This centers the buttons vertically
    padding: 10, // Add padding around the container for some space
    flexDirection: 'row', // Aligns child buttons in a row
    justifyContent: 'space-evenly', // Evenly spaces the buttons within the container
    width: '100%',
    margin: 5,
  },
  button: {
    marginHorizontal: 10, // Adds space between buttons
    borderRadius: 25, // Adds border radius
    borderWidth: 1, // Optional: adds border
    borderColor: '#000000', // Optional: border color, you can adjust it
    // padding: 10, // Adjust padding inside the button
    alignItems: 'center', // Center text inside the button
    justifyContent: 'center', // Center text vertically
    flex: 1, // Take up equal space
    minHeight: 40, // Minimum height for the button
    minWidth: 80,
    backgroundColor: '#E3F2CF',
    // margin: 6,
  },
  buttonText: {
    color: '#000000', // Button text color
    // Add text styling as needed
  },
  listContentContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row', // Align children in a row
    margin: 10,
    width: '45%', // Two cards in a row, so less than 50% for each
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
  },
  cardTextContainer: {
    flex: 1, // Take up all available space
    justifyContent: 'center', // Center vertically
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row', // Align title and rating in a row
    padding: 10,
  },
  cardImage: {
    height: 150, // Set a fixed height for the image
    width: '100%', // Take up all available width
    backgroundColor: '#ddd', // A placeholder background color
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: 'regular',
    marginTop: 10,
    marginLeft: 5,
  },
  cardAddress: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 5,
  },
  cardRating: {
    fontSize: 14,
    marginTop: 5,
    marginLeft: 5,
  },
  cardRatingContainer: {
    justifyContent: 'center', // Center vertically
    alignItems: 'flex-end', // Align rating to the right
    paddingHorizontal: 5, // Add some spacing
    // flexDirection: 'row', // Align icon and text in a row
    // alignItems: 'center', // Center items vertically
    //   marginTop: 4, // Optional: adjust the margin as needed
  },
  cardImageContainer: {
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
});

export default ResultsScreenStyle;
