import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Todo = ({ item, todo, setTodo, storeData }) => {
  
  const removeTodo = () => {
    const newTodo = [todo.filter(it => it.id !== item.id)]
    setTodo(newTodo)
    storeData(newTodo)
  }

  return (
    <TouchableOpacity style={styles.todo} onLongPress={removeTodo}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    backgroundColor: '#f1faee',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 18
  }
})

export default Todo