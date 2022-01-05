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
import {faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Shadow} from 'react-native-shadow-2';
import Button from '../Button/Button.js';
import LinearGradient from 'react-native-linear-gradient';

export default function Profile(props, {navigation}) {
 
  const profile = [
    {
      id: '1',
      title: 'Name Surname',
      text: 'Thoney Asnton',
    },
    {
      id: '2',
      title: 'Phone',
      text: '+90 507 064 2850',
    },
    {
      id: '3',
      title: 'Email',
      text: 'mehmetozsoy1988@gmail.com',
    },
    {
      id: '4',
      title: 'Address',
      text: '241 Hillside Road, HASTINGS',
    },
  ];
  const renderProfiledetail = profile.map(detail => (
    <View style={styles.Container} key={detail.id}>
      <View>
        <Text style={styles.titleProfile}>{detail.title}</Text>
        <Text style={styles.textProfile}>{detail.text}</Text>
        <TouchableOpacity style={styles.inputIcon}>
          <FontAwesomeIcon icon={faPlus} color="#6B6B6B" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  ));
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
          'rgba(247, 247, 247,200) 300% ',
          'rgba(255, 255, 255, 80) 110.25%',
          ' rgba(255, 255, 255, 100) 116.03%',
        ]}
        style={styles.bgWhite}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.inputImage}
            source={require('../../assets/images/onboarding/DifDish/burger.png')}
          />
          <TouchableOpacity style={styles.inputImageIcon}>
            <FontAwesomeIcon icon={faPlus} color="#6B6B6B" />
          </TouchableOpacity>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>My Profile</Text>
        </View>
        <View style={styles.text}>
          <Text
            style={{
              color: '#B0B0B0',
              fontSize: responsiveFontSize(1.8),
              fontFamily: 'Avenir_Medium',
            }}>
            Profile Detail
          </Text>
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon icon={faTimes} color="#353535" size={22} />
        </TouchableOpacity>
        <View
          style={{width: responsiveWidth(95), height: responsiveHeight(55)}}>
          <ScrollView>
            <View style={{paddingBottom: responsiveHeight(10)}}>
              {renderProfiledetail}
            </View>
          </ScrollView>
          <View style={{position: 'absolute', bottom: 0}}>
            <Button Text="Save" />
          </View>
        </View>
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
  inputImageIcon: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(10),
    height: responsiveWidth(10),
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-3),
    marginLeft: responsiveWidth(-5),
    ShadowColor: 'gray',
    elevation: 5,
  },
  TextContainer: {
    width: responsiveWidth(80),
    marginTop: responsiveHeight(2),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(8),
  },
  Text: {
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3.2),
  },
  text: {
    width: responsiveWidth(80),
    marginTop: responsiveHeight(1),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(8),
  },
  close: {
    position: 'absolute',
    marginLeft: responsiveWidth(90),
    marginTop: responsiveHeight(4),
  },
  Container: {
    width: responsiveWidth(85),
    height: responsiveHeight(15),
    marginLeft: responsiveWidth(8),
    marginBottom: responsiveHeight(1.5),
    backgroundColor: '#FAFBFD',
    borderRadius: 20,
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
  titleProfile: {
    left: responsiveWidth(5),
    top: responsiveWidth(5),
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color: '#B0B0B0',
  },
  textProfile: {
    left: responsiveWidth(5),
    top: responsiveWidth(5),
    color: '#232323',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1.5),
  },
});
