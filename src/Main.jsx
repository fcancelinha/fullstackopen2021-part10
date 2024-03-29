import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './components/RepositoryList';
import AppBar from './components/AppBar';
import { Route, Switch } from 'react-router-native';
import SignIn from './components/SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
      </Switch>
    </View>
  );
};

export default Main;