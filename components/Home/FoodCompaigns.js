import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch, faHeart} from '@fortawesome/free-solid-svg-icons';
import ButtonShop from '../Button/ItemShopButton.js';
const CompaignData = [
  {
    id: 1,
    image: require('../../assets/images/Other/food.jpg'),
    title: 'Sale Off 40%',
    realPrice: '$890',
    offPrice: '$790',
  },
  {
    id: 2,
    image: require('../../assets/images/Other/food.jpg'),
    title: 'Sale Off 30%',
    realPrice: '$790',
    offPrice: '$790',
  },
  {
    id: 3,
    image: require('../../assets/images/Other/food.jpg'),
    title: 'Sale Off 30%',
    realPrice: '$790',
    offPrice: '$790',
  },
  {
    id: 4,
    image: require('../../assets/images/Other/food.jpg'),
    title: 'Sale Off 30%',
    realPrice: '$790',
    offPrice: '$790',
  },
  {
    id: 5,
    image: require('../../assets/images/Other/food.jpg'),
    title: 'Sale Off 30%',
    realPrice: '$790',
    offPrice: '$790',
  },
  {
    id: 6,
    image: require('../../assets/images/Other/food.jpg'),
    title: 'Sale Off 30%',
    realPrice: '$790',
    offPrice: '$790',
  },
];
export default function FoodCompaigns(props, {navigation}) {
  const renderCompaignItem = CompaignData.map(item => (
    <>
      <TouchableOpacity key={item.id} style={styles.groupCompaigns}>
        <TouchableOpacity style={styles.imageContainer}>
          <Image source={item.image} style={styles.image} />
          <TouchableOpacity style={styles.likeContainer}>
            <FontAwesomeIcon
              icon={faHeart}
              style={{alignSelf: 'center'}}
              color="#AAAAAA"
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <View>
            <Text style={styles.sale}>{item.title}</Text>
          </View>
          <View
            style={{flexDirection: 'row', marginLeft: responsiveHeight(10)}}>
            <Text style={[styles.off, styles.offFirst]}>{item.realPrice}</Text>
            <Text style={styles.off}>{item.offPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  ));
  return (
    <SafeAreaView style={styles.Home}>
      <TouchableOpacity
        style={styles.groupNav}
        onPress={() => {
          props.navigation.navigate('MainMenu');
        }}>
        <View style={styles.black}></View>
        <View style={styles.yellow}></View>
        <View style={styles.black}></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.searchbox}
        onPress={() => {
          props.navigation.navigate('Search');
        }}>
        <FontAwesomeIcon
          icon={faSearch}
          size={22}
          color="#9D9D9D"
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <View style={styles.groupTitelPage}>
        <Text style={styles.TitelPageFood}>Food </Text>
        <Text style={styles.TitelPage}>Campaigns</Text>
      </View>
      <View
        style={styles.ScrollStyleContainer}>
        <ScrollView>
          <View style={{paddingBottom: responsiveHeight(20)}}>
            {renderCompaignItem}
          </View>
        </ScrollView>
      </View>
      <View style={{position: 'absolute', bottom: 30}}>
        <ButtonShop Text="2 item" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Home: {
    flex: 1,
    backgroundColor: 'white',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  groupNav: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(4),
    height: responsiveHeight(6),
    width: responsiveWidth(7),
  },
  black: {
    backgroundColor: '#272727',
    borderRadius: 20,
    width: responsiveWidth(5),
    height: responsiveHeight(0.5),
    marginTop: responsiveHeight(1),
  },
  yellow: {
    backgroundColor: '#EDC461',
    borderRadius: 20,
    width: responsiveWidth(3),
    height: responsiveHeight(0.6),
    top: responsiveHeight(0.5),
  },
  searchbox: {
    position: 'absolute',
    marginLeft: responsiveWidth(80),
    marginTop: responsiveHeight(4),
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    justifyContent: 'center',
    alingItem: 'center',
    borderLeftWidth: 3,
    borderLeftColor: '#C4C4C4',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  groupTitelPage: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(2),
  },
  TitelPage: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(4),
    color: '#2F2F2F',
    marginBottom: responsiveHeight(4),
  },
  TitelPageFood: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(4),
    color: '#2F2F2F',
  },
  groupCompaigns: {
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(90),
    height: responsiveHeight(35),
    marginBottom: responsiveHeight(4),
    borderRadius: 20,
  },
  imageContainer: {
    backgroundColor: '#E2E2E2',
    alignSelf: 'center',
    width: responsiveWidth(80),
    height: responsiveHeight(25),
    marginTop: responsiveHeight(2),
    borderRadius: 10,
  },
  image: {
    width: responsiveWidth(80),
    height: responsiveHeight(25),
    borderRadius: 10,
  },
  likeContainer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(65),
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  textContainer: {
    flexDirection: 'row',
    marginLeft: responsiveWidth(5),
    marginTop: responsiveHeight(1.5),
  },
  sale: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3),
    color: '#2F2F2F',
  },
  off: {
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(3),

    color: '#2F2F2F',
  },
  offFirst: {
    fontSize: responsiveFontSize(2),
    textDecorationLine: 'line-through',
    marginTop: responsiveHeight(1),
    right: responsiveWidth(3),
  },
  ScrollStyleContainer:{
  height: responsiveHeight(80),
  width: responsiveWidth(93),
  marginLeft: responsiveWidth(5),
 },
});
