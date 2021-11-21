import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../constants';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const onBoardings = [];
const OnBoarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.red} />
      <TouchableOpacity>
        <Text>Skip</Text>
        <Icon name="rocket" size={30} color="#900" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoarding;
