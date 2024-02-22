import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const showMessage = () => {
    Alert.alert('ClickMe', 'You clicked the button!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'purple' }}>
      <Text style={{ fontSize: 30 }}>HOME SCREEN</Text>
      <Button title='ClickMe' onPress={showMessage} />
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>LOGIN SCREEN</Text>
      <Button title='Go to home screen' onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Login' component={LoginScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
