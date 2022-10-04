import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getFilms} from '../asyncActions/getFilms';

const Page4 = ({navigation}) => {
  const [page, setPage] = useState(1);
  const Data = useSelector(state => state.reducerFilms.mydata);
  console.log('im from', Data);
  const LoadMoreData = () => {
    setPage(page + 1);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const loadDispatch1 = () => dispatch(getFilms(page));
    loadDispatch1();
  }, [page]);

  const loadOneFilm = item => {
    navigation.navigate('Page5', {
      nameFilm: item.title,
      director: item.director,
      dateFilm: item.release_date,
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.containName}>
        <Pressable onPress={() => loadOneFilm(item)} style={styles.forText}>
          <Text style={styles.forFilm}>{item.title}</Text>
        </Pressable>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
        onEndReached={LoadMoreData}
        onEndReachedThreshold={0}
      />
    </View>
  );
};

export default Page4;

const styles = StyleSheet.create({
  containName: {
    flex: 1,
    borderColor: 'grey',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forText: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forFilm: {
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
