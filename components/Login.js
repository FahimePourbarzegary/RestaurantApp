import React from 'react'
import { View, Text,StyleSheet,Image ,TouchableOpacity,TextInput } from 'react-native'
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Shadow} from 'react-native-shadow-2';
export default function Login() {
    return (
         <View>
    <View >
      <Image
        style={styles.loginBg}
        source={require('.././assets/images/onboarding/DifDish/difDishBg.jpg')}
      />
    </View>
    <View style={styles.bgWhite}>
      <View style={styles.icon}>
        <FontAwesomeIcon icon={faSignInAlt} size={25} />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.Text}>
          Login
        </Text>
      </View>
      <View style={styles.textInputeContainer}>
      <TextInput style={styles.input} placeholder="Username"></TextInput>
      <TextInput style={styles.input} placeholder="Password"></TextInput>
      </View>  
  
      <TouchableOpacity style={styles.Button}><Text style={{color:'white',textAlign:'center',fontFamily: 'Gilroy-Medium',fontSize: responsiveFontSize(2.5)}}>Login to app</Text></TouchableOpacity>
      <View style={{flexDirection:'row'}}><Text style={styles.Signup}>I don`t have account.</Text><TouchableOpacity><Text style={styles.Sign}>Sign</Text></TouchableOpacity></View>
       <Text style={styles.difaccount}>You can access with</Text>
       <View style={{flexDirection:'row'}}>
       <TouchableOpacity style={styles.facebook}><Text style={{color:'white',textAlign:'center',fontFamily: 'Avenir Heavy',fontSize: responsiveFontSize(2.5)}}>Facebook</Text></TouchableOpacity>
       <TouchableOpacity style={styles.google}><Text style={{color:'white',textAlign:'center',fontFamily: 'Avenir Heavy',fontSize: responsiveFontSize(2.5)}}>Google</Text></TouchableOpacity>
       </View>
    </View> 
  </View>
    )
} 
const styles = StyleSheet.create({
   loginBg: {
    width: responsiveWidth(100),
    height: responsiveWidth(60),
  },
  bgWhite: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: '#FAFAFA',
    marginTop: responsiveHeight(-13),
    borderRadius: 25, 
  },
  icon: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(16),
    height: responsiveWidth(16),
    borderRadius: 100 / 2,
    borderWidth: 3,
    borderColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(-4),
    marginLeft:responsiveWidth(42),
  },
  TextContainer: {
    width: responsiveWidth(20),
    marginTop: responsiveHeight(4),
    height: responsiveHeight(5),
    marginLeft:responsiveWidth(8),
   
  },
  Text: {
    color: '#272727',
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(3.2),
  },
  container:{
    width:responsiveWidth(95),
    height:responsiveHeight(100),
    backgroundColor:'white',
    borderRadius:30,
    marginTop:responsiveHeight(2),
    borderColor:'#F3F3F3',
    borderWidth:3,
  },
    Button:{
    width:responsiveWidth(85),
    height:responsiveHeight(10),
    backgroundColor:'#272727',
    borderRadius:50,
    textAlign:'center',
    justifyContent:'center',
    color:'white',
    borderColor:'white',
    borderWidth:2,
    marginTop:responsiveHeight(3),
     marginLeft:responsiveWidth(8),
    
  },
  textInputeContainer:{
    marginLeft:responsiveWidth(8),
  },
  input:{
    marginTop:responsiveHeight(3),
    width:responsiveWidth(85),
    backgroundColor:'#FAFBFD',
    height:responsiveWidth(18),
    borderColor:'DED7D7',
    borderWidth:0.5,
    borderRadius:60,
    fontFamily: 'Gilroy-Medium',
    fontSize: responsiveFontSize(2.5),
    color:'#B0B0B0'
    
  },
Signup:{
  marginTop:responsiveHeight(2),
  marginLeft:responsiveWidth(10),
  color: '#B0B0B0',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
    
},
Sign:{
  marginTop:responsiveHeight(2),
  
  color: '#2F2F2F',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
},
difaccount:{
  marginTop:responsiveHeight(6),
  marginLeft:responsiveWidth(10),
  color: '#B0B0B0',
    fontFamily: 'Avenir Medium',
    fontSize: responsiveFontSize(2),
    
},
facebook:{
    width:responsiveWidth(43),
    height:responsiveHeight(10),
    backgroundColor:'#5C75FB',
    borderRadius:50,
    textAlign:'center',
    justifyContent:'center',
    color:'white',
    borderColor:'white',
    borderWidth:2,
    marginTop:responsiveHeight(1),
     marginLeft:responsiveWidth(8),
    
  },
  google:{
    width:responsiveWidth(45),
    height:responsiveHeight(10),
    backgroundColor:'#FF4E3F',
    borderRadius:50,
    textAlign:'center',
    justifyContent:'center',
    color:'white',
    borderColor:'white',
    borderWidth:2,
    marginTop:responsiveHeight(1),
     marginLeft:responsiveWidth(0.2),
    
  },

})
