import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  useEffect(() => {
    RNBootSplash.hide();
  }, []);
  return (
    <SafeAreaView>
      <Text style={{fontFamily: 'Roboto-Bold'}}>AAA</Text>
      <Text>AAA</Text>
      <Icon name="comments" size={30} color="#900" />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
