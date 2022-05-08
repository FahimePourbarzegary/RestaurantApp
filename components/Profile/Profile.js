import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Button from '../Button/Button.js';
import LinearGradient from 'react-native-linear-gradient';
//..  
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
//..
function Profile(props, {navigation}, route) {
  const [userData, setUserData] = useState('df');

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
  const UpdateUser = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/User/UpdateUser', state)
        .then(res => res.data)
        .then(data => {
          if (data[0].id == 999999998) {
            Alert.alert('username has already exist');
          } else if (data[0].id == 999999999) {
            Alert.alert('phoneNumber has already exist');
          } else {
            removeData();
            StoreData(data[0]);
            getData();
            props.navigation.navigate('MainMenu');
          }
        });
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
  const Submit = () => {
    ClickUpdate();
  };
  const ClickUpdate = () => {
    const state = {
      id: userData.id,
      username: userData.username,
      email: userData.email,
      phonenumber: userData.phonenumber,
      password: userData.password,
      image: userData.image,
      address: userData.address,
    };
    UpdateUser(state);
  };

  const OnSelect = data => {
    setUserData(Data => ({...Data, image: data}));
  };
  const EditText = (data, title) => {
    if (title === 'username') {
      setUserData(Data => ({...Data, username: data}));
    } else if (title === 'phonenumber') {
      setUserData(Data => ({...Data, phonenumber: data}));
    } else if (title === 'email') {
      setUserData(Data => ({...Data, email: data}));
    } else if (title === 'address') {
      setUserData(Data => ({...Data, address: data}));
    } else {
      console.log('error');
    }
  };

  const profile = [
    {
      id: '1',
      type: 'username',
      title: 'Name Surname',
      text: userData.username,
    },
    {
      id: '2',
      type: 'phonenumber',
      title: 'Phone',
      text: userData.phonenumber,
    },
    {
      id: '3',
      type: 'email',
      title: 'Email',
      text: userData.email,
    },
    {
      id: '4',
      type: 'address',
      title: 'Address',
      text: userData.address,
    },
  ];
  const renderProfiledetail = profile.map(detail => (
    <View style={styles.Container} key={detail.id}>
      <View>
        <Text style={styles.titleProfile}>{detail.title}</Text>
        <Text style={styles.textProfile}>{detail.text}</Text>
        <TouchableOpacity
          style={styles.inputIcon}
          onPress={() =>
            props.navigation.navigate('Edit', {
              type: detail.type,
              text: detail.text,
              title: detail.title,
              EditText: EditText,
            })
          }>
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
            source={{uri: 'data:image/jpeg;base64,' + userData.image}}
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
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{paddingBottom: responsiveHeight(10)}}>
              {renderProfiledetail}
            </View>
          </ScrollView>
          <View style={{position: 'absolute', bottom: 0}}>
            <Button
              Text="Save"
              nav={() => {
                Submit();
              }}
            />
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
    shadowColor: '#0009',
    elevation: 5,
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

export default Profile;
