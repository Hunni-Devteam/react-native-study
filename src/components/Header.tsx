import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={{ height: 50, backgroundColor: '#555555' }}>
        <Text style={{ lineHeight: 50, textAlign: 'center', fontSize: 16, color: 'white' }}>
          Lorem IPsum
        </Text>
      </View>
    );
  }
};