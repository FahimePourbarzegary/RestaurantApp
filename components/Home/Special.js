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
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ButtonShop from '../Button/ItemShopButton.js';
import categoriesNavData from '../../assets/data/Specialdata/categoriesNavData.js';
import categoryFoodList from '../../assets/data/Specialdata/categoryFoodList.js';
import CoInfoAddress from './CoInfoAddress.js';
import ProductBigBox from './ProductBigBox.js';
export default function Special(props, {navigation}) {
  const [selection, setselection] = useState(1);
  const renderCategoryItem = categoriesNavData.map(item => (
    <View>
      <TouchableOpacity
        key={item.id}
        onPress={() => setselection(selection => item.id)}>
        <View
          style={
            item.id == selection
              ? styles.containercatnametrue
              : styles.containercatnamefalse
          }>
          <Text
            style={
              item.id == selection
                ? styles.categorynametrue
                : styles.categorynamefalse
            }>
            {item.categoryName}
          </Text>
          <View
            style={
              item.id == selection
                ? styles.categoryunderlinetrue
                : styles.categoryunderlinefalse
            }></View>
        </View>
      </TouchableOpacity>
    </View>
  ));
  return (
    <SafeAreaView style={styles.special}>
      <TouchableOpacity
        style={styles.groupNav}
        onPress={() => {
          props.navigation.navigate('MainMenu');
        }}>
        <View style={styles.black}></View>
        <View style={styles.yellow}></View>
        <View style={styles.black}></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.searchbox}>
        <FontAwesomeIcon
          icon={faSearch}
          size={22}
          color="#9D9D9D"
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <View style={styles.groupTitelPage}>
        <Text style={styles.TitelPageFood}>Food </Text>
        <Text style={styles.TitelPage}>Special For You</Text>
      </View>
      <ScrollView>
        <View style={styles.categorycontainer}>
          <ScrollView horizontal={true}>{renderCategoryItem}</ScrollView>
        </View>
        <ProductBigBox navigation={props.navigation} />
        <CoInfoAddress />
      </ScrollView>
      <View style={{position: 'absolute', bottom: 30}}>
        <ButtonShop Text="2 item" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  special: {
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
  },
  TitelPageFood: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(4),
    color: '#2F2F2F',
  },
  categorycontainer: {
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(2),
  },
  containercatnamefalse: {
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(4),
    marginTop: responsiveHeight(2),
  },
  containercatnametrue: {
    marginLeft: responsiveWidth(3),
    marginRight: responsiveWidth(5),
  },
  categorynametrue: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3),
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#2F2F2F',
  },
  categorynamefalse: {
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(2),
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#9C9C9C',
  },
  categoryunderlinetrue: {
    backgroundColor: '#EDC461',
    borderRadius: 20,
    width: responsiveWidth(3),
    height: responsiveHeight(1),
    top: responsiveHeight(0.8),
    alignSelf: 'center',
  },
  categoryunderlinefalse: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: responsiveWidth(3),
    height: responsiveHeight(1),
    top: responsiveHeight(0.8),
    alignSelf: 'center',
  },
});
