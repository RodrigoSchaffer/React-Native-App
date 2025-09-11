import React from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import { useUser } from '../UserContext';
import styles from '../Styles';

const ProfileScreen = () => {
  const { user, signOut } = useUser();

  return (
    <View style={styles.container}>
      <View style={profileStyles.card}>
        {user ? (
          <>
            <Image source={{ uri: 'https://rollingstone.com.br/wp-content/uploads/ciliian_murphy.jpg' }} style={profileStyles.profileImage} />
            <Text style={profileStyles.name}>{user.name}</Text>
            <Text style={profileStyles.email}>{user.email}</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={signOut} color="#61764B">
            <Text style={styles.buttonText}>SIGN OUT</Text>
            </TouchableOpacity>
            </View>
          </>
        ) : (
          <Text style={styles.header}></Text>
        )}
      </View>
    </View>
  );
};

const profileStyles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 32,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#61764B',
  },
  email: {
    fontSize: 16,
    color: '#61764B',
    marginBottom: 20,
  },
  buttonContainer: {
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

export default ProfileScreen;
