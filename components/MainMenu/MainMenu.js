import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight, faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Shadow} from 'react-native-shadow-2';
import Button from '../Button/Button.js';
import LinearGradient from 'react-native-linear-gradient';
export default function MainMenu(props, {navigation}) {
  nv = props.navigation;
  const renderMenudetail = ({item}) => {
    return (
      <View style={styles.Container}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <TouchableOpacity
            style={styles.Entri}
            onPress={() => nv.navigate(item.nav)}>
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
      id: '3',
      title: 'Payment Settings',
      nav: 'Profile',
    },
    {
      id: '5',
      title: 'My Card',
      nav: 'MyCard',
    },
    {
      id: '6',
      title: 'Food Delivery',
      nav: 'Profile',
    },
    {
      id: '7',
      title: 'Filter Food',
      nav: 'Profile',
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
        <View style={styles.inputImage}></View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>Thoney Asnton</Text>
        </View>
        <View style={styles.text}>
          <Text
            style={styles.numberStyleText}>
            +90 507 064 2850
          </Text>
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
        <Button Text="Log out" />
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
  numberStyleText:{
  color: '#B0B0B0',
  fontSize: responsiveFontSize(1.8),
  fontFamily: 'Avenir_Medium',
  },
});
