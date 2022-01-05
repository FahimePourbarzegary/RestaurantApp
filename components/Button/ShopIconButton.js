import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
/*button component for add food to list*/
export default function ShopIconButton() {
  return (
    <>
      <TouchableOpacity style={styles.Button}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.shoppingbag}
            source={require('../../assets/images/Other/shoppingBag.png')}
          />
        </View>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  Button: {
    position: 'absolute',
    bottom: 20,
    width: responsiveWidth(25),
    height: responsiveHeight(10),

    backgroundColor: '#272727',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    marginLeft: responsiveWidth(70),
    flexDirection: 'row',
    shadowColor: 'gray',
    elevation: 15,
  },

  iconContainer: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    backgroundColor: '#FFDA80',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: -1,
  },
  shoppingbag: {
    alignSelf: 'center',
  },
});
