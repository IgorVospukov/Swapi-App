import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const CharacterScreen = ({route}) => {
  const namePeople = route.params.namePeople;
  const mass = route.params.mass;
  const height = route.params.height;

  return (
    <View style={styles.forPeopll}>
      <View style={styles.forMain}>
        <LottieView
          source={require('../assets/4432-face-scanning.json')}
          autoPlay
          loop
        />
      </View>
      <Text>{`Name: ${namePeople}`}</Text>
      <Text>{`Mass: ${mass}`}</Text>
      <Text>{`Height: ${height}`}</Text>
    </View>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  forPeopll: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  forMain: {
    width: 200,
    height: 200,
  },
});
