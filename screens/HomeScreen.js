import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../Styles';
import { useUser } from '../UserContext';


const HomeScreen = () => {
    const { user } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home.</Text>
      <View style={{ marginTop: 20 }}>
        {user ? (
          <>
            <Text style={{color: "#61764B", fontSize: 15, marginTop: -15}}>Welcome {user.name}. </Text>
          </>
        ) : (
          <Text style={styles.header}></Text>
        )}
        
      </View>
    </View>
  ); 
};

export default HomeScreen;
