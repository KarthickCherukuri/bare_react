import {
  ScrollView,
  StyleSheet,
  Text,
  ImageBackground,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const deviceWidth = Dimensions.get('window').width;

const tabs = {
  restaurants: 'Restaurants',
  cooking: 'Cooking',
};

export const Card = ({data, currentTab}) => {
  let footer = '';
  if (data && Array.isArray(data.diet) && Array.isArray(data.cuisine)) {
    footer = [...data.diet, ...data.cuisine].join(' | ');
  }

  const url =
    tabs.restaurants === currentTab
      ? 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D'
      : 'https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=';
  return (
    <ImageBackground
      source={{
        uri: url,
      }}
      style={styles.card}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cardButtons}>
          <Ionicons name="bookmark-outline" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardButtons}>
          <Ionicons name="heart" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontFamily: 'arial',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          {data.name}
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'arial',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          Haber Field
        </Text>
        <Text
          style={{
            color: 'white',
            fontFamily: 'arial',
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10,
          }}>
          {footer}
        </Text>
      </View>
    </ImageBackground>
  );
};

const Carousel = ({data, currentTab}) => {
  return (
    <ScrollView
      horizontal={true}
      style={styles.carContainer}
      showsHorizontalScrollIndicator={false}>
      {data &&
        data.map(data => (
          <Card key={data.name} data={data} currentTab={currentTab} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carContainer: {
    height: 'auto',
  },
  card: {
    width: 0.43 * deviceWidth,
    height: 200,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  cardButtons: {
    backgroundColor: 'rgb(254,241,240)',
    borderRadius: 20,
    padding: 3,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Carousel;
