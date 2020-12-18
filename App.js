
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navbar from './components/Navbar'
import TodoInput from './components/TodoInput'


const App = () => {
  return (
    <View style={styles.container}>
      <Navbar title='My first android app' />
      <View style={styles.content}>
        <TodoInput />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {padding: 12}
})

export default App