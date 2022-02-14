import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Button from '../Button/Button.js';
import LinearGradient from 'react-native-linear-gradient';
export default function Edit(props, navigation, route) {
  const {title, text, type} = props.route.params;
  const [TextEdit, setTextEdit] = useState('');
  const submit = () => {
    props.route.params.EditText(TextEdit, type);
    props.navigation.goBack();
  };
  return (
    <View>
      <View>
        <Image
          style={styles.Bg}
          source={require('../.././assets/images/onboarding/DifDish/difDishBg.jpg')}
        />
      </View>
      <LinearGradient
        colors={[
          'rgba(247, 247, 247,10) 100% ',
          'rgba(255, 255, 255, 20) 110.25%',
          ' rgba(255, 255, 255, 30) 116.03%',
        ]}
        style={styles.bgWhite}>
        <View style={styles.icon}>
          <Image source={require('../.././assets/images/Other/security.png')} />
        </View>
        <TouchableOpacity
          style={styles.close}
          onPress={() => props.navigation.goBack()}>
          <FontAwesomeIcon icon={faTimes} color="#353535" size={22} />
        </TouchableOpacity>
        <View style={styles.TextContainer}>
          <Text style={styles.Text}>{title}</Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.phoneText}>Enter Edit</Text>
        </View>
        <View style={styles.textInputeContainer}>
          <TextInput
            style={styles.input}
            placeholder="Edit"
            onChangeText={val => setTextEdit(val)}>
            {text}
          </TextInput>
        </View>
        <Button
          Text="Edit"
          nav={() => {
            submit();
          }}
        />
      </LinearGradient>
    </View>
  );
}
const styles = StyleSheet.create({
  Bg: {
    width: responsiveWidth(100),
    height: responsiveWidth(60),
  },
  bgWhite: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    marginTop: responsiveHeight(-13),
    borderRadius: 25,
  },
  icon: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: 100 / 1.8,
    borderWidth: 3,
    borderColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-4),
    marginLeft: responsiveWidth(42),
  },
  TextContainer: {
    width: responsiveWidth(80),
    marginTop: responsiveHeight(3),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(8),
  },
  Text: {
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3.2),
  },
  text: {
    width: responsiveWidth(80),
    marginTop: responsiveHeight(1),
    height: responsiveHeight(5),
    marginLeft: responsiveWidth(8),
  },
  container: {
    width: responsiveWidth(95),
    height: responsiveHeight(100),
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: responsiveHeight(2),
    borderColor: '#F3F3F3',
    borderWidth: 3,
  },
  textInputeContainer: {
    marginLeft: responsiveWidth(8),
  },
  input: {
    marginTop: responsiveHeight(1),
    width: responsiveWidth(85),
    backgroundColor: '#FAFBFD',
    height: responsiveWidth(18),
    paddingHorizontal: 25,
    borderRadius: 60,
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color: '#B0B0B0',
  },
  phoneText: {
    color: '#B0B0B0',
    fontSize: responsiveFontSize(1.8),
    fontFamily: 'Avenir_Medium',
  },
  iconSecurity: {},
  close: {
    position: 'absolute',
    marginLeft: responsiveWidth(90),
    marginTop: responsiveHeight(4),
  }, 
});
