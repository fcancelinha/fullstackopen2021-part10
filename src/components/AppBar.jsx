import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';
import theme from '../themes/theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#24292e",
    display: 'flex',
  },
  scrollable:{
    flexDirection: 'row'
  },
  pressable: {
    marginTop: 30,
    padding: 20
  },
  text: {
    color: "#FFFFFF",
    fontSize: theme.fontSizes.title
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollable} horizontal>
        <Pressable style={styles.pressable}>
          <Link to="/signin">
            <Text style={styles.text}> Signin </Text>
          </Link>
        </Pressable>
        <Pressable style={styles.pressable}>
          <Link to="/">
            <Text style={styles.text}> Repositories </Text>
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;