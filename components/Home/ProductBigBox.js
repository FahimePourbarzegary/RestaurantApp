import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import categoryFoodList from '../../assets/data/Specialdata/categoryFoodList.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faAngleRight} from '@fortawesome/free-solid-svg-icons';
export default function ProductBigBox(props, {navigation}) {
  nv = props.navigation;
  const [like, setLike] = useState(0);
  const [color, setColor] = useState('#AAAAAA');
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
          <TouchableOpacity
            onPress={() => {
              setLike(like => item.id);
            }}>
            <Text>
              {like == item.id && color == '#AAAAAA' ? (
                <FontAwesomeIcon icon={faHeart} color="white" />
              ) : (
                <FontAwesomeIcon icon={faHeart} color="#AAAAAA" />
              )}
            </Text>
          </TouchableOpacity>
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
        <TouchableOpacity
          style={styles.buttonnext}
          onPress={() =>
            nv.navigate(item.nav, {
              id: item.id,
              calories: item.calories,
              name: item.name,
              Description: item.Description,
              price: item.price,
              route: props.route,
            })
          }>
          <FontAwesomeIcon
            icon={faAngleRight}
            size={25}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={styles.categoryFoodlist}>
        <FlatList
          data={categoryFoodList}
          renderItem={renderCategoryFoodList}
          keyExtractor={item => item.id}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryFoodlist: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(4),
    height: responsiveHeight(48),
  },
  containerFoodList: {
    width: responsiveWidth(55),
    height: responsiveHeight(42),
    marginRight: responsiveWidth(5),
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
    marginLeft: responsiveWidth(9.5),
    marginTop: responsiveHeight(2.5),
    width: responsiveWidth(35),
    height: responsiveWidth(35),
    borderRadius: 200 / 2,
    backgroundColor: 'red',
  },
  calories: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(1.8),
  },
  foodDetail: {
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(2.5),
  },
  buttonnext: {
    position: 'absolute',
    marginLeft: responsiveWidth(38),
    marginTop: responsiveHeight(36),
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: 100 / 2,
    backgroundColor: '#FAFBFD',
    justifyContent: 'center',
    alingItem: 'center',
    shadowColor: 'gray',
    elevation: 15,
  },
  imageCalories: {
    width: responsiveWidth(3),
    height: responsiveHeight(2),
    marginRight: responsiveWidth(1.5),
  },
  stylenameFood: {
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
