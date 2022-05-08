import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
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
//Redux
import axios from 'axios';
import putuser from './../../Action/put_user';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//..

function SignUp(props, {navigation}) {
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ImageUri, setImageUri] = useState(null);
  const [nameValidError, setNameValidError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [phonenumberValidError, setPhonenumberValidError] = useState('');
  const [PassValidError, setPassValidError] = useState('');
  //const [Blob, setBlob] = useState(null);
  const OnSelect = data => {
    setImageUri(data);
    // setBlob(btob);
  };
  useEffect(() => {}, []);
  const InsertUser = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/User/insertUser', state)
        .then(res => res.data)
        .then(data => {
          console.log(data); 
          if (data == 1) {
            Alert.alert('username has already exist');
          } else if (data == 2) {
            Alert.alert('phoneNumber has already exist');
          } else {
            props.navigation.navigate('Login');
          }
        });
    } catch (e) {
      Alert.alert("Check Your input again somthing Wrong or check your internet connection");
      console.log(e);
    }
  };
  const Submit = () => {
    Clickinsert();
  };
  const Clickinsert = () => {
    const state = {
      username: userName,
      email: email,
      phonenumber: phoneNumber,
      password: password,
      image: ImageUri,
      address: 'Edit your Address',
    };

    InsertUser(state);
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
} }
const CheckPass=(val)=>{
  if(val.length>8 || val.length<5){
    setPassValidError(false);
  }else{
      setPassValidError(true);
  }
}
const ChecknameValid=(val)=>{
  if(val.length>15||val.length<3){
    setNameValidError(false);
  }else{
     setNameValidError(true);
  }
}
const SignUptoapp=()=>{
  if(!nameValidError){
    Alert.alert("Your username is invalid must in range 3-15");
  }else if(!phonenumberValidError){
    Alert.alert("Your phone number is invalid");
  }else if(!PassValidError){
     Alert.alert("Your Password must in range 5-8");
  }else if(!emailValidError){
     Alert.alert("Your email is invalid");
  }else{
    Submit();
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
        <TouchableOpacity
          style={styles.close}
          onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon icon={faTimes} color="#353535" size={22} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: 'data:image/jpeg;base64,' + ImageUri}}
            style={styles.inputImage}
          />
          <TouchableOpacity
            style={styles.inputImageIcon}
            onPress={() =>
              props.navigation.navigate('ImagePicker', {OnSelect: OnSelect})
            }>
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
            onChangeText={val => {setUserName(val);ChecknameValid(val);}}
            placeholderTextColor="gray"
            autoCapitalize='none'></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={val => {setEmail(val);CheckValidEmail(val);}}
            placeholderTextColor="gray"
             textContentType="emailAddress"
             keyboardType="email-address"></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            onChangeText={val => {setPhoneNumber(val);CheckValidPhonenumber(val);}}
            placeholderTextColor="gray"
            keyboardType="phone-pad"
            ></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={val => {setPassword(val);CheckPass(val)}}
            placeholderTextColor="gray"></TextInput>
        </View>
        <Button Text="SignUp to app" nav={() => {SignUptoapp();}} />
        <View style={{flexDirection: 'row'}}></View>
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
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: responsiveWidth(11),
    height: responsiveWidth(11),
    borderRadius: 100 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-3),
    marginLeft: responsiveWidth(60),
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
    backgroundColor: '#F0F0F0',
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
  close: {
    position: 'absolute',
    marginLeft: responsiveWidth(90),
    marginTop: responsiveHeight(4),
  },
});
const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      Putuser: putuser,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
