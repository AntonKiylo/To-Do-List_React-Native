import React from 'react'
import { FlatList } from 'react-native'
import Todo from './Todo'

const TodoContainer = ({ todos, setTodos, storeData }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo key={item.id} item={item} todos={todos} setTodos={setTodos} storeData={storeData} />}
      keyExtractor={item => item.id.toString()}
    />
  )
}

export default TodoContainer