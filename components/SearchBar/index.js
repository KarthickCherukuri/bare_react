import {useNavigation} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Search from 'react-native-vector-icons/SimpleLineIcons';
import Filter from 'react-native-vector-icons/Octicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const SearchBar = ({
  searchInput,
  setSearchInput,
  currentTab,
  setCurrentTab,
}) => {
  const navigation = useNavigation();
  const tabs = {
    restaurants: 'Restaurants',
    cooking: 'Cooking',
  };
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.userGreeting}>Good Morning</Text>
      <Text style={styles.userGreeting}>Mr.Joe!</Text>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 10,
        }}>
        <View style={styles.searchElement}>
          {searchInput.length == 0 && (
            <Search name="magnifier" size={20} color="#000" />
          )}
          <TextInput
            placeholder="Search"
            value={searchInput}
            onChangeText={setSearchInput}
            style={{flex: 1, height: 30}}
          />
          <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
            <Filter name="filter" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={{
            ...styles.tabOption,
            borderBottomWidth: tabs.restaurants == currentTab ? 1 : 0,
          }}
          onPress={() => setCurrentTab(tabs.restaurants)}>
          <Text
            style={{fontSize: styles.tabOption.fontSize, textAlign: 'center'}}>
            {tabs.restaurants}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.tabOption,
            borderBottomWidth: tabs.cooking == currentTab ? 1 : 0,
          }}
          onPress={() => setCurrentTab(tabs.cooking)}>
          <Text
            style={{fontSize: styles.tabOption.fontSize, textAlign: 'center'}}>
            {tabs.cooking}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: 'rgb(250,249,246)',
  },
  userGreeting: {
    fontFamily: 'arial',
  },
  searchElement: {
    width: 300,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderColor: 'rgb(235,234,231)',
    borderWidth: 1,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  tabOption: {
    padding: 10,
    fontSize: 16,
    borderWidth: 0,
    borderColor: 'rgb(19,44,62)',
    borderStyle: 'solid',
    flex: 1,
  },
});

export default SearchBar;
