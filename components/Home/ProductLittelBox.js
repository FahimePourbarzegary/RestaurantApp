import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import categoryFoodList from '../../assets/data/Specialdata/categoryFoodList.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faAngleRight} from '@fortawesome/free-solid-svg-icons';
export default function ProductLittelBox(props, navigation) {
  const renderCategoryFoodList = ({item}) => {
    return (
      <View style={styles.containerFoodList}>
        <View style={styles.caloriesLike}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../assets/images/Other/calories.png')}
              style={styles.ImageCalories}
            />
            <Text style={styles.calories}>{item.calories} Calories</Text>
          </View>
        </View>
        <View>
          <Image
            source={require('../../assets/images/Other/food.jpg')}
            style={styles.imageContainer}
          />
        </View>
        <View style={styles.foodDetail}>
          <Text style={styles.nameStyle}>{item.name}</Text>
          <Text style={styles.compositionsStyle}>{item.compositions}</Text>
          <Text style={styles.priceStyle}>${item.price}</Text>
        </View>
        <TouchableOpacity style={styles.buttonnext}>
          <FontAwesomeIcon
            icon={faAngleRight}
            size={25}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  {
    /*const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => { 
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
   const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  
  const getItem = (item) => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };*/
  }
  return (
    <>
      <TextInput placeholder="Search Here" style={styles.textInputStyle} />
      <View style={styles.flatListContainer}>
        <FlatList
          data={categoryFoodList}
          renderItem={renderCategoryFoodList}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </>
    /* <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </SafeAreaView>*/
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    paddingBottom: 300,
  },
  containerFoodList: {
    width: responsiveWidth(48),
    height: responsiveHeight(40),
    marginBottom: responsiveWidth(5),
    backgroundColor: '#FAFBFD',
    borderRadius: 15,
  },
  caloriesLike: {
    width: responsiveWidth(45),
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(2.5),
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    borderRadius: 200 / 2,
    backgroundColor: 'red',
  },
  calories: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(1.5),
  },
  foodDetail: {
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(2.5),
  },
  buttonnext: {
    position: 'absolute',
    marginLeft: responsiveWidth(34),
    marginTop: responsiveHeight(35),
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: 100 / 2,
    backgroundColor: '#FAFBFD',
    justifyContent: 'center',
    alingItem: 'center',
    shadowColor: 'gray',
    elevation: 10,
  },
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    position: 'absolute',
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(25),
    width: responsiveWidth(50),
    height: 40,
    borderBottomWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#272727',
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: responsiveWidth(3),
    height: responsiveHeight(2),
    marginRight: responsiveWidth(1.5),
  },
  nameStyle: {
    fontFamily: 'Gilroy-Regular',
    color: '#272727',
    fontSize: responsiveFontSize(2.5),
  },
  compositionsStyle: {
    fontFamily: 'Gilroy-Medium',
    color: '#9C9C9C',
    fontSize: responsiveFontSize(1.5),
  },
  priceStyle: {
    fontFamily: 'Gilroy-Medium',
    color: '#313131',
    fontSize: responsiveFontSize(2.5),
    marginTop: responsiveHeight(2),
  },
});
 