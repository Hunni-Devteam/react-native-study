import React, { Component } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

export default function BarcodePage() {
  const navigation = useNavigation();
  let barcodeDetected : boolean = false;

  const login = () => {
    navigation.navigate('Main');
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Press me" color="#f194ff" onPress={login} />
    </SafeAreaView>
  );
};
