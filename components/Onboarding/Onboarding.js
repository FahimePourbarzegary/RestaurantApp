import React, {Component, useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {OnboardingData} from '../.././assets/data/Onboarding/OnboardingData';
import {DifDishData} from '../.././assets/data/Onboarding/DifDishData';
 
/*firstPage if user is not login*/
function Onboarding(props, {navigation}) {
  /*for 3 change*/
  const [index, setIndex] = useState(0);
  /*for connect to data and save in data */
  const difDishData = DifDishData;
  const data = difDishData.map(data => (
    <View style={styles.containerData} key={data.id}>
      <View>
        <Image style={styles.difDishImage} source={data.image} />
      </View>
      <View style={styles.difDishTextContainer}>
        <Text style={styles.difDishTitle}>{data.title}</Text>
        <Text style={styles.difDishKind}>{data.kind}</Text>
      </View>
    </View>
  ));
 
  return (
    <SafeAreaView style={styles.screen}>
      <BackG OnboardingDatas={OnboardingData[index]} />
      <ImageInfo OnboardingDatas={OnboardingData[index]} />
      <View style={styles.sliderContainer}>
        <Image
          style={styles.SliderElement}
          source={require('../.././assets/images/onboarding/Onboarding/SlliderElement.png')}
        />
      </View>
      <TextInfo OnboardingDatas={OnboardingData[index]} />
      {/*function button to next screen and navigate to difdish screen */}
      <TouchableOpacity
        style={styles.NextIcon}
        onPress={() => {
          if (index === 2) {
            props.navigation.navigate('Difdish');
          } else {
            console.log(index);
            setIndex(index => index + 1);
          }
        }}>
        <Button />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
/* two text in screen*/
const TextInfo = props => (
  <View style={styles.textContainer}>
    <Text style={styles.title}>{props.OnboardingDatas.title}</Text>
    <Text style={styles.description}>{props.OnboardingDatas.description}</Text>
  </View>
);
/*background of sceern cos* image food */
const BackG = props => (
  <View>
    <Image style={styles.foodbg} source={props.OnboardingDatas.bgFood} />
  </View>
);
/*image circle of screen */
const ImageInfo = props => (
  <View style={styles.onboardingContainer}>
    <Image
      style={styles.OnboardingBgIcon}
      source={props.OnboardingDatas.bgIcon}
    />
    <View style={styles.utensilsContainer}>
      <Image
        source={require('../.././assets/images/onboarding/Onboarding/Utensils.png')}
      />
    </View>
  </View>
);
/* button component */
const Button = () => (
  <View style={styles.buttonContainer}>
    <View style={styles.rectangle} />
    <View>
      <FontAwesomeIcon icon={faAngleRight} size={20} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  foodbg: {
    width: responsiveWidth(100),
    height: responsiveHeight(60),
    position: 'absolute',
    zIndex: -1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboardingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  OnboardingBgIcon: {
    marginTop: responsiveHeight(17),
    marginLeft: responsiveWidth(6),
    width: responsiveWidth(65),
    height: responsiveWidth(65),
    borderRadius: 400 / 2,
    backgroundColor: '#FAFBFD',
    borderWidth: 2,
    borderColor: '#FFFF',
  },
  utensilsContainer: {
    backgroundColor: 'black',
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(-12),
    marginTop: responsiveWidth(-5),
  },
  sliderContainer: {
    marginTop: responsiveHeight(11),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: responsiveHeight(5),
    height: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(4),
  },
  description: {
    color: '#AFAFAF',
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
  },
  NextIcon: {
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(40),
    height: responsiveWidth(20),
    width: responsiveWidth(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: 100 / 2,
    backgroundColor: '#FAFBFD',
    borderWidth: 2,
    borderColor: '#FFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: 'gray',
    elevation: 15,
  },
  rectangle: {
    width: 6 * 2,
    height: 7.2,
    backgroundColor: '#EFC151',
    borderRadius: 20,
    marginLeft: 5,
  },
  difDishBg: {
    width: responsiveWidth(100),
    height: responsiveWidth(60),
  },
  bgWhite: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: '#FAFAFA',
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
    height: responsiveHeight(10),
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
    height: responsiveHeight(100),
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: responsiveHeight(2),
    borderColor: '#F3F3F3',
    borderWidth: 3,
  },
  containerData: {
    backgroundColor: '#FFFF',
    width: responsiveWidth(94),
    height: responsiveHeight(18),
    marginTop: responsiveHeight(1),
    borderRadius: 20,
    flexDirection: 'row',
  },
  difDishImage: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(28),
    height: responsiveWidth(28),
    borderRadius: 200 / 2,
    marginLeft: responsiveWidth(10),
    marginTop: responsiveHeight(1.5),
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
    marginTop: responsiveWidth(10),
  },
  Button: {
    // position:'absolute',
    // botttom:20,
    width: responsiveWidth(75),
    height: responsiveHeight(10),
    backgroundColor: '#272727',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
  },
});

export default Onboarding;
