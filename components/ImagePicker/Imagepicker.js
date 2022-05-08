import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import Button from '../Button/Button.js';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import { Buffer } from "buffer";
//import base64 from 'react-native-base64'
export default function Imagepicker(props, {navigation}, route) {
  const {nav} = props.route.params;
  const [ImageUri, setImageUri] = useState('');
  const [btob, setbtob] = useState(''); 
  const goBack = () => {
    props.navigation.goBack();
    props.route.params.OnSelect(ImageUri);
  };
  return (
    <SafeAreaView style={styles.ImagePickerContainer}>
      <View>
        <Button
          Text="Open Camera"
          nav={() => {
            const options = {
              storageOption: {
                path: 'images',
                mediaType: 'photo',
                maxWidth: 100,
                maxHeight: 100,
                quality: 0,
              },
              includeBase64: true,
            };
            launchCamera(options, res => {
              if (res.didCancel) {
                console.log('user Canseled image picker');
              } else if (res.error) {
                console.log('Image Picker error', res.error);
              } else if (res.customButton) {
                console.log('User Tapped custom button', res.customButton);
              } else {
                const source = res.assets[0].base64;
                //Just for convert base64 to blob but save convert failed
                //const buffer = Buffer.from(source, "base64");
                //const blob = new Blob([buffer], { type: 'image/jpeg' }); 
                //const blob = base64.decode(source);
                setImageUri(source);
                //setbtob(blob);
              }
            });
          }}
        />
        <Button
          Text="Open Gallery"
          nav={() => {
            const options = {
              storageOption: {
                path: 'images',
                mediaType: 'photo',
              },
              includeBase64: true,
            };
            launchImageLibrary(options, res => {
              console.log('Response =', res);
              if (res.didCancel) {
                console.log('user Canseled image picker');
              } else if (res.error) {
                console.log('Image Picker error', res.error);
              } else if (res.customButton) {
                console.log('User Tapped custom button', res.customButton);
              } else {
                const source = res.assets[0].base64;
                setImageUri(source);
              }
            });
          }}
        />

        <Button Text="Save" nav={() => goBack()} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  ImagePickerContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    justifyContent: 'center',
  },
  inputImage: {
    backgroundColor: '#E8E8E8',
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: 200 / 2,
    borderWidth: 6,
    borderColor: '#FFFF',
    marginTop: responsiveHeight(-8),
    marginLeft: responsiveWidth(35),
  },
});
 