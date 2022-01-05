import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
/*component button for finally buy*/
export default function ItemShopButton(props) {
  return (
    <>
      <TouchableOpacity style={styles.Button}>
        <View style={styles.statue}></View>
        <View style={styles.iconContainer}>
          <Image
            style={styles.shoppingbag}
            source={require('../../assets/images/Other/shoppingBag.png')}
          />
        </View>
        <Text style={styles.text}>{props.Text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  Button: {
    width: responsiveWidth(40),
    height: responsiveHeight(10),
    backgroundColor: '#272727',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    marginTop: responsiveHeight(0),
    marginLeft: responsiveWidth(30),
    flexDirection: 'row',
    shadowColor: '#000008',
    elevation: 15,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    marginTop: responsiveHeight(3),
  },
  statue: {
    position: 'absolute',
    width: responsiveWidth(4.5),
    height: responsiveHeight(2.3),
    marginTop: responsiveHeight(2),
    left: responsiveWidth(13),
    backgroundColor: '#272727',
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
  },
  iconContainer: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    marginTop: responsiveHeight(1.8),
    marginRight: responsiveWidth(3),
    backgroundColor: '#FFDA80',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    zIndex: -1,
  },
  shoppingbag: {
    alignSelf: 'center',
  },
});
