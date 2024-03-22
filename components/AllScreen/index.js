import {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Card} from '../Carousel';
import Icon from 'react-native-vector-icons/dist/AntDesign';
const tabs = {
  restaurants: 'Restaurants',
  cooking: 'Cooking',
};

const AllScreen = ({navigation}) => {
  const [restData, setRestData] = useState(null);
  const [cookData, setCookData] = useState(null);

  const fetchData = () => {
    setRestData(require('../../assets/restaurants.json').restaurants);
    setCookData(require('../../assets/cooking.json').recipes);
  };
  useEffect(() => fetchData(), []);

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          padding: 10,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Icon name="arrowleft" size={24} color="black" />
        <Text style={{fontFamily: 'arial'}}>Satisfy your Cravings</Text>
      </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          {restData &&
            restData.map(each => (
              <Card data={each} currentTab={tabs.restaurants} id={each.name} />
            ))}
          {cookData &&
            cookData.map(each => (
              <Card data={each} currentTab={tabs.cooking} id={each.name} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AllScreen;
