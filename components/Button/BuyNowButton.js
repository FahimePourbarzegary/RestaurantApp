import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize, 
} from 'react-native-responsive-dimensions';
/* component button for buy*/
export default function BuyNowButton(props) {
  return ( 
    <>
      <TouchableOpacity style={styles.Button} onPress={props.nav}>
        <Text style={styles.text}>Buy Now</Text>
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
    width: responsiveWidth(50),
    height: responsiveHeight(10),
    backgroundColor: '#272727',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    marginTop: responsiveHeight(5),
    marginLeft: responsiveWidth(25),
    flexDirection: 'row',
    shadowColor: 'gray',
    elevation: 15,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    marginTop: responsiveHeight(3),
  },

  iconContainer: {
    width: responsiveWidth(12),
    height: responsiveHeight(6),
    marginTop: responsiveHeight(1.8),
    marginLeft: responsiveWidth(5),
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
