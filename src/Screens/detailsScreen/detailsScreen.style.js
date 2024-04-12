import {Dimensions, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PixelRatio} from 'react-native';
const fontScale = PixelRatio.getFontScale();
const getFontSize = size => size / fontScale;

const DetailsScreenStyle = StyleSheet.create({
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
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200, // Placeholder height
    backgroundColor: '#ccc', // Placeholder color
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 50,
    justifyContent: 'center', // Center content vertically
    alignSelf: 'center',
  },
  address: {
    fontSize: 16,
    color: '#666',
    marginVertical: 8,
    marginLeft: 15,
  },
  overallRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  overallRatingText: {
    fontSize: 28,
    marginLeft: 20,
  },
  ratingsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#B2533E',
    margin: 10,
    marginTop: 50,
    marginBottom: 20,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  ratingLabel: {
    width: '50%', // Adjust as needed to fit the longest label
    fontSize: 16,
    marginLeft: 10,
  },
  ratingBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '60%', // Adjust the width as needed
  },
  ratingBarInner: {
    height: '100%',
    backgroundColor: '#ffc107',
    borderRadius: 10,
  },
  ratingScore: {
    width: '20%', // Adjust as needed
    fontSize: 16,
    textAlign: 'right', // Align score text to the right
    marginLeft: -10,
  },
  ratingBarOuter: {
    width: '47%', // Width of the bar is set to 60% of its container
    height: 10,
    marginLeft: -80,
    backgroundColor: '#18423B',
    justifyContent: 'flex-start',
    borderRadius: 10,
  },
  cardImageContainer: {
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  cardImage: {
    height: 250, // Set a fixed height for the image
    width: '95%', // Take up all available width
    backgroundColor: '#ddd', // A placeholder background color
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    borderRadius: 15,
  },
});

export default DetailsScreenStyle;
