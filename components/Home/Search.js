import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import ProductLittelBox from './ProductLittelBox';
import ButtonShop from '../Button/ItemShopButton.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Search(props, {navigation}) {
  const [userData, setUserData] = useState('');
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
  useEffect(() => {
    getData();
  }, []);
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
 
      <ProductLittelBox id={userData.id} navigation={props.navigation} />
      <View style={{position: 'absolute', bottom: 30}}>
        <ButtonShop nav={() => {
            props.navigation.navigate('MyCard', {id: userData.id});
          }}/>
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
});
