import React from 'react';
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
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import CardProductBox from './CardProductBox.js';
import BuyNowButton from '../Button/BuyNowButton.js';

export default function MyCard(props, {navigation}) {
  return (
    <SafeAreaView style={styles.mycard}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.clear}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.close}
          onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon
            icon={faTimes}
            size={22}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.groupTitelPage}>
        <Text style={styles.TitelPageFood}>My </Text>
        <Text style={styles.TitelPage}>Card </Text>
      </View>
      <CardProductBox />
      <View style={{flexDirection: 'row'}}>
        <BuyNowButton />
        <View style={styles.priceContainer}>
          <Text style={styles.tprice}>Total Price</Text>
          <Text style={styles.price}> $7,90 </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mycard: {
    flex: 1,
    backgroundColor: 'white',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  clear: {
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(4),
  },
  clearText: {
    color: '#9C9C9C',
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(2),
  },
  close: {
    marginLeft: responsiveWidth(65),
    marginTop: responsiveHeight(4),
    justifyContent: 'center',
    alingItem: 'center',
  },
  groupTitelPage: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(5),
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
  priceContainer: {
    position: 'absolute',
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(8),
  },
  tprice: {
    color: '#9C9C9C',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1),
  },
  price: {
    color: '#2F2F2F',
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(4),
  },
});
