import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
//Redux
import axios from 'axios';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
//..
function Login(props, {navigation}) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userToken, setuserToken] = useState('false');
  const [checkLogin, setCheckLogin] = useState(null);
  const [styleAuthU, setStyleAuthU] = useState(true);
  const [styleAuthP, setStyleAuthP] = useState(true);
  const [styleAuthC, setStyleAuthC] = useState(false);
  const [userData, setUserData] = useState([{}]);
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user')
        .then(data => data)
        .then(value => {
          setUserData(value);
        })
        .catch(err => console.log(err));
    } catch (e) {
      console.log(e);
    }
  };
  const StoreData = async user => {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('@user_info', jsonValue);
      console.log(JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }
  };

  const Set_userToken = async userToken => {
    try {
      await AsyncStorage.setItem('@userToken', 'TRUE');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {}, []);
  const AuthUser = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/User/AuthUser', state)
        .then(res => res.data)
        .then(data => {
          setUserData(userData => data);
          if (data[0].id == 999999999) {
            setStyleAuthU(false);
            setStyleAuthP(true);
            setStyleAuthC(false);
          } else if (data[0].id == 999999998) {
            setStyleAuthP(false);
            setStyleAuthU(true);
            setStyleAuthC(true);
          } else {
            setStyleAuthU(true);
            setStyleAuthP(true);
            setStyleAuthC(true);
            Set_userToken();
            StoreData(data[0]);
            props.navigation.navigate('Special');
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  const Submit = () => {
    ClickAuth();
  };
  const ClickAuth = () => {
    const state = {
      username: userName,
      password: password,
    };
    AuthUser(state);
  };

  return (
    <View>
      <View>
        <Image
          style={styles.loginBg}
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
        <View style={styles.icon}>
          <FontAwesomeIcon icon={faSignInAlt} size={25} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>Login</Text>
        </View>
        <View style={styles.textInputeContainer}>
          <View>
            <TextInput
              style={[
                styles.input,
                styleAuthU ? null : {borderColor: 'red', borderWidth: 2},
              ]}
              onChangeText={value => {
                setUserName(value);
              }}
              placeholder="Username"
            />
            {styleAuthU ? (
              styleAuthC ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="gray"
                  style={styles.iconStyleWrong}
                  size={22}
                />
              ) : null
            ) : (
              <FontAwesomeIcon
                icon={faTimesCircle}
                color="red"
                style={styles.iconStyleWrong}
                size={22}
              />
            )}
          </View>
          <View>
            <TextInput
              style={[
                styles.input,
                styleAuthP ? null : {borderColor: 'red', borderWidth: 2},
              ]}
              onChangeText={value => {
                setPassword(value);
              }}
              placeholder="Password"
              secureTextEntry={true}
            />
            {styleAuthP ? (
              styleAuthC ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color="gray"
                  style={styles.iconStyleWrong}
                  size={22}
                />
              ) : null
            ) : (
              <FontAwesomeIcon
                icon={faTimesCircle}
                color="red"
                style={styles.iconStyleWrong}
                size={22}
              />
            )}
          </View>
        </View>
        <TouchableOpacity style={styles.Button} onPress={() => Submit()}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Gilroy-Medium',
              fontSize: responsiveFontSize(2.5),
            }}>
            Login to app
          </Text>
        </TouchableOpacity>

        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Signup}>I don`t have account.</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('SignUp');
            }}>
            <Text style={styles.sign}>Sign</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.Signup}>I ForgotPassword.</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('ForgotPassword');
            }}>
            <Text style={styles.sign}>ForgotPassword</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  loginBg: {
    width: responsiveWidth(100),
    height: responsiveWidth(60),
  },
  bgWhite: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    marginTop: responsiveHeight(-13),
    borderRadius: 25,
  },
  icon: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-4),
    marginLeft: responsiveWidth(42),
  },
  TextContainer: {
    width: responsiveWidth(20),
    marginTop: responsiveHeight(4),
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
  Button: {
    width: responsiveWidth(85),
    height: responsiveHeight(10),
    backgroundColor: '#272727',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(8),
    shadowColor: '#000000',
    elevation: 15,
  },
  textInputeContainer: {
    marginLeft: responsiveWidth(8),
  },
  input: {
    marginTop: responsiveHeight(3),
    width: responsiveWidth(85),
    backgroundColor: '#FAFBFD',
    height: responsiveWidth(18),
    borderRadius: 60,
    paddingHorizontal: 25,
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color: '#B0B0B0',
  },
  Signup: {
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(10),
    color: '#B0B0B0',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
  },
  sign: {
    marginTop: responsiveHeight(2),

    color: '#2F2F2F',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
  },
  difaccount: {
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(10),
    color: '#B0B0B0',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
  },
  facebook: {
    width: responsiveWidth(43),
    height: responsiveHeight(10),
    backgroundColor: '#5C75FB',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(8),
  },
  google: {
    width: responsiveWidth(45),
    height: responsiveHeight(10),
    backgroundColor: '#FF4E3F',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    marginTop: responsiveHeight(1),
    marginLeft: responsiveWidth(0.2),
  },
  iconStyleWrong: {
    position: 'absolute',
    marginTop: responsiveHeight(6.5),
    marginLeft: responsiveWidth(75),
  },
});

export default Login;
