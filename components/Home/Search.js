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
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ProductLittelBox from './ProductLittelBox';
import ButtonShop from '../Button/ItemShopButton.js';
export default function Search(props, {navigation}) {
  return (
    <SafeAreaView style={styles.search}>
      <TouchableOpacity
        style={styles.flashback}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Image source={require('../../assets/images/Other/Flash.png')} />
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
        <Text style={styles.TitelPageFood}>Search </Text>
        <Text style={styles.TitelPage}>Food 40 Resulth </Text>
      </View>
    <ProductLittelBox navigation={props.navigation} />
      <View style={{position: 'absolute', bottom: 30}}>
        <ButtonShop Text="2 item" />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  search: {
    flex: 1,
    backgroundColor: 'white',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  flashback: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(5),
    height: responsiveHeight(6),
    width: responsiveWidth(7),
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
});
