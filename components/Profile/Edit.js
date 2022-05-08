import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  LogBox,
  Alert, 
} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Button from '../Button/Button.js';
import LinearGradient from 'react-native-linear-gradient';
export default function Edit(props, navigation, route) {
  const {title, text, type} = props.route.params;
  const [TextEdit, setTextEdit] = useState(''); 
  const [nameValidError, setNameValidError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [phonenumberValidError, setPhonenumberValidError] = useState('');
  const submit = () => {
    props.route.params.EditText(TextEdit, type);
    props.navigation.goBack();
  };
   const CheckValidEmail=(val)=>{
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

if (val.length === 0) {
  setEmailValidError(false);
} else if (reg.test(val) === false) {
  setEmailValidError(false);
} else if (reg.test(val) === true) {
  setEmailValidError(true);
}
  }
  const CheckValidPhonenumber=(val)=>{
    if (typeof val !== "undefined") {
  var pattern = new RegExp(/^[0-9\b]+$/);
  if (!pattern.test(val)) {
    setPhonenumberValidError(false);
    
  }else{
    setPhonenumberValidError(true);
  }
  if(val.length != 11){
      setPhonenumberValidError(false);
  }
}else{
   setPhonenumberValidError(false);
} 
}
const ChecknameValid=(val)=>{
  if(val.length>15||val.length<3){
    setNameValidError(false);
  }else{
     setNameValidError(true);
  }
}
const keytype=()=>{
 if(type=='phonenumber'){
   return "phone-pad"
 }else if(type=="email"){
   return "email-address"
 }else{
   return null
 }
}
const Checktype=(val)=>{
    if(type=='phonenumber'){
   return CheckValidPhonenumber(val);
 }else if(type=="email"){
   return CheckValidEmail(val);
 }else if(type=="username"){
   return ChecknameValid(val);
 }else{
   return null
 }
}
const SubmitCheck=()=>{
  if(type=="email" && !emailValidError){
    Alert.alert("Your email is invalid");
  }else if(type=="phonenumber" && !phonenumberValidError){
     Alert.alert("Your phone number is invalid");
  }else if(type=="username" && !nameValidError){
     Alert.alert("Your username is invalid must in range 3-15");
  }else{
    submit();
  }
}
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
        <TouchableOpacity
          style={styles.close}
          onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon icon={faTimes} color="#353535" size={22} />
        </TouchableOpacity>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>{title}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.phoneText}>Enter Edit</Text>
        </View>
        <View style={styles.textInputeContainer}>
          <TextInput
            style={styles.input}
            placeholder={text}
            onChangeText={val => {setTextEdit(val);Checktype(val);}}
            keyboardType={keytype()}
             placeholderTextColor="gray"
            >
            
          </TextInput>
        </View>
        <Button
          Text="Edit"
          nav={() => {
            SubmitCheck();
          }}
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
    marginTop: responsiveHeight(1),
    width: responsiveWidth(85),
    backgroundColor: '#F0F0F0',
    height: responsiveWidth(18),
    paddingHorizontal: 25,
    borderRadius: 60,
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color: '#B0B0B0',
  },
  phoneText: {
    color: '#B0B0B0',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Avenir_Medium',
  },
  iconSecurity: {},
  close: {
    position: 'absolute',
    marginLeft: responsiveWidth(90),
    marginTop: responsiveHeight(4),
  }, 
});
