import React, {Component, Fragment} from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';

const MOCKED_MOVIES_DATA = [
  {
    title: '标题',
    year: '2015',
    // posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'},
    posters: {thumbnail: 'https://pics2.baidu.com/feed/962bd40735fae6cd244fdbdb1fd3202143a70f71.jpeg?token=e6ed1be0e24edd3b964413c971246b52&s=5FA487441607374F8CB214000300E09A'},
  },
];

export class FilmListAba extends Component {
  constructor() {
    super();
  }

  render() {
    const movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Image source={{uri: movie.posters.thumbnail}} style={styles.thumbnail}/>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
});

