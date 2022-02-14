import React, {useState, useEffect} from 'react';
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
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHeart, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {CommonActions} from '@react-navigation/native';
//Redux
import axios from 'axios';
import getfood from './../../Action/get_food';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//..
function ProductBigBox(props, {navigation}) {
  const [foods, setfoods] = useState('');
  useEffect(() => {
    props.Getfood();
    setfoods(props.food.data);
  }, []);

  const renderCategoryFoodList = ({item}) => {
    const checkLike = async state => {
      try {
        const res = await axios
          .post('http://192.168.43.121/api/Like/checkLike', state)
          .then(res => res.data)
          .then(data => {
            item.favorite = data;
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
      checkLike(state);
    };
    Check();
    const insertLike = async state => {
      try {
        const res = await axios
          .post('http://192.168.43.121/api/Like/insertLike', state)
          .then(res => res.data)
          .then(data => {
            console.log(data);
            item.favorite = data;
          });
      } catch (e) {
        console.log(e);
      }
    };
    const SubmitLike = () => {
      ClickinsertLike();
    };
    const ClickinsertLike = () => {
      const state = {
        name: item.name,
        filter: item.filter,
        image: item.image,
        calories: item.calories,
        composition: item.composition,
        Description: item.Description,
        price: item.price,
        favorite: 1,
        id_user: props.id,
      };
      insertLike(state);
    };
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
              SubmitLike();
            }}>
            <Text>
              {item.favorite == 1 ? (
                <FontAwesomeIcon icon={faHeart} color="#FFA500" />
              ) : (
                <FontAwesomeIcon icon={faHeart} color="#AAAAAA" />
              )}
            </Text>
          </TouchableOpacity>
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
          onPress={() =>
            props.navigation.dispatch(
              CommonActions.navigate({
                name: 'FoodDetail',
                params: {
                  id: item.id,
                  calories: item.calories,
                  filter: item.filter,
                  name: item.name,
                  image: item.image,
                  Description: item.description,
                  price: item.price,
                  favorite: item.favorite,
                  composition: item.composition,
                  route: props.route,
                },
              }),
            )
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
          data={foods}
          renderItem={renderCategoryFoodList}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
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
    shadowColor: '#0009',
    elevation: 10,
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
const mapStateToProps = state => ({
  food: state.food,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      Getfood: getfood,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductBigBox);
