import React, { Component } from 'react';
import { SafeAreaView, ScrollView, View, Text, FlatList, StyleSheet, TextComponent } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BarcodePage() {
  // const navigation = useNavigation();


  const style : StyleSheet.NamedStyles<any> = StyleSheet.create({
    listHeader: { borderBottomWidth: 1, borderBottomColor: '#e9e9e9' },
    listHeaderText: { fontWeight: 'bold', fontSize: 16, lineHeight: 40, paddingLeft: 16 },
    listItem: { flex: 1, flexDirection: 'row', backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#e9e9e9' },
    listItemHeader: { width: 100, paddingLeft: 16, paddingTop: 8, paddingBottom: 8 },
    listItemHeaderText: { fontWeight: 'bold', fontSize: 14, lineHeight: 24 },
    listItemContent: { flex: 1, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8 },
    listItemContentText: { fontSize: 13, lineHeight: 24 },
    optionItem: { margin: 16, padding: 16, backgroundColor: '#fff' },
    optionItemHeader: { flex: 1, flexDirection: 'row', paddingBottom: 8, borderBottomWidth: 1, borderBottomColor: '#e9e9e9' },
    optionSoldoutTag: { backgroundColor: '#666', borderRadius: 4, padding: 4 },
    optionSoldoutTagText: { color: '#fff' },
    optionNameText: { fontSize: 14, fontWeight: 'bold', padding: 4 },
    optionItemContent: { paddingTop: 8 },
    optionItemContentText: {},
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        {/* 상품정보 */}
        <View style={style.listHeader}><Text style={style.listHeaderText}>상품정보</Text></View>
        <View style={style.listItem}>
          <View style={style.listItemHeader}><Text style={style.listItemHeaderText}>상품명</Text></View>
          <View style={style.listItemContent}><Text style={style.listItemContentText}>위트니 메리제인 버클 펌프스 PMLTR1b4010c2</Text></View>
        </View>
        <View style={style.listItem}>
          <View style={style.listItemHeader}><Text style={style.listItemHeaderText}>판매단위</Text></View>
          <View style={style.listItemContent}><Text style={style.listItemContentText}>낱개</Text></View>
        </View>
        <View style={style.listItem}>
          <View style={style.listItemHeader}><Text style={style.listItemHeaderText}>기준판매가</Text></View>
          <View style={style.listItemContent}><Text style={style.listItemContentText}>0 원</Text></View>
        </View>
        <View style={style.listItem}>
          <View style={style.listItemHeader}><Text style={style.listItemHeaderText}>상품코드</Text></View>
          <View style={style.listItemContent}><Text style={style.listItemContentText}>PMLTR1b4010c2</Text></View>
        </View>
        {/* 공급처정보 */}
        <View style={style.listHeader}><Text style={style.listHeaderText}>공급처정보</Text></View>
        <View style={style.listItem}>
          <View style={style.listItemHeader}><Text style={style.listItemHeaderText}>공급처분류</Text></View>
          <View style={style.listItemContent}><Text style={style.listItemContentText}>Test 101</Text></View>
        </View>
        <View style={style.listItem}>
          <View style={style.listItemHeader}><Text style={style.listItemHeaderText}>공급처명</Text></View>
          <View style={style.listItemContent}><Text style={style.listItemContentText}>[자사]</Text></View>
        </View>
        {/* 옵션정보 */}
        <View style={style.listHeader}><Text style={style.listHeaderText}>옵션정보</Text></View>
        <View style={style.optionItem}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View>
                <Text>KW27179820001</Text>
              </View>
              <View style={style.optionItemHeader}>
                <View style={style.optionSoldoutTag}><Text style={style.optionSoldoutTagText}>미품절</Text></View>
                <View>
                  <Text style={style.optionNameText}>사이즈:225,색상:버건디</Text>
                </View>
              </View>
              <View style={style.optionItemContent}>
                {/* 할인정책 존재할 경우 Line Through 처리하기 */}
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Text style={ 1 == 1 ? { textDecorationLine: 'line-through' } : {} }>30,000원</Text>
                  <Text style={{ fontWeight: 'bold' }}>&nbsp;24,000원</Text>
                </View>
                <View>
                  <Text>할인정책명</Text>
                </View>
              </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: 16 }}>
              <Text>재고확인</Text>
            </View>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};
