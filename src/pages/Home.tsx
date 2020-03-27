import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { RNCamera, Barcode } from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 180,
        width: '100%'
      }}>
        <Text style={{ fontSize: 24 }}>업체명</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Barcode')}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 24,
            marginBottom: 12,
          }}>
            <Icon name="barcode-scan" size={160}></Icon>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>바코드 스캔으로 상품 찾기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
