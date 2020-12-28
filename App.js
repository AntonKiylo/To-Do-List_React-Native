import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Navbar from './components/Navbar'
import TodoContainer from './components/TodoContainer'
import TodoInput from './components/TodoInput'

const App = () => {
  const [todo, setTodo] = useState([])
  
  const storeData = async (newTodo) => {
    try {
      const jsonTodo = JSON.stringify(newTodo)
      await AsyncStorage.setItem('@todo_Key', jsonTodo)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const jsonTodo = await AsyncStorage.getItem('@todo_Key')
      if (jsonTodo !== null) {
        setTodo(JSON.parse(jsonTodo))
      } else {
        return
      }
    } catch (e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <Navbar title='My first android app' />
      <View style={styles.content}>
        <TodoInput todo={todo} setTodo={setTodo} storeData={storeData} />
        <TodoContainer todo={todo} setTodo={setTodo} storeData={storeData} />
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