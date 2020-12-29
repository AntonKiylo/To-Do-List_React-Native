import React from 'react'
import { FlatList, StyleSheet } from 'react-native'
import Todo from './Todo'

const TodoContainer = ({ todos, setTodos, storeData }) => {
  return (
    // <View>
    //   { todos.map(todo => <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} storeData={storeData} />) }
    // </View>
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo key={item.id} item={item} todos={todos} setTodos={setTodos} storeData={storeData} />}
      keyExtractor={item => item.id.toString()}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default TodoContainer