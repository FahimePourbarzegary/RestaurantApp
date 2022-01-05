import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function CoInfoAddress() {
  /*componentInfoBox*/
  return (
    <View style={styles.boxinformation}>
      <TouchableOpacity style={styles.edit}>
        <Image
          source={require('../../assets/images/Other/pencil.png')}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
      <Text style={styles.infotitle}>Your informations</Text>
      <View
        style={styles.containerImageLocation}>
        <View style={styles.locationContainer}>
          <Image
            source={require('../../assets/images/Other/location.png')}
            style={{alignSelf: 'center'}}
          />
        </View>
        <View>
          <Text
            style={styles.boxAddress}>
            Your Delivery Address
          </Text>
          <Text
            style={styles.boxAddressText}>
            241 Hillside Road, HASTINGS
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  boxinformation: {
    width: responsiveWidth(90),
    height: responsiveWidth(40),
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(10),
    marginLeft: responsiveWidth(6),
    borderRadius: 10,
    backgroundColor: '#FAFBFD',
  },
  edit: {
    position: 'absolute',
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: 100 / 2,
    backgroundColor: '#FAFBFD',
    marginTop: responsiveHeight(-2),
    marginLeft: responsiveHeight(35),
    justifyContent: 'center',
    shadowColor: 'gray',
    elevation: 15,
  },
  locationContainer: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: 100 / 2,
    backgroundColor: '#FFDA80',
    justifyContent: 'center',
    marginRight: responsiveWidth(5),
    marginTop: responsiveHeight(0.5),
  },
  infotitle: {
    fontFamily: 'Gilroy-Bold',
    fontSize: responsiveFontSize(2.5),
    color: '#2F2F2F',
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(3),
  },
  containerImageLocation:{
  flexDirection: 'row',
  marginTop: responsiveHeight(2),
  marginLeft: responsiveWidth(3),
  },
  boxAddress:{
  color: '#9C9C9C',
  fontFamily: 'Gilroy-Medium',
  fontSize: responsiveFontSize(1.5),
  },
  boxAddressText:{
  color: '#272727',
  fontFamily: 'Gilroy-Medium',
  fontSize: responsiveFontSize(2),
  marginTop: responsiveHeight(1),
 },
});
