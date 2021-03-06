import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight, faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Button from '../Button/Button.js';
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
function MainMenu(props, {navigation}) {
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
  }, [props.navigation]);

  useFocusEffect(
    useCallback(() => {
      return () => getData();
    }, [props.navigation]),
  );

  console.log(userData);
  nv = props.navigation;
  const renderMenudetail = ({item}) => {
    return (
      <View style={styles.Container}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity
            style={styles.Entri}
            onPress={() => nv.navigate(item.nav, {id: userData.id})}>
            <FontAwesomeIcon icon={faAngleRight} color="#AAAAAA" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const [menu, setMenu] = useState([
    {
      id: '1',
      title: 'My Profile',
      nav: 'Profile',
    },
    {
      id: '2',
      title: 'Change Password',
      nav: 'ChangePassword',
    },

    {
      id: '5',
      title: 'My Card',
      nav: 'MyCard',
    },
    {
      id: '6',
      title: 'Food Compaign',
      nav: 'FoodCompaigns',
    },
    {
      id: '7',
      title: 'Favorites',
      nav: 'Favorites',
    },
    {
      id: '8',
      title: 'Filter Food',
      nav: 'FoodFilter',
    },
  ]);
  return (
    <View>
      <View>
        <Image
          style={styles.Bg}
          source={require('../.././assets/images/onboarding/DifDish/difDishBg.jpg')}
        />
      </View>

      <LinearGradient
        colors={[
          'rgba(247, 247, 247,10) 100% ',
          'rgba(255, 255, 255, 20) 110.25%',
          ' rgba(255, 255, 255, 30) 116.03%',
        ]}
        style={styles.bgWhite}>
        <View>
          <Image
            style={styles.inputImage}
            source={{uri: 'data:image/jpeg;base64,' + userData.image}}
          />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>{userData.username}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.numberStyleText}>{userData.phonenumber}</Text>
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon icon={faTimes} color="#353535" size={22} />
        </TouchableOpacity>
        <View style={{height: responsiveHeight(42)}}>
          <FlatList
            data={menu}
            renderItem={renderMenudetail}
            keyExtractor={item => item.id}
          />
        </View>
        <Button
          Text="Log Out"
          nav={() => props.navigation.navigate('Onboarding')}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  Bg: {
    width: responsiveWidth(100),
    height: responsiveWidth(60),
  },
  bgWhite: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: '#FFFF',
    marginTop: responsiveHeight(-13),
    borderRadius: 25,
  },
  inputImage: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: 200 / 2,
    borderWidth: 6,
    borderColor: '#FFFF',
    marginTop: responsiveHeight(-8),
    marginLeft: responsiveWidth(35),
  },
  TextContainer: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(3),
    height: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3.2),
  },
  text: {
    width: responsiveWidth(100),
    marginTop: responsiveHeight(1),
    height: responsiveHeight(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    marginLeft: responsiveWidth(90),
    marginTop: responsiveHeight(4),
  },
  Container: {
    width: responsiveWidth(85),
    height: responsiveHeight(7),
    marginLeft: responsiveWidth(4),
  },
  inputIcon: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(14),
    height: responsiveWidth(14),
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(65),
  },
  title: {
    left: responsiveWidth(5),
    top: responsiveWidth(5),
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color: '#B0B0B0',
  },
  Entri: {
    marginLeft: responsiveWidth(85),
  },
  numberStyleText: {
    color: '#B0B0B0',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Avenir_Medium',
  },
});

export default MainMenu;
