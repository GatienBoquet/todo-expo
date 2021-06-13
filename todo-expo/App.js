import * as React from 'react';
import {View, StyleSheet, TextInput,StatusBar , Platform } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Square from  './components/Square';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import Header from './src/components/_Shared/Header';
import TasksContainer from './src/components/TasksEpic/TasksContainer';



export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Header />
        <TasksContainer />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    paddingTop: Platform.OS === 'android'  ? StatusBar.currentHeight : 0,
    paddingLeft: 20,
    paddingRight: 20
  }
});
