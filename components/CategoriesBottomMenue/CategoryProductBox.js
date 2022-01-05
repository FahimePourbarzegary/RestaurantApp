import React from 'react';
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
import categoryFoodList from '../../assets/data/Specialdata/categoryFoodList.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

export default function CategoryProductBox() {
  return (
    <View
      style={styles.ContainerAllData}>
      <FlatList
        data={categoryFoodList}
        renderItem={renderCategoryProducts}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
const renderCategoryProducts = ({item}) => {
  return (
    <View style={styles.ContainerCategoryBox}>
      <View
        style={styles.containerImageCalories}>
        <Image
          source={require('../../assets/images/Other/calories.png')}
          style={styles.ImageCalories}
        />
        <Text style={styles.calories}> {item.calories} Calories</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.imageContainer}></View>
        <View style={styles.foodDetail}>
          <Text
            style={styles.nameStyleText}>
            {item.name}
          </Text>
          <Text
            style={styles.compositionsText}>
            {item.compositions}
          </Text>
          <Text
            style={styles.priceText}>
            ${item.price}
          </Text>
        </View>
        <View style={styles.buttonnext}>
          <FontAwesomeIcon
            icon={faAngleRight}
            size={25}
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerCategoryBox: {
    width: responsiveWidth(85),
    height: responsiveHeight(18),

    marginBottom: responsiveHeight(4),
    backgroundColor: '#FAFBFD',
    borderRadius: 10,
  },
  calories: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(1.3),
  },
  imageContainer: {
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1.5),
    width: responsiveWidth(28),
    height: responsiveWidth(28),
    borderRadius: 200 / 2,
    backgroundColor: 'red',
  },
  foodDetail: {
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(4),
  },
  buttonnext: {
    position: 'absolute',
    marginLeft: responsiveWidth(65),
    marginTop: responsiveHeight(12),
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: 100 / 2,
    backgroundColor: '#FAFBFD',
    justifyContent: 'center',
    alingItem: 'center',
    shadowColor: 'gray',
    elevation: 15,
  },
  ContainerAllData:{
  width: responsiveWidth(85),
  height: responsiveHeight(55),
  marginLeft: responsiveWidth(8),
 },
 ContainerAllData:{
  position: 'absolute',
  flexDirection: 'row',
  right: 0,
  marginTop: responsiveHeight(2),
  marginRight: responsiveWidth(4),
 },
 ImageCalories:{
  width: responsiveWidth(3),
  height: responsiveHeight(2.1),
  marginRight: responsiveWidth(0.5),
  },
  nameStyleText:{
  fontFamily: 'Gilroy-Regular',
  color: '#272727',
  fontSize: responsiveFontSize(2.2),
  },
  compositionsText:{
  fontFamily: 'Gilroy-Medium',
  color: '#9C9C9C',
  fontSize: responsiveFontSize(1.5),
  },
  priceText:{
  fontFamily: 'Gilroy-Medium',
  color: '#313131',
  fontSize: responsiveFontSize(2.5),
  marginTop: responsiveHeight(2),
  },
});
