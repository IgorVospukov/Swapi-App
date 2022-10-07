import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const OneFilmScreen = ({route}) => {
  const nameFilm = route.params.nameFilm;
  const director = route.params.director;
  const dateFilm = route.params.dateFilm;

  return (
    <View style={styles.forFilm}>
      <View style={styles.forMain}>
        <LottieView
          source={require('../assets/102875-cinema-clap.json')}
          autoPlay
          loop
        />
      </View>
      <Text>{`Name: ${nameFilm}`}</Text>
      <Text>{`Mass: ${director}`}</Text>
      <Text>{`Height: ${dateFilm}`}</Text>
    </View>
  );
};

export default OneFilmScreen;

const styles = StyleSheet.create({
  forFilm: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  forMain: {
    width: 200,
    height: 200,
  },
});
