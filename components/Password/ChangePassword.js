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
import LinearGradient from 'react-native-linear-gradient';
import Button from '../Button/Button.js';
export default function ChangePassword(props, {navigation}) {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reNewPassword, setReNewPassword] = useState('');
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
          <Text
            style={styles.old}>
            Enter Old Password
          </Text>
        </View>

        <View style={styles.textInputeContainer}>
          <TextInput
            style={styles.input}
            placeholder="Old Password"
            onChangeText={val => setOldPassword(val)}></TextInput>
        </View>
        <View style={{marginTop: responsiveHeight(2)}}></View>
        <View style={styles.text}>
          <Text
            style={styles.new}>
            Create New Password
          </Text>
        </View>
        <View style={styles.textInputeContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter New Password"
            onChangeText={val => setNewPassword(val)}></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Re Enter New Password"
            onChangeText={val => setReNewPassword(val)}></TextInput>
        </View>

        <Button Text="Save" nav={() => props.navigation.goBack()} />
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
    backgroundColor: '#FAFBFD',
    height: responsiveWidth(18),
    borderColor: '#DED7D7',
    borderWidth: 0.5,
    borderRadius: 60,
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color: '#B0B0B0',
    paddingHorizontal: 20,
  },
  old:{
     color: '#B0B0B0',
     fontSize: responsiveFontSize(1.8),
     fontFamily: 'Avenir_Medium',
  },
    new:{
    marginTop: responsiveHeight(2),
    color: '#B0B0B0',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Avenir_Medium',
    },
  iconSecurity: {},
});
