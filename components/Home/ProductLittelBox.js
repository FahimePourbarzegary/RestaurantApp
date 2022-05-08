import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default function ProductLittelBox(props, navigation) {
  const [SearchFood, setSearchFood] = useState(null);
  const [listFood, setlistFood] = useState(0);
 
  const Gonext = (
    id,
    calories,
    filter,
    name,
    image,
    description,
    price,
    favorite,
    composition,
  ) => {
    props.navigation.navigate('FoodDetail', {
      id: id,
      calories: calories,
      filter: filter,
      name: name,
      image: image,
      Description: description,
      price: price,
      favorite: favorite,
      composition: composition,
      route: props.route,
    });
  };
  const searchFood = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/Food/SearchFood', state)
        .then(res => res.data)
        .then(data => {
          console.log(data);
          setlistFood(data);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const Search = () => {
    ClickSearch();
  };
  const ClickSearch = () => {
    const state = {
      name: SearchFood,
      filter: SearchFood,
    };
    searchFood(state);
  };
  const renderCategoryFoodList = ({item}) => {
    const checkLike = async state => {
      try {
        const res = await axios
          .post('http://192.168.43.121/api/Like/checkLike', state)
          .then(res => res.data)
          .then(data => {
            item.favorite = data;
            console.log(data);
          });
      } catch (e) {
        console.log(e);
      }
    };
    const Check = () => {
      ClickCheck();
    };
    const ClickCheck = () => {
      const state = {
        name: item.name,
        id_user: props.id,
      };
      console.log(JSON.stringify(state));
      checkLike(state);
    };
    Check();
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
            source={{uri: 'data:image/jpeg;base64,' + item.image}}
            style={styles.imageContainer}
          />
        </View>
        <View style={styles.foodDetail}>
          <Text style={styles.nameStyle}>{item.name}</Text>
          <Text style={styles.compositionsStyle}>{item.composition}</Text>
          <Text style={styles.priceStyle}>${item.price}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonnext}
          onPress={() => {
            Gonext(
              item.id,
              item.calories,
              item.filter,
              item.name,
              item.image,
              item.description,
              item.price,
              item.favorite,
              item.composition,
            );
          }}>
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
  }
  return (
    <>
      <TextInput
        placeholder="Search type or name food"
        placeholderTextColor="gray" 
        style={styles.textInputStyle}
        onEndEditing={() => Search()}
        onChangeText={value => {
        setSearchFood(value);
        }}
      />
      <View style={styles.groupTitelPage}>
        <Text style={styles.TitelPageFood}>Search </Text>
        <Text style={styles.TitelPage}>Food {listFood.length} Resulth </Text>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={listFood}
          renderItem={renderCategoryFoodList}
          keyExtractor={item => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    height: responsiveHeight(65),
  },
  containerFoodList: {
    width: responsiveWidth(48),
    height: responsiveHeight(40),
    marginBottom: responsiveWidth(5),
    marginLeft: responsiveWidth(1),
    backgroundColor: '#FAFBFD',
    borderRadius: 15,
    shadowColor: '#0009',
    elevation: 5,
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
      color:"#9C9C9C",
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
    color:"black",
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
  groupTitelPage: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(2),
  },
  TitelPage: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(4),
    color: '#2F2F2F',
  },
  TitelPageFood: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(4),
    color: '#2F2F2F',
  },
});
