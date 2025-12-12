import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import styles from '../Styles';
import { useUser } from '../UserContext';


const HomeScreen = () => {
    const notes = ([
    { id: '1', text: 'Comprar Pão' },
    { id: '2', text: 'Estudar' },
    { id: '3', text: 'Fazer exercício' },
    { id: '4', text: 'Ir à Igreja' },
    { id: '5', text: 'Ir à Faculdade' },
  ]);
 
    const renderItem = ({ item }) => (
    <View style={notestyle.item}>
      <Text style={notestyle.text}>{item.text}</Text>
    </View>
  );
    const { user } = useUser();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Home.</Text>
      <View style={{ marginTop: 20 }}>
        {user ? (
          <>
            <Text style={{color: "#61764B", fontSize: 20, marginTop: -15}}>Welcome {user.displayName}. </Text>
          </>
        ) : (
          <Text style={styles.header}></Text>
        )}
        <View style={notestyle.container}>
        <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={notestyle.list}
        
      />
        </View>

      </View>
    </View>
  ); 
};
const notestyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: 40,
  },
  list: {
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#61764B',
  },
});

export default HomeScreen;
