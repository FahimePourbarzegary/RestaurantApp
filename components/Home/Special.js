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
  ActivityIndicator,
  Alert,
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
import CoInfoAddress from './CoInfoAddress.js';
import ProductBigBox from './ProductBigBox.js';
//Redux
import axios from 'axios';
import getfood from './../../Action/get_food';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
//..
function Special(props, {navigation}) {
  const [userData, setUserData] = useState();
  const [selection, setselection] = useState(1);
  const [Token, setToken] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user_info')
        .then(data => data)
        .then(value => {
          setUserData(JSON.parse(value));
        })
        .catch(err => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };
  const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token')
        .then(data => data)
        .then(value => {
          setToken(JSON.stringify(value));
        })
        .catch(err => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getData();
    props.Getfood();
    getToken();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  const EditText = (data, title) => {
    if (title === 'address') {
      setUserData(Data => ({...Data, address: data}));
      Alert.alert('please change your address in Profile');
    } else {
      console.log('error');
    }
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#EFC151" />
      </View>
    );
  }
  console.log('Token' + Token);
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
        <Text style={styles.TitelPage}>Special For You</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.categorycontainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {renderCategoryItem}
          </ScrollView>
        </View>
        <ProductBigBox navigation={props.navigation} id={userData.id} />
        <CoInfoAddress
          text={userData.address}
          navigation={() =>
            props.navigation.navigate('Edit', {
              text: userData.address,
              title: 'Address',
              type: 'address',
              EditText: EditText,
            })
          }
        />
      </ScrollView>
      <View style={{position: 'absolute', bottom: 30}}>
        <ButtonShop
          nav={() => {
            props.navigation.navigate('MyCard', {id: userData.id});
          }}
        />
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
const mapStateToProps = state => ({
 
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      Getfood: getfood,
    
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Special);
