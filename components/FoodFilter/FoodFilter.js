import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
export default function FoodFilter() {
  const [filterMenue, setfilterMenue] = useState([
    {
      title: 'Food',
      imageWhite: require('../../assets/images/FoodFilter/FoodWhite.png'),
      imageBlack: require('../../assets/images/FoodFilter/FoodBlack.png'),
    },
    {
      title: 'Drink',
      imageWhite: require('../../assets/images/FoodFilter/DrinkWhite.png'),
      imageBlack: require('../../assets/images/FoodFilter/DrinkBlack.png'),
    },
    {
      title: 'Pasta',
      imageWhite: require('../../assets/images/FoodFilter/PastaWhite.png'),
      imageBlack: require('../../assets/images/FoodFilter/PastaBlack.png'),
    },
  ]);

  const [SelectMenu, setSelectMenu] = useState(0);
  const renderFilter = filterMenue.map((item, index) => (
    <TouchableOpacity
      key={index}
      style={
        index == SelectMenu
          ? styles.containerFilterHeadS
          : styles.containerFilterHead
      }
      onPress={() => setSelectMenu(SelectMenu => index)}>
      <Image
        source={index === SelectMenu ? item.imageWhite : item.imageBlack}
      />
      <Text
        style={index == SelectMenu ? styles.textFilterS : styles.textFilter}>
        {item.title}
      </Text>
    </TouchableOpacity>
  ));


  return (
    <SafeAreaView style={styles.filterfood}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={styles.clear}>
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
        <Text style={styles.TitelPageFood}>Food </Text>
        <Text style={styles.TitelPage}>Filter </Text>
      </View>
      <View style={styles.containerAllData}>
        <ScrollView horizontal>{renderFilter}</ScrollView>
      </View>
      <ScrollView style={{marginBottom: 40}}>
       
        <Text style={styles.titleOfFilter}>Price</Text>
        <View style={styles.containerAllDataLocation}>
          <View style={{diplay: 'flex', flexWrap: 'wrap'}}>
            <TouchableOpacity style={styles.minPrice}>
              <Text style={styles.textMM}>Min</Text>
              <Text style={styles.textPrice}>$ 7,99</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.maxPrice}>
              <Text style={styles.textMM}>Man</Text>
              <Text style={styles.textPrice}>$ 7,99</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.Button}>
        <View>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Gilroy-Medium',
              fontSize: responsiveFontSize(2.5),
            }}>
            Apply
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  filterfood: {
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
    flexDirection: 'row',
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
  containerAllData: {
    marginLeft: responsiveWidth(6),
    width: responsiveWidth(90),
    height: responsiveHeight(18),
  },
  containerFilterHead: {
    marginTop: responsiveHeight(3),
    width: responsiveWidth(25),
    height: responsiveHeight(13),
    marginRight: responsiveWidth(5),
    backgroundColor: '#FAFBFD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  containerFilterHeadS: {
    marginTop: responsiveHeight(3),
    width: responsiveWidth(25),
    height: responsiveHeight(13),
    marginRight: responsiveWidth(5),
    backgroundColor: '#272727',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textFilterS: {
    paddingTop: responsiveHeight(1),
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(2),
    color: 'white',
  },
  textFilter: {
    paddingTop: responsiveHeight(1),
    fontFamily: 'Gilroy-Regular',
    fontSize: responsiveFontSize(2),
    color: '#9C9C9C',
  },
  titleOfFilter: {
    marginLeft: responsiveWidth(6),
    paddingTop: responsiveHeight(2),
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3),
    color: '#2F2F2F',
  },
  containerAllDataLocation: {
    diplay: 'flex',
    flexWrap: 'wrap',
    width: responsiveWidth(90),
    height: responsiveHeight(20),
    marginLeft: responsiveWidth(6),
  },
  containerFilterLocationS: {
    padding: responsiveWidth(2),
    paddingRight: responsiveWidth(4),
    paddingLeft: responsiveWidth(4),
    backgroundColor: '#FFDA80',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    borderWidth: 2,
    borderColor: 'white',
  },
  textFilterS: {
    fontFamily: 'Gilroy-Medium',
    color: 'white',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
  },
  containerFilterLocation: {
    padding: responsiveWidth(2),
    paddingRight: responsiveWidth(4),
    paddingLeft: responsiveWidth(4),
    backgroundColor: '#FAFBFD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: responsiveWidth(2),
    marginTop: responsiveHeight(1),
    borderWidth: 2,
    borderColor: 'white',
  },
  textFilter: {
    fontFamily: 'Gilroy-Medium',
    color: '#9B9B9B',
    fontSize: responsiveFontSize(2),
    marginTop: responsiveHeight(1),
  },
  textFilterL: {
    fontFamily: 'Gilroy-Medium',
    color: '#9B9B9B',
    fontSize: responsiveFontSize(1.5),
  },
  textFilterLS: {
    fontFamily: 'Gilroy-Medium',
    color: 'black',
    fontSize: responsiveFontSize(1.5),
  },
  minPrice: {
    marginTop: responsiveHeight(3),

    width: responsiveWidth(40),
    height: responsiveHeight(8),
    backgroundColor: '#FAFBFD',
    borderRadius: 40,
    flexDirection: 'row',

    alignItems: 'center',
  },
  maxPrice: {
    marginTop: responsiveHeight(3),
    marginLeft: responsiveWidth(4),
    width: responsiveWidth(40),
    height: responsiveHeight(8),
    backgroundColor: '#FAFBFD',
    borderRadius: 40,
    flexDirection: 'row',

    alignItems: 'center',
  },
  textMM: {
    fontFamily: 'Gilroy-Medium',
    color: '#9B9B9B',
    fontSize: responsiveFontSize(3),
    marginLeft: responsiveWidth(4),
  },
  textPrice: {
    fontFamily: 'Gilroy-Medium',
    color: '#373737',
    fontSize: responsiveFontSize(3),
    marginLeft: responsiveWidth(4),
  },
  Button: {
    position: 'absolute',
    bottom: 30,
    right: 0,
    left: 0,
    width: responsiveWidth(75),
    height: responsiveHeight(10),
    marginLeft: responsiveWidth(10),
    backgroundColor: '#272727',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    shadowColor: 'gray',
    elevation: 6,
  },
});
