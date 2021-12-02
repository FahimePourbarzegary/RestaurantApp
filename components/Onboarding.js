import React, {Component, useState, useEffect} from 'react';
import {Shadow} from 'react-native-shadow-2';

import {
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Difdish} from './Difdish';
import {OnboardingData} from '.././assets/data/Onboarding/OnboardingData';
import {DifDishData} from '.././assets/data/Onboarding/DifDishData';
export default function Onboarding(props) {
  const [index, setIndex] = useState(0);
  const difDishData=DifDishData;
  const data =difDishData.map((data)=>(
   
    <View style={styles.containerData} key={data.id}> 
      <View >< Image style={styles.difDishImage} source={data.image} /></View>
      <View style={styles.difDishTextContainer}><Text  style={styles.difDishTitle}>{data.title}</Text>
      <Text style={styles.difDishKind} >{data.kind}</Text></View>
      </View>)
  );
  if (index === 3) {
    
    return <Next difDishDatas={DifDishData} data={data}/>;
  }
  return (
    <SafeAreaView style={styles.screen}>
      <BackG OnboardingDatas={OnboardingData[index]} />
      <ImageInfo OnboardingDatas={OnboardingData[index]} />
      <View style={styles.sliderContainer}>
        <Image
          style={styles.SliderElement}
          source={require('.././assets/images/onboarding/Onboarding/SlliderElement.png')}
        />
      </View>
      <TextInfo OnboardingDatas={OnboardingData[index]} />
      <TouchableOpacity
        style={styles.NextIcon}
        onPress={() => {
          console.log(index);
          setIndex(index => index + 1);
        }}>
        <Button />
      </TouchableOpacity> 
      
    </SafeAreaView>
  );
}
const TextInfo = props => (
  <View style={styles.textContainer}>
    <Text style={styles.title}>{props.OnboardingDatas.title}</Text>
    <Text style={styles.description}>{props.OnboardingDatas.description}</Text>
  </View>
);
const BackG = props => (
  <View>
    <Image style={styles.foodbg} source={props.OnboardingDatas.bgFood} />
  </View>
);
const ImageInfo = props => (
  <View style={styles.onboardingContainer}>
    <Image
      style={styles.OnboardingBgIcon}
      source={props.OnboardingDatas.bgIcon}
    />
    <View style={styles.utensilsContainer}>
      <Image
        source={require('.././assets/images/onboarding/Onboarding/Utensils.png')}
      />
    </View>
  </View>
);
const Button = () => (
  <Shadow distance={10} startColor={'#EAEAEA'} offset={[7, 6]}>
    <View style={styles.buttonContainer}>
      <View style={styles.rectangle}></View>
      <View>
        <FontAwesomeIcon icon={faAngleRight} size={20} />
      </View>
    </View>
  </Shadow>
);

const Next = props =>(
  <View>
    <View >
      <Image
        style={styles.difDishBg}
        source={require('.././assets/images/onboarding/DifDish/difDishBg.jpg')}
      />
    </View>
    <View style={styles.bgWhite}>
      <View style={styles.iconUtensils}>
        <Image
          source={require('.././assets/images/onboarding/DifDish/Utensils.png')}
        />
      </View>
      <View style={styles.difDishTextContainer}>
        <Text style={styles.difDishText}>
          You can access our different dishes from the menus.
        </Text>
      </View>
      <View style={styles.Triangle}></View>  
      <Shadow distance={1} startColor={'#EAEAEA'} offset={[0, 0]}>
      <TouchableOpacity style={styles.Button}><Text style={{color:'white',textAlign:'center',fontFamily: 'Gilroy-Medium',fontSize: responsiveFontSize(2.5)}}>Get Started</Text></TouchableOpacity></Shadow>
      <ScrollView style={styles.difDishContainer}>
      {props.data}
      </ScrollView>
     
    </View> 
  </View>);

  
  
 


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
  difDishContainer:{
    width:responsiveWidth(95),
    height:responsiveHeight(100),
    backgroundColor:'white',
    borderRadius:30,
    marginTop:responsiveHeight(2),
    borderColor:'#F3F3F3',
    borderWidth:3,
    
  
   
  },
  containerData:{
    backgroundColor:'#FFFF',
    width:responsiveWidth(94),
    height:responsiveHeight(18),
    marginTop:responsiveHeight(1),
    borderRadius:20,
    flexDirection:'row',
    
  },
  difDishImage:{
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(28),
    height: responsiveWidth(28),
    borderRadius: 200 / 2,
    marginLeft:responsiveWidth(10),
    marginTop:responsiveHeight(1.5),
     
    
  },
  difDishTitle:{
    textAlign: 'center',
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3),
    
  },
  difDishKind:{
    textAlign: 'center',
    color: '#8F8F8F',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2),

  },
  difDishTextContainer:{
    marginLeft:responsiveHeight(4),
    marginTop:responsiveWidth(10),
  },
  Button:{
    width:responsiveWidth(75),
    height:responsiveHeight(10),
    backgroundColor:'#272727',
    borderRadius:50,
    textAlign:'center',
    justifyContent:'center',
    color:'white',
    borderColor:'white',
    borderWidth:2,
    
  },
});
