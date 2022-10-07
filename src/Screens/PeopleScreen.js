import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPeople} from '../asyncActions/getPeople';
const PeopleScreen = ({navigation}) => {
  const [page, setPage] = useState(1);
  const Data = useSelector(state => state.reducerPeople.mydata);
  console.log('page2', Data);
  const LoadMoreData = () => {
    setPage(page + 1);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    const loadDispatch1 = () => dispatch(getPeople(page));
    loadDispatch1();
  }, [page]);

  const loadOnePeople = item => {
    navigation.navigate('Page3', {
      namePeople: item.name,
      mass: item.mass,
      height: item.height,
    });
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.containName}>
        <Pressable onPress={() => loadOnePeople(item)} style={styles.forText}>
          <Text style={styles.forPeople}>{item.name}</Text>
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

export default PeopleScreen;

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
  forPeople: {
    width: '100%',
    alignSelf: 'center',
    textAlign: 'center',
  },
});
