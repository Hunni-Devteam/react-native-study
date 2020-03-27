import React, { Component } from 'react';
import { View, Alert, Text, TouchableHighlightComponent } from 'react-native';
import { RNCamera, Barcode } from 'react-native-camera';
import { useNavigation, StackActions, NavigationContainer } from '@react-navigation/native';

export default function BarcodePage() {
  const navigation = useNavigation();
  let barcodeDetected : boolean = false;

  const onBarcodeDetected = ({ barcodes } : { barcodes: Barcode[] }) => {
    if (barcodes.length === 0 || barcodeDetected) return;
    barcodeDetected = true;
    Alert.alert(barcodes[0].data);
    // navigation.dispatch(StackActions.replace('ProductDetail'));
    navigation.dispatch(StackActions.pop());
    navigation.navigate('ProductDetail');
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1}}
        onGoogleVisionBarcodesDetected={onBarcodeDetected}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100%', height: '100%' }}>
        <View style={{ borderWidth: 4, borderColor: '#fff', width: 240, height: 160, marginTop: -48 }}></View>
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, marginTop: 16 }}>바코드를 화면 중앙에 위치하도록 조정해주세요</Text>
      </View>
    </View>
  );
};
