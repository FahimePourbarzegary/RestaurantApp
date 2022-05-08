import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize, 
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
export default function CategoryProductBox(props) {
  useEffect(() => {
    props.Func();
  }, []);
  console.log(props.FoodList);
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
    props.nv.navigate('FoodDetail', {
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
  const renderCategoryProducts = ({item}) => {
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
      <View style={styles.ContainerCategoryBox}>
        <View style={styles.containerImageCalories}>
          <Image
            source={require('../../assets/images/Other/calories.png')}
            style={styles.ImageCalories}
          />
          <Text style={styles.calories}> {item.calories} Calories</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image
              source={{uri: 'data:image/jpeg;base64,' + item.image}}
              style={styles.imageContainer}
            />
          </View>
          <View style={styles.foodDetail}>
            <Text style={styles.nameStyleText}>{item.name}</Text>
            <Text style={styles.compositionsText}>{item.composition}</Text>
            <Text style={styles.priceText}>${item.price}</Text>
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
      </View>
    );
  };
  return (
    <View style={{height: responsiveHeight(57)}}>
      <FlatList
        data={props.FoodList}
        renderItem={renderCategoryProducts}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  ContainerCategoryBox: {
    width: responsiveWidth(85),
    height: responsiveHeight(18),
    marginLeft: responsiveWidth(5),
    marginBottom: responsiveHeight(4),
    backgroundColor: '#FAFBFD',
    borderRadius: 10,
    shadowColor: '#0009',
    elevation: 10,
  },
  calories: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(1.3),
      color:"#9C9C9C",
  },
  imageContainer: {
    marginLeft: responsiveWidth(3),
    width: responsiveWidth(25),
    height: responsiveWidth(25),
    borderRadius: 200 / 2,
    backgroundColor: 'yellow',
  },
  containerImageCalories: {
    flexDirection: 'row',

    width: responsiveWidth(30),
    padding: 5,
  },
  foodDetail: {
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(2),
  },
  buttonnext: {
    position: 'absolute',
    marginLeft: responsiveWidth(65),
    marginTop: responsiveHeight(10),
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: 100 / 2,
    backgroundColor: '#FAFBFD',
    justifyContent: 'center',
    alingItem: 'center',
    shadowColor: 'gray',
    elevation: 15,
  },
  ContainerAllData: {
    width: responsiveWidth(85),
    height: responsiveHeight(55),
    marginLeft: responsiveWidth(8),
  },
  ContainerAllData: {
    position: 'absolute',
    flexDirection: 'row',
    right: 0,
    marginTop: responsiveHeight(2),
    marginRight: responsiveWidth(4),
  },
  ImageCalories: {
    width: responsiveWidth(3),
    height: responsiveHeight(2.1),
    marginRight: responsiveWidth(0.5),
  },
  nameStyleText: {
    fontFamily: 'Gilroy-Regular',
    color: '#272727',
    fontSize: responsiveFontSize(2.2),
  },
  compositionsText: {
    fontFamily: 'Gilroy-Medium',
    color: '#9C9C9C',
    fontSize: responsiveFontSize(1.5),
  },
  priceText: {
    fontFamily: 'Gilroy-Medium',
    color: '#313131',
    fontSize: responsiveFontSize(2.5),
    marginTop: responsiveHeight(2),
  },
});
