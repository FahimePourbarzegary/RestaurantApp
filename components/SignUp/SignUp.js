import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Shadow} from 'react-native-shadow-2';
import Button from '../Button/Button.js';
import LinearGradient from 'react-native-linear-gradient';
export default function SignUp(props, {navigation}) {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <View style={styles.inputImage}>
          <TouchableOpacity style={styles.inputImageIcon}>
            <FontAwesomeIcon icon={faPlus} color="#6B6B6B" />
          </TouchableOpacity>
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>Sign up</Text>
        </View>
        <View style={styles.textInputeContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={val => setUserName(val)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={val => setEmail(val)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={val => setPhoneNumber(val)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={val => setPassword(val)}></TextInput>
        </View>
        <Button
          Text="Login to app"
          nav={() => props.navigation.navigate('Special')}
        />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Signup}>I have account.</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            <Text style={styles.Sign}>Login</Text>
          </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
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
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(22),
  },
  TextContainer: {
    width: responsiveWidth(25),
    marginTop: responsiveHeight(3),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(8),
  },
  Text: {
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3.2),
  },
  container: {
    width: responsiveWidth(95),
    height: responsiveHeight(100),
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: responsiveHeight(2),
    borderColor: '#F3F3F3',
    borderWidth: 3,
  },
  textInputeContainer: {
    marginLeft: responsiveWidth(8),
  },
  input: {
    marginTop: responsiveHeight(1),
    width: responsiveWidth(85),
    backgroundColor: '#FAFBFD',
    height: responsiveWidth(18),
    borderRadius: 60,
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color: '#B0B0B0',
    paddingHorizontal: 25,
  },
  Signup: {
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(10),
    color: '#B0B0B0',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
  },
  Sign: {
    marginTop: responsiveHeight(2),

    color: '#2F2F2F',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
  },
  difaccount: {
    marginTop: responsiveHeight(6),
    marginLeft: responsiveWidth(10),
    color: '#B0B0B0',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
  },
});
