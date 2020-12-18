import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Navbar = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>      
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#e63946',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default Navbar