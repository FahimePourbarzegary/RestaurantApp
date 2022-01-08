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
  Animated,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

import categoryFoodList from '../../assets/data/Specialdata/categoryFoodList.js';
{/*import { SwipeListView } from 'react-native-swipe-list-view';*/}
import { SwipeListView } from 'react-native-swipe-list-view';
export default function CardProductBox() {
  return (
    <View
      style={styles.ContainerAlldata}>
      <SwipeListView
        data={categoryFoodList}
        renderItem={renderCardProducts}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0} 
        rightOpenValue={-75}
      />
      
    </View>
  );
}
  const renderHiddenItem = (data, rowMap)=>{
    return(
    <TouchableOpacity style={styles.trashContainer}>
      <View style={styles.trashLoc}>
        <Image
          source={require('../../assets/images/Other/trash.png')}
          style={{width: responsiveWidth(3), height: responsiveHeight(3)}}
        />
      </View>
    </TouchableOpacity>)}
    
const renderCardProducts = ({item}) => {

  return (
  
      <View style={styles.ContainerCategoryBox}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.imageContainer}></View>
          <View style={styles.foodDetail}>
            <Text
              style={styles.nameStyleText}>
              {item.name}
            </Text>
            <Text
              style={styles.compositionsStyleText}>
              {item.compositions}
            </Text>
            <Text
              style={styles.priceStyleText}>
              ${item.price}
            </Text>
          </View>
          <View style={styles.quantityContainer}>
            <View style={styles.quantity}>
              <Text style={styles.numquantity}>2</Text>
            </View>
            <TouchableOpacity style={styles.plusContainer}>
              <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.minusContainer}>
              <Text style={styles.minus}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

  );
};
const styles = StyleSheet.create({
  ContainerCategoryBox: {
    width: responsiveWidth(85),
    height: responsiveHeight(15),
    marginBottom: responsiveHeight(4),
    backgroundColor: '#FAFBFD',
    borderRadius: 10,
  },

  imageContainer: {
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 200 / 2,
    backgroundColor: 'red',
  },
  foodDetail: {
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(3),
  },
  quantityContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(8),
  },
  quantity: {
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    borderWidth: 2,
    borderColor: 'white',
  },
  numquantity: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(4),
    color: 'black',
  },
  plus: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(3),
    color: '#A3A3A3',
    alignSelf: 'center',
  },
  minus: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(3),
    color: '#A3A3A3',
  },
  plusContainer: {
    position: 'absolute',
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(14),
    marginTop: responsiveHeight(1),
    borderRadius: 50,
    justifyContent: 'center',
    shadowColor: '#0009',
    elevation: 4,
  },
  minusContainer: {
    position: 'absolute',
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#0009',
    elevation: 4,
  },
  trashContainer: {
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(70),
  },
  trashLoc: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor:'gray',
    elevation:5,
  },
  ContainerAlldata:{
  width: responsiveWidth(85),
  height: responsiveHeight(55),
  marginLeft: responsiveWidth(8),
  marginTop: responsiveHeight(3),
   },
  nameStyleText:{
    fontFamily: 'Gilroy-Regular',
    color: '#272727',
    fontSize: responsiveFontSize(2.2),
  },
  compositionsStyleText:{
  fontFamily: 'Gilroy-Medium',
  color: '#9C9C9C',
  fontSize: responsiveFontSize(1.5),
  },
  priceStyleText:{
  fontFamily: 'Gilroy-Medium',
  color: '#313131',
  fontSize: responsiveFontSize(2.5),
  marginTop: responsiveHeight(1),
  },
});
