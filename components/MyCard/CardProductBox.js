import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {SwipeListView} from 'react-native-swipe-list-view';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons';
import axios from 'axios';
export default function CardProductBox(props, {navigation}) {
  const deleteCardbyid = async state => {
    try {
      const res = await axios
        .post('http://192.168.43.121/api/Card/deleteCard', state)
        .then(res => res.data)
        .then(data => {
          console.log(data);
          Alert.alert('Delete From your card');
        });
    } catch (e) {
      console.log(e);
    }
  };
  const Delete = idfood => {
    ClickDelete(idfood);
  };
  const ClickDelete = idfood => {
    const state = {
      id: idfood,
      user_id: props.userid,
    };
    deleteCardbyid(state);
  };

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };
  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...props.FoodData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setFoodData(newData);
  };
  const renderHiddenItem = (data, rowMap) => {
    console.log(data);
    return (
      <TouchableOpacity
        style={styles.trashContainer}
        onPress={() => {
          Delete(data.item.id);
          setTimeout(() => {
            props.FuncShow();
          }, 1000);
        }}>
        <View style={styles.trashLoc}>
          <Image
            source={require('../../assets/images/Other/trash.png')}
            style={{
              marginTop: responsiveHeight(1),
              width: responsiveWidth(4),
              height: responsiveHeight(4),
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.ContainerAlldata}>
      <SwipeListView
        data={props.FoodData}
        renderItem={renderCardProducts}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        rightOpenValue={-75}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const renderCardProducts = ({item}) => {
  return (
    <View style={styles.ContainerCategoryBox}>
      <View style={{flexDirection: 'row'}}>
        <View></View>

        <View style={styles.foodDetail}>
          <Text style={styles.nameStyleText}>
            {item.name}
            {item.condition == 'endbuy' ? (
              <FontAwesomeIcon icon={faCheckCircle} color="gray" size={22} />
            ) : null}
          </Text>
          <Text style={styles.compositionsStyleText}>{item.compositions}</Text>

          <Text style={styles.priceStyleText}>${item.price}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.quantity}>
            <Text style={styles.numquantity}>{item.number}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerCategoryBox: {
    width: responsiveWidth(85),
    height: responsiveHeight(15),
    marginBottom: responsiveHeight(4),
    backgroundColor: '#FAFBFD',
    borderRadius: 10,
    shadowColor: '#0009',
    elevation: 10,
  },

  imageContainer: {
    marginLeft: responsiveWidth(2),
    marginTop: responsiveHeight(2),
    width: responsiveWidth(20),
    height: responsiveWidth(20),
    borderRadius: 200 / 2,
    backgroundColor: 'red',
  },
  foodDetail: {
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(3),
  },
  quantityContainer: {
    position: 'absolute',
    flexDirection: 'row',
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(60),
  },
  quantity: {
    backgroundColor: '#F4F4F4',
    width: responsiveWidth(20),
    height: responsiveHeight(10),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 55,
    borderWidth: 2,
    borderColor: 'white',
  },
  numquantity: {
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(4),
    color: 'black',
  },
  plus: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(3),
    color: '#A3A3A3',
    alignSelf: 'center',
  },
  minus: {
    fontFamily: 'Gilroy-Light',
    fontSize: responsiveFontSize(3),
    color: '#A3A3A3',
  },
  plusContainer: {
    position: 'absolute',
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(14),
    marginTop: responsiveHeight(1),
    borderRadius: 50,
    justifyContent: 'center',
    shadowColor: '#0009',
    elevation: 4, 
  },
  minusContainer: {
    position: 'absolute',
    backgroundColor: '#FAFBFD',
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    shadowColor: '#0009',
    elevation: 4,
  },
  trashContainer: {
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(70),
  },
  trashLoc: {
    width: responsiveWidth(11),
    height: responsiveHeight(6),
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    shadowColor: 'gray',
    elevation: 5,
  },
  ContainerAlldata: {
    width: responsiveWidth(85),
    height: responsiveHeight(55),
    marginLeft: responsiveWidth(8),
    marginTop: responsiveHeight(3),
  },
  nameStyleText: {
    fontFamily: 'Gilroy-Regular',
    color: '#272727',
    fontSize: responsiveFontSize(2.2),
  },
  compositionsStyleText: {
    fontFamily: 'Gilroy-Medium',
    color: '#9C9C9C',
    fontSize: responsiveFontSize(1.5),
  },
  priceStyleText: {
    fontFamily: 'Gilroy-Medium',
    color: '#313131',
    fontSize: responsiveFontSize(2.5),
    marginTop: responsiveHeight(1),
    marginRight: responsiveWidth(3),
  },
  iconStyleWrong: {
    position: 'absolute',
  },
});
