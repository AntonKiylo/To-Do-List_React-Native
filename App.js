import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Navbar from './components/Navbar'
import TodoContainer from './components/TodoContainer'
import TodoInput from './components/TodoInput'

const App = () => {
  const [todo, setTodo] = useState([])
  const [inputText, setInputText] = useState('')

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
      console.log(jsonValue)
    } catch (e) {
      
    }
  }
  useEffect(() => {
    storeData(todo)
  }, [todo])


  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@storage_Key')
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch(e) {
  //     // error reading value
  //   }
  // }
  

  


  return (
    <View style={styles.container}>
      <Navbar title='My first android app' />
      <View style={styles.content}>
        <TodoInput todo={todo} setTodo={setTodo} inputText={inputText} setInputText={setInputText} />
        <TodoContainer todo={todo} setTodo={setTodo} />
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