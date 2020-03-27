import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePage from './src/pages/Home';
import BarcodePage from './src/pages/Barcode';
import ProductDetailPage from './src/pages/product/Detail';

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

function MainScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={HomePage} options={{ title: '홈' }} />
      <MainStack.Screen name="ProductDetail" component={ProductDetailPage} options={{ title: '상품정보' }} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <RootStack.Navigator mode="modal">
        {/* 메인 라우터 */}
        <RootStack.Screen name="Main" component={MainScreen} options={{ title: '홈', headerShown: false }} />    
        {/* 바코드 스캔 모달 */}
        <RootStack.Screen name="Barcode" component={BarcodePage} options={{ title: '스캔' }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
