import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TaskNote.</Text>
      <View style={styles.buttonSpacing}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')} color="#61764B">
        <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}  color="#61764B">
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
    </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    marginBottom: 50,
    padding: 25,
    fontWeight: 'bold',
    color: "#61764B",
    alignSelf: 'center',
  },
  buttonSpacing:{
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    maxWidth: 300,
  },
  button: {
    backgroundColor: '#61764B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default WelcomeScreen;
