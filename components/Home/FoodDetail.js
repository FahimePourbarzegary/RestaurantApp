import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';
import ShopIconButton from '../Button/ShopIconButton.js';
import TabButton from './TabButton.js';
export default function FoodDetail(props, navigation, route) {
  const {id, name, calories, Description, price} = props.route.params;
  const [number, setNumber] = useState(2);
  const [like, setLike] = useState(false);
  return (
    <SafeAreaView style={styles.foodDetail}>
      <View style={styles.backDetail}>
        <Text
          style={styles.stylenameFood}>
          {name}
        </Text>
        <Image
          source={require('../../assets/images/Other/foodbgblack.png')}
          style={styles.ImageStyle}
        />
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image
              source={require('../../assets/images/Other/Flashwhite.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.likeContainer}
            onPress={() =>
              like ? setLike(like => false) : setLike(like => true)
            }>
            <FontAwesomeIcon
              icon={faHeart}
              style={{alignSelf: 'center'}}
              color={like ? 'white' : '#AAAAAA'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.quantityContainer}>
          <View style={styles.quantity}>
            <Text style={styles.numquantity}>{number}</Text>
          </View>
          <TouchableOpacity
            style={styles.plusContainer}
            onPress={() => {
              number <= 100
                ? setNumber(number => number + 1)
                : alert('Sorry, We havent more than');
            }}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.minusContainer}
            onPress={() => {
              number > 1
                ? setNumber(number => number - 1)
                : alert('Sorry, We havent one less than');
            }}>
            <Text style={styles.minus}>-</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.ImageContainerCalories}>
          <Image
            source={require('../../assets/images/Other/calories.png')}
            style={styles.imageCalories}
          />
          <Text style={styles.calories}>{calories} Calories</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
      <ScrollView>
        <View
          style={styles.DescriptionContainer}>
          <Text
            style={styles.DescriptionText}>
            Description
          </Text>
          <Text
            style={styles.DescriptionFood}>
            {Description}
          </Text>
        </View>
        <TabButton />
      </ScrollView>

      <ShopIconButton />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  foodDetail: {
    flex: 1,
    backgroundColor: 'white',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  backDetail: {
    width: responsiveWidth(120),
    height: responsiveWidth(135),
    borderBottomLeftRadius: 260,
    borderBottomRightRadius: 260,
    marginLeft: responsiveWidth(-10),
    backgroundColor: '#1B1A1A',
  },
  likeContainer: {
    backgroundColor: '#272727',
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(75),
    justifyContent: 'center',
    borderRadius: 50,
  },
  header: {
    position: 'absolute',
    width: responsiveWidth(10),
    height: responsiveHeight(93),
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    position: 'absolute',
    width: responsiveWidth(30),
    height: responsiveHeight(15),
    marginTop: responsiveHeight(42),
    marginLeft: responsiveWidth(70),
    justifyContent: 'center',
  },
  quantity: {
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(28),
    height: responsiveHeight(13),
    justifyContent: 'center',
    borderRadius: 55,
  },
  numquantity: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(5),
    color: 'black',
    left: responsiveWidth(8),
    top: responsiveHeight(0.5),
  },
  plus: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(5),

    color: '#A3A3A3',
  },
  minus: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(5),
    color: '#A3A3A3',
  },
  plusContainer: {
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    top: responsiveHeight(1),
    justifyContent: 'center',
    borderRadius: 50,
    left: responsiveWidth(20),
  },
  minusContainer: {
    position: 'absolute',
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    left: responsiveWidth(20),
    top: responsiveHeight(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  calories: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2),
    color: 'white',
  },
  priceContainer: {
    marginLeft: responsiveWidth(50),
    marginTop: responsiveHeight(2),
  },
  price: {
    fontFamily: 'Gilroy-Regular',
    color: 'white',
    fontSize: responsiveFontSize(4),
  },
  stylenameFood:{
  position: 'absolute',
  fontFamily: 'Gilroy-Medium',
  fontSize: responsiveFontSize(5),
  color: 'white',
  top: responsiveHeight(10),
  alignSelf: 'center',
  },
  ImageStyle:{
  width: responsiveHeight(52),
  height: responsiveHeight(59),
  marginLeft: responsiveWidth(11),
  marginTop: responsiveHeight(1),
  zIndex: -1,
  },
  ImageContainerCalories:{
  flexDirection: 'row',
  marginLeft: responsiveWidth(45),
  marginTop: responsiveHeight(-2),
  },
  imageCalories:{
  width: responsiveWidth(3),
  height: responsiveHeight(2),
  marginRight: responsiveWidth(1.5),
  },
  DescriptionContainer:{
  width: responsiveWidth(90),
  height: responsiveWidth(20),
  marginTop: responsiveHeight(2),
  marginLeft: responsiveWidth(5),
  },
  DescriptionText:{
  fontFamily: 'Gilroy-Medium',
  fontSize: responsiveFontSize(2.5),
  color: '#343333',
  },
  DescriptionFood:{
  fontFamily: 'Gilroy-Medium',
  fontSize: responsiveFontSize(1.8),
  color: '#BFBBBB',
  marginTop: responsiveHeight(1),
  },
});
