import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {getPeople} from '../asyncActions/getPeople';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Page1 = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [pagePeople, setPagePeople] = useState(0);

  const addAndGoFilms = () => {
    const loadScreen4 = () => {
      navigation.navigate('Page4');
    };
    loadScreen4();
  };

  const addAndGoPeople = () => {
    const loadScreen2 = () => {
      const loadDispatch2 = () => dispatch(getPeople(pagePeople));
      loadDispatch2();
      navigation.navigate('Page2');
    };
    loadScreen2();
  };

  return (
    <View style={styles.forPage1}>
      <Text style={styles.text}>SwapiApp</Text>
      <Pressable style={styles.forFilms} onPress={addAndGoFilms}>
        <LottieView
          source={require('../assets/110000-youtube-play-button.json')}
          autoPlay
          loop
        />
      </Pressable>
      <Pressable style={styles.forPeople} onPress={addAndGoPeople}>
        <LottieView
          source={require('../assets/39097-social-distance.json')}
          autoPlay
          loop
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  forPage1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forFilms: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
  },
  forPeople: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
  },
  text: {
    fontSize: 30,
    color: 'red',
  },
});

export default Page1;
