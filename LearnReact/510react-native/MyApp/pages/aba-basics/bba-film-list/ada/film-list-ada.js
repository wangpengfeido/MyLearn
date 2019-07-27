import React, {Component, Fragment} from 'react';

import {Image, FlatList, StyleSheet, Text, View} from 'react-native';

const REQUEST_URL =
  'https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json';

export class FilmListAda extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then((responseData) => {
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true,
        });
      });
  };

  render() {
    console.warn('aaaaaaaaaa');
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}></FlatList>
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>正在加载电影数据...</Text>
      </View>
    );
  }

  renderMovie({item: movie}) {
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
  list: {
    paddingTop: 20,
    backgroundColor: '#f5fcff',
  },
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

