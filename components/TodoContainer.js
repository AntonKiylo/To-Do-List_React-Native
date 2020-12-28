import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import Todo from './Todo'

const TodoContainer = ({ todo, setTodo, storeData }) => {
  return (
    <View style={styles.container}>
      {/* { todo !== null ? todo.map(item => <Text key={item.id}>{item.text}</Text>) : false } */}
      { todo.map(item => <Text key={item.id}>{item.text}</Text>) }
    </View>
    // <FlatList
    //   keyExtractor={item => item.id.toString()}
    //   data={todo}
    //   renderItem={({ item }) => <Todo key={todo.id} item={item} todo={todo} setTodo={setTodo} storeData={storeData} />}
    // />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default TodoContainer