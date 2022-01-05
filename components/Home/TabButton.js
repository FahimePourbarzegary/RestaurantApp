import React, {useState} from 'react';
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

export default function TabButton() {
  const [extraTop, setExtraTop] = useState([
    {
      id: 1,
      name: 'Papper',
      selection: true,
    },
    {
      id: 2,
      name: 'Tomato',
      selection: false,
    },
    {
      id: 3,
      name: 'Potato Makrana',
      selection: false,
    },
  ]);
  const [selection, setselection] = useState(1);
  const renderTabButton = extraTop.map(item => (
    <TouchableOpacity
      key={item.id}
      onPress={() => setselection(selection => item.id)}
      style={
        item.id == selection
          ? styles.nameContainerTrue
          : styles.nameContainerFalse
      }>
      <Text style={item.id == selection ? styles.nameTrue : styles.nameFalse}>
        {item.name}
      </Text>
    </TouchableOpacity>
  ));
  return (
    <View
      style={{marginLeft: responsiveWidth(5), marginTop: responsiveWidth(2)}}>
      <Text style={styles.title}>Add Extra`as Topping</Text>
      <ScrollView horizontal={true}>{renderTabButton}</ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontFamily: 'Gilroy-Medium',
    color: '#2F2F2F',
    fontSize: responsiveFontSize(2.5),
  },
  nameContainerTrue: {
    padding: responsiveWidth(3),
    paddingRight: responsiveWidth(8),
    paddingLeft: responsiveWidth(8),
    backgroundColor: '#FFDA80',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    borderWidth: 2,
    borderColor: 'white',
  },
  nameContainerFalse: {
    padding: responsiveWidth(3),
    paddingRight: responsiveWidth(8),
    paddingLeft: responsiveWidth(8),
    backgroundColor: '#FAFBFD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    borderWidth: 2,
    borderColor: 'white',
  },
  nameTrue: {
    fontFamily: 'Gilroy-Medium',
    color: '#272727',
    fontSize: responsiveFontSize(2),
  },
  nameFalse: {
    fontFamily: 'Gilroy-Medium',
    color: '#9B9B9B',
    fontSize: responsiveFontSize(2),
  },
});
