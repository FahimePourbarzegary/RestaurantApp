import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, TextInput, Alert} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Button/Button.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function ChangePassword(props, {navigation}) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reNewPassword, setReNewPassword] = useState('');
  const [styleAuthP, setStyleAuthP] = useState(true);
  const [styleAuthOP, setStyleAuthOP] = useState(true);
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
  const StoreData = async user => {
    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.removeItem('@user_info');
      await AsyncStorage.setItem('@user_info', jsonValue);
      console.log(JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }
  };
  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@user_info');
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const changePassword = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/User/ChangePassword', state)
        .then(res => res.data)
        .then(data => {
          console.log(data);
          removeData();
          StoreData(userData);
          getData();
        });
    } catch (e) {
      console.log(e);
    }
  };
  const Change = () => {
    ClickChange();
  };
  const ClickChange = () => {
    const state = {
      id: userData.id,
      password: newPassword,
    };
    changePassword(state);
  };
  const tickClick = () => {
    if (reNewPassword != newPassword) {
      setStyleAuthP(false);
    }else if (newPassword.length>8||newPassword.length<5 ){
       setStyleAuthP(false);
          Alert.alert("Your username is invalid must in range 5-8");
    } else {
      setStyleAuthP(true);
    }
  };
  const tickClickOldPas = () => {
    if (oldPassword != userData.password) {
      setStyleAuthOP(false);
    } else {
      setStyleAuthOP(true);
    }
  };
  const SaveClick = () => {
    if (newPassword == '' || reNewPassword == '') {
      setStyleAuthP(false);
    } else if (reNewPassword != newPassword) {
      setStyleAuthP(false);
    } else if (
      styleAuthP == false ||
      styleAuthOP == false ||
      oldPassword == ''
    ) {
      Alert.alert('Check Your input again something Wrong');
    } else {
      console.log('ok');
      userData.password = newPassword;
      Change();
      props.navigation.goBack();
    }
  };
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
        <View style={styles.icon}>
          <Image source={require('../.././assets/images/Other/security.png')} />
        </View>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>Change Password</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.old}>Enter Old Password</Text>
        </View>

        <View style={styles.textInputeContainer}>
          <TextInput
            style={[
              styles.input,
              styleAuthOP ? null : {borderColor: 'red', borderWidth: 2},
            ]}
            placeholder="Old Password"
            onChangeText={val => setOldPassword(val)}
            onEndEditing={() => tickClickOldPas()}
            placeholderTextColor="gray" 
            ></TextInput>
        </View>
        <View style={{marginTop: responsiveHeight(2)}}></View>
        <View style={styles.text}>
          <Text style={styles.new}>Create New Password</Text>
        </View>
        <View style={styles.textInputeContainer}>
          <TextInput
            style={[
              styles.input,
              styleAuthP ? null : {borderColor: 'red', borderWidth: 2},
            ]}
            placeholder="Enter New Password"
            secureTextEntry={true}
            onChangeText={val => setNewPassword(val)}
            placeholderTextColor="gray" 
            ></TextInput>
          <TextInput
            style={[
              styles.input,
              styleAuthP ? null : {borderColor: 'red', borderWidth: 2},
            ]}
            placeholder="Re Enter New Password"
            onChangeText={val => setReNewPassword(val)}
            secureTextEntry={true}
            onEndEditing={() => tickClick()}
            placeholderTextColor="gray" 
            ></TextInput>
        </View>

        <Button Text="Save" nav={() => SaveClick()} />
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
  icon: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: 100 / 1.8,
    borderWidth: 3,
    borderColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-4),
    marginLeft: responsiveWidth(42),
  },
  TextContainer: {
    width: responsiveWidth(80),
    marginTop: responsiveHeight(3),
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
    marginTop: responsiveHeight(1.5),
    width: responsiveWidth(85),
    backgroundColor: '#F0F0F0',
    height: responsiveWidth(18),
    borderColor: '#DED7D7',
    borderWidth: 0.5,
    borderRadius: 60,
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color: '#B0B0B0',
    paddingHorizontal: 20,
  },
  old: {
    color: '#B0B0B0',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Avenir_Medium',
  },
  new: {
    marginTop: responsiveHeight(2),
    color: '#B0B0B0',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Avenir_Medium',
  },
  iconSecurity: {},
});
