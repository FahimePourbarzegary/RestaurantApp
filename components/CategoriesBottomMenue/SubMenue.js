import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
export default function SubMenue() {
  return (
    <View style={styles.submenue}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          marginLeft: responsiveWidth(6),
          marginRight: responsiveWidth(5),
        }}>
        <Image
          style={styles.imageStyleall}
          source={require('../../assets/images/Other/home.png')}
        />
        <Text
          style={styles.textHome}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.imageStyleSp}
          source={require('../../assets/images/Other/search.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.imageStyleSp}
          source={require('../../assets/images/Other/notification.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.imageStyleSp}
          source={require('../../assets/images/Other/star.png')}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  submenue: {
    width: responsiveWidth(85),
    height: responsiveHeight(10),
    marginLeft: responsiveWidth(8),
    marginTop: responsiveHeight(2),
    backgroundColor: '#FAFBFD',
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyleall: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
  },
  imageStyleSp: {
    marginRight: responsiveWidth(7),
    width: responsiveWidth(5),
    height: responsiveHeight(2.5),
  },
  imageContainer: {
    position: 'absolute',
    right: 0,
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    borderRadius: 200 / 2,
    backgroundColor: 'yellow',
    marginRight: responsiveWidth(3),
    shadowColor: '#000009',
    elevation: 5,
  },
  textHome:{
  marginLeft: responsiveWidth(2),
  fontFamily: 'Avenir_Medium',
  color: '#AFAEBF',
  fontSize: responsiveFontSize(2),
  },
});
