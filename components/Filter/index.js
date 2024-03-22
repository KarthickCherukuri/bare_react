import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {useFilter} from '../../context';
import {useState} from 'react';

const diets = ['vegetarian', 'non-vegetarian', 'vegan'];
const cuisines = ['indian', 'mediterranean'];
const protiens = ['mutton', 'chicken'];

const Option = ({name, filter, setFilter}) => {
  const isSelected = filter.includes(name);
  const handlePress = () => {
    setFilter(prev => {
      if (prev.includes(name)) {
        return prev.filter(f => f !== name);
      } else {
        return [...prev, name];
      }
    });
  };
  return (
    <TouchableOpacity
      style={isSelected ? styles.selectedOption : styles.option}
      onPress={handlePress}>
      <Text
        style={{
          color: isSelected ? styles.selectedOption.color : styles.option.color,
        }}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const Filter = ({navigation}) => {
  const {
    dietFilter,
    setDietFilter,
    cuisineFilter,
    setCuisineFilter,
    protienFilter,
    setProtienFilter,
  } = useFilter();
  const [currentDiet, setCurrentDiet] = useState(dietFilter);
  const [currentCuisine, setCurrentCuisine] = useState(cuisineFilter);
  const [currentProtiene, setCurrentProtiene] = useState(protienFilter);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Filters</Text>
          <View style={styles.separator} />
          <View>
            <Text style={styles.subHeading}>Diet</Text>
            <View style={styles.optionContainer}>
              {diets.map(each => (
                <Option
                  name={each}
                  key={each}
                  filter={currentDiet}
                  setFilter={setCurrentDiet}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.subHeading}>Cuisines</Text>
            <View style={styles.optionContainer}>
              {cuisines.map(each => (
                <Option
                  name={each}
                  key={each}
                  filter={currentCuisine}
                  setFilter={setCurrentCuisine}
                />
              ))}
            </View>
          </View>
          <View style={{marginTop: 80}}>
            <Text style={styles.subHeading}>Protiens</Text>
            <View style={styles.optionContainer}>
              {protiens.map(each => (
                <Option
                  name={each}
                  key={each}
                  filter={currentProtiene}
                  setFilter={setCurrentProtiene}
                />
              ))}
            </View>
          </View>
        </View>
        <View>
          <View style={styles.separator} />
          <View style={styles.buttonContainer}>
            <Button
              title="cancel"
              color="black"
              onPress={() => {
                navigation.goBack();
              }}
            />
            <TouchableOpacity
              style={styles.applyButton}
              onPress={() => {
                setDietFilter(currentDiet);
                setCuisineFilter(currentCuisine);
                setProtienFilter(currentProtiene);
                navigation.goBack();
              }}>
              <Text style={{color: styles.applyButton.color}}>
                Apply Filters
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
  separator: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  subHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  option: {
    padding: 7,
    fontSize: 14,
    borderRadius: 15,
    borderColor: 'rgb(44,58,65)',
    borderWidth: 1,
  },
  selectedOption: {
    padding: 7,
    fontSize: 14,
    borderRadius: 15,
    color: 'white',
    backgroundColor: 'rgb(44,58,65)',
    borderWidth: 1,
  },
  optionContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  applyButton: {
    backgroundColor: 'rgb(18,44,62)',
    padding: 20,
    color: 'white',
    borderRadius: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

export default Filter;
