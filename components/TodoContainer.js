import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Todo from './Todo'

const TodoContainer = ({ todo, setTodo }) => {
  

  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={todo}
      renderItem={({ item }) => <Todo key={todo.id} item={item} todo={todo} setTodo={setTodo} />}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default TodoContainer