/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';

import {} from 'react-native/Libraries/NewAppScreen';

import {FilmListAba} from './pages/aba-basics/bba-film-list/aba/film-list-aba';
import {FilmListAca} from './pages/aba-basics/bba-film-list/aca/film-list-aca';
import {FilmListAda} from './pages/aba-basics/bba-film-list/ada/film-list-ada';

const App = () => {
  return (
    <Fragment>
      <FilmListAda></FilmListAda>
    </Fragment>
  );
};

const styles = StyleSheet.create({});

export default App;
