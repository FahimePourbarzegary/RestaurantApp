import React, {useState, useEffect} from 'react';
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
import {faSearch, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CategoryProductBox from './CategoryProductBox.js';
import SubMenue from './SubMenue.js';

export default function CategoriesBottomMenue(props, navigation) {
  const {filter, id} = props.route.params;
  const [listfood, setlistfood] = useState(null);
  const filterfood = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/Food/FilterFood', state)
        .then(res => res.data)
        .then(data => {
          setlistfood(data);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const Submit = () => {
    Click();
  };
  const Click = () => {
    const state = {
      filter: filter,
    };
    filterfood(state);
  };

  return (
    <SafeAreaView style={styles.categorypage}>
      <TouchableOpacity
        style={styles.flashback}
        onPress={() => props.navigation.goBack()}>
        <Image source={require('../../assets/images/Other/Flash.png')} />
      </TouchableOpacity> 

      <View style={styles.groupTitelPage}>
        <Text style={styles.TitelPageFood}>Category </Text>
        <Text style={styles.TitelPage}>{filter}</Text>
      </View> 
      <View style={styles.product}>
        <CategoryProductBox
          Func={() => Submit()}
          FoodList={listfood}
          nv={props.navigation}
          id={id}
        />
      </View>
      <SubMenue
        search={() => {
          props.navigation.navigate('Search');
        }}
        home={() => {
          props.navigation.navigate('Special');
        }}
        Favorites={() => {
          props.navigation.navigate('Favorites', {id: id});
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  product: {
    marginLeft: responsiveHeight(2),
  },
  categorypage: {
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
    marginBottom: responsiveWidth(8),
  },
  TitelPageFood: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(4),
    color: '#2F2F2F',
  },
});
