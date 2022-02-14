import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {DifDishData} from '../.././assets/data/Onboarding/DifDishData';
import Button from '../Button/Button';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Shadow} from 'react-native-shadow-2';
//Redux
import axios from 'axios';

import getfood from './../../Action/get_food';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
//..
const Difdish = (props, {navigation}) => {
  useEffect(() => {
  
    props.Getfood();
  }, []);
  /*for radio button select*/
  const [radioSelected, setRadioSelected] = useState(1);
  /*connect to data*/
  const difDishData = DifDishData;
  /*for connect to data and save in data */
  const data = difDishData.map(data => (
    /*list of data and check radio button withstyle*/
    <View
      style={
        data.id == radioSelected
          ? styles.containerDataSelected
          : styles.containerData
      }
      key={data.id}>
      <View>
        <Image style={styles.difDishImage} source={data.image} />
      </View>
      <View style={styles.difDishTextContainer}>
        <Text style={styles.difDishTitle}>{data.title}</Text>
        <Text style={styles.difDishKind}>{data.kind}</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <TouchableOpacity
          onPress={() => setRadioSelected(radioSelected => data.id)}>
          <Shadow distance={10} startColor={'#00000006'} offset={[8, 6]}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 24,
                borderWidth: 2,
                borderColor: '#D9D9D9',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#FAFBFD',
              }}>
              {data.id == radioSelected ? (
                <View
                  style={{
                    height: 18,
                    width: 18,
                    borderRadius: 12,
                    borderWidth: 2,
                    borderColor: '#D9D9D9',
                    backgroundColor: '#272727',
                  }}
                />
              ) : null}
            </View>
          </Shadow>
        </TouchableOpacity>
      </View>
    </View>
  ));
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.difDishBg}
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
        <View style={styles.iconUtensils}>
          <Image
            source={require('../.././assets/images/onboarding/DifDish/Utensils.png')}
          />
        </View>
        <View style={{width: responsiveWidth(70)}}>
          <Text style={styles.difDishText}>
            You can access our different dishes from the menus.
          </Text>
        </View>

        <View style={styles.difDishContainer}>
          <ScrollView>
            <View style={{paddingBottom: responsiveHeight(10)}}>{data}</View>
          </ScrollView>
          {/*button component*/}
          <TouchableOpacity
            style={styles.Button}
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <View>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontFamily: 'Gilroy-Medium',
                  fontSize: responsiveFontSize(2.5),
                }}>
                Get Started
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  difDishBg: {
    width: responsiveWidth(100),
    height: responsiveWidth(60),
  },
  bgWhite: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    marginTop: responsiveHeight(-13),
    borderRadius: 25,
    alignItems: 'center',
  },
  iconUtensils: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-4),
  },
  difDishTextContainer: {
    width: responsiveWidth(70),
    marginTop: responsiveHeight(1),
    height: responsiveHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  difDishText: {
    textAlign: 'center',
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
  },
  difDishContainer: {
    width: responsiveWidth(95),
    height: responsiveHeight(68),

    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: responsiveHeight(2),
    borderColor: '#F3F3F3',
    borderWidth: 3,
  },
  containerData: {
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(94),
    height: responsiveHeight(18),
    marginTop: responsiveHeight(1),
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDataSelected: {
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(94),
    height: responsiveHeight(20),
    marginTop: responsiveHeight(1),
    borderRadius: 20,
    borderColor: 'white',
    borderWidth: 2,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'gray',
    elevation: 20,
  },
  difDishImage: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(28),
    height: responsiveWidth(28),
    borderRadius: 200 / 2,
    marginLeft: responsiveWidth(10),
  },
  difDishTitle: {
    textAlign: 'center',
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3),
  },
  difDishKind: {
    textAlign: 'center',
    color: '#8F8F8F',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2),
  },
  difDishTextContainer: {
    marginLeft: responsiveHeight(4),
  },
  Button: {
    position: 'absolute',
    bottom: 30,
    right: 0,
    left: 0,
    width: responsiveWidth(75),
    height: responsiveHeight(10),
    marginLeft: responsiveWidth(10),
    backgroundColor: '#272727',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: 'gray',
    elevation: 6,
  },
  Triangle: {
    height: responsiveHeight(100),
    marginTop: 0,
    backgroundColor: 'white',
  },
  radioButtonContainer: {
    position: 'absolute',
    right: 0,
    marginTop: responsiveHeight(8),
    marginRight: responsiveWidth(8),
    alignItems: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(Difdish);
