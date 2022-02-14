import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import CardProductBox from './CardProductBox.js';
import BuyNowButton from '../Button/BuyNowButton.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function MyCard(props, {navigation}) {
  const [userData, setUserData] = useState('');
  const [FoodData, setFoodData] = useState('');
  const [Number, setNumber] = useState(false);

  const {id} = props.route.params;
  useEffect(() => {
    Show();
  }, [props.navigation]);
  const showCardbyid = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/Card/showCardbyid', state)
        .then(res => res.data)
        .then(data => {
          setFoodData(data);
        });
    } catch (e) {
      console.log(e);
    }
  };
  const Show = () => {
    ClickShow();
  };
  const ClickShow = () => {
    const state = {
      user_id: id,
    };
    showCardbyid(state);
  };
  const deleteCard = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/Card/deleteAll', state)
        .then(res => res.data)
        .then(data => {
          setFoodData(null);
          Alert.alert('Delete All Food From Your Card');
        });
    } catch (e) {
      console.log(e);
    }
  };
  const DeleteAll = () => {
    ClickDeleteAll();
  };
  const ClickDeleteAll = () => {
    const state = {
      user_id: id,
    };
    deleteCard(state);
  };
  const UpdateCard = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/Card/UpdateCard', state)
        .then(res => res.data)
        .then(data => {
          console.log(data);
          Alert.alert('Update All Food From Your Card');
        });
    } catch (e) {
      console.log(e);
    }
  };
  const Update = () => {
    ClickUpdateCard();
  };
  const ClickUpdateCard = () => {
    const state = {
      user_id: id,
    };
    UpdateCard(state);
  };
  const ShowCard = () => {
    return (
      <CardProductBox FoodData={FoodData} userid={id} FuncShow={() => Show()} />
    );
  };

  return (
    <SafeAreaView style={styles.mycard}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.clear}
          onPress={() => {
            DeleteAll();
          }}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.close}
          onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon
            icon={faTimes}
            size={22}
            style={{alignSelf: 'center'}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.groupTitelPage}>
        <Text style={styles.TitelPageFood}>My </Text>
        <Text style={styles.TitelPage}>Card </Text>
      </View>

      {ShowCard()}

      <View style={{flexDirection: 'row'}}>
        <BuyNowButton
          nav={() => {
            Update();
            setTimeout(() => {
              Show();
            }, 1000);
          }}
        />
        <View style={styles.priceContainer}></View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mycard: {
    flex: 1,
    backgroundColor: 'white',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
  },
  clear: {
    marginLeft: responsiveWidth(7),
    marginTop: responsiveHeight(4),
  },
  clearText: {
    color: '#9C9C9C',
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(2),
  },
  close: {
    marginLeft: responsiveWidth(65),
    marginTop: responsiveHeight(4),
    justifyContent: 'center',
    alingItem: 'center',
  },
  groupTitelPage: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(5),
  },
  TitelPage: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(4),
    color: '#2F2F2F',
  },
  TitelPageFood: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(4),
    color: '#2F2F2F',
  },
  priceContainer: {
    position: 'absolute',
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(8),
  },
  tprice: {
    color: '#9C9C9C',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2),
    marginBottom: responsiveHeight(1),
  },
  price: {
    color: '#2F2F2F',
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(4),
  }, 
});
