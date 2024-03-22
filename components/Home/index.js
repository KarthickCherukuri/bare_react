import {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import SearchBar from '../SearchBar';
import Carousel from '../Carousel';
import {useFilter} from '../../context';
const tabs = {
  restaurants: 'Restaurants',
  cooking: 'Cooking',
};
const Home = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const [currentTab, setCurrentTab] = useState(tabs.restaurants);
  const [filteredData, setFilteredData] = useState(null);
  const {dietFilter, cuisineFilter, protienFilter} = useFilter();

  const fetchData = async () => {
    try {
      const data =
        currentTab === tabs.restaurants
          ? require('../../assets/restaurants.json').restaurants
          : require('../../assets/cooking.json').recipes;

      const filteredData = data.filter(item => {
        const dietMatch = dietFilter.length
          ? dietFilter.some(diet => item.diet.includes(diet))
          : true;
        const cuisineMatch = cuisineFilter.length
          ? cuisineFilter.some(cuisine => item.cuisine.includes(cuisine))
          : true;
        const proteinMatch = protienFilter.length
          ? protienFilter.some(protein => item.proteins.includes(protein))
          : true;

        return dietMatch && cuisineMatch && proteinMatch;
      });

      setFilteredData(filteredData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentTab, dietFilter, cuisineFilter, protienFilter]);

  return (
    <SafeAreaView>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: 10,
        }}>
        <View>
          <Text style={{fontFamily: 'arial', color: 'rgb(19,44,62)'}}>
            Satisfy Your cravings
          </Text>
          <Text
            style={{
              fontFamily: 'arial',
              fontSize: 10,
              color: 'rgb(19,44,62)',
            }}>
            Restaurants that suit yout palate
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AllScreen')}
          style={styles.button}>
          <Text style={styles.buttonText}>View All</Text>
        </TouchableOpacity>
      </View>
      <Carousel data={filteredData} currentTab={currentTab} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});
export default Home;
