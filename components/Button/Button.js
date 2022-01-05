import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
/*button component for setting in sevral screen*/
export default function Button(props) {
  return (
    <View>
      <TouchableOpacity style={styles.Button} onPress={props.nav}>
        <Text
          style={styles.text}>
          {props.Text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  Button: {
    width: responsiveWidth(85),
    height: responsiveHeight(10),
    backgroundColor: '#272727',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(8),
    shadowColor: 'gray',
    elevation: 15,
  },
  text:{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Gilroy-Medium',
            fontSize: responsiveFontSize(2.5),
          },
});
